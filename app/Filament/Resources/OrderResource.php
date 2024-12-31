<?php

declare(strict_types=1);

namespace App\Filament\Resources;

use App\Enums\OrderStatus;
use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Filament\Resources\OrderResource\Widgets\OrderStats;
use App\Models\Order;
use Exception;
use Filament\Forms;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Random\RandomException;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $recordTitleAttribute = 'number';

    protected static ?string $navigationIcon = 'heroicon-o-shopping-cart';

    protected static ?int $navigationSort = 4;

    public static function getNavigationGroup(): string
    {
        return __('navigation.company');
    }

    public static function getPluralModelLabel(): string
    {
        return __('models.orders');
    }

    public static function getModelLabel(): string
    {
        return __('models.order');
    }

    /**
     * @throws RandomException
     */
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema(static::getDetailsFormSchema())
                            ->columns(2),
                    ])
                    ->columnSpan(['lg' => fn(?Order $record): int => $record instanceof Order ? 2 : 3]),
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Placeholder::make('created_at')
                            ->label(__('fields.created_at'))
                            ->content(fn(Order $record): ?string => $record->created_at?->diffForHumans()),

                        Forms\Components\Placeholder::make('updated_at')
                            ->label(__('fields.updated_at'))
                            ->content(fn(Order $record): ?string => $record->updated_at?->diffForHumans()),
                    ])
                    ->columnSpan(['lg' => 1])
                    ->hidden(fn(?Order $record): bool => !$record instanceof Order),
            ])
            ->columns(3);
    }

    /**
     * @throws Exception
     */
    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('number')
                    ->searchable()
                    ->sortable()
                    ->label(__('fields.number')),
                Tables\Columns\TextColumn::make('customer.name')
                    ->searchable()
                    ->sortable()
                    ->toggleable()
                    ->label(__('fields.customer_name')),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn(string $state): string => OrderStatus::tryFrom($state)?->getLabel() ?? $state)
                    ->colors([
                        'info' => fn($state): bool => $state === OrderStatus::New->value,
                        'success' => fn($state): bool => $state === OrderStatus::Shipped->value || $state === OrderStatus::Delivered->value,
                        'warning' => fn($state): bool => $state === OrderStatus::Processing->value,
                        'danger' => fn($state): bool => $state === OrderStatus::Cancelled->value,
                    ])
                    ->label(__('fields.status')),
                Tables\Columns\TextColumn::make('total_price')
                    ->searchable()
                    ->sortable()
                    ->summarize([
                        Tables\Columns\Summarizers\Sum::make()
                            ->money('rur'),
                    ])
                    ->label(__('fields.total_price')),
                Tables\Columns\TextColumn::make('created_at')
                    ->date()
                    ->toggleable()
                    ->label(__('fields.created_at')),
            ])
            ->filters([
                Tables\Filters\Filter::make('created_at')
                    ->form([
                        Forms\Components\DatePicker::make('created_from')
                            ->label(__('site.created_from'))
                            ->placeholder(fn($state): string => 'Dec 18, ' . now()->subYear()->format('Y')),
                        Forms\Components\DatePicker::make('created_until')
                            ->label(__('site.created_until'))
                            ->placeholder(fn($state): string => now()->format('M d, Y')),
                    ])
                    ->query(fn(Builder $query, array $data): Builder => $query
                        ->when(
                            $data['created_from'] ?? null,
                            fn(Builder $query, $date): Builder => $query->whereDate('created_at', '>=', $date),
                        )
                        ->when(
                            $data['created_until'] ?? null,
                            fn(Builder $query, $date): Builder => $query->whereDate('created_at', '<=', $date),
                        ))
                    ->indicateUsing(function (array $data): array {
                        $indicators = [];
                        if ($data['created_from'] ?? null) {
                            $indicators['created_from'] = __('site.order_from') . ' ' . Carbon::parse($data['created_from'])->format('d.m.Y');
                        }

                        if ($data['created_until'] ?? null) {
                            $indicators['created_until'] = __('site.order_until') . ' ' . Carbon::parse($data['created_until'])->format('d.m.Y');
                        }

                        return $indicators;
                    }),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->groups([
                Tables\Grouping\Group::make('created_at')
                    ->label(__('fields.created_at'))
                    ->date()
                    ->collapsible(),
            ])
            ->emptyStateHeading(__('models.empty_items'));
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\ItemsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['number', 'customer.name'];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        /** @var Order $record */

        return [
            (string)__('models.customer') => (string)$record->customer?->name,
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        /** @var class-string<Model> $modelClass */
        $modelClass = static::$model;

        /** @phpstan-ignore-next-line */
        return (string) $modelClass::where('status', 'new')->count();
    }

    /**
     * @return Forms\Components\Component[]
     * @throws RandomException
     */
    public static function getDetailsFormSchema(): array
    {
        return [
            Forms\Components\TextInput::make('number')
                ->default('OR-' . random_int(100000, 999999))
                ->disabled()
                ->dehydrated()
                ->required()
                ->maxLength(32)
                ->unique(Order::class, 'number', ignoreRecord: true)
                ->label(__('fields.number')),

            Forms\Components\Select::make('customer_id')
                ->relationship('customer', 'name')
                ->label(__('fields.customer'))
                ->searchable()
                ->preload()
                ->required()
                ->createOptionForm([
                    Forms\Components\TextInput::make('name')
                        ->required()
                        ->maxLength(255)
                        ->label(__('fields.name')),

                    Forms\Components\TextInput::make('email')
                        ->label('Email address')
                        ->required()
                        ->email()
                        ->maxLength(255)
                        ->unique()
                        ->label(__('fields.email')),

                    Forms\Components\TextInput::make('phone')
                        ->maxLength(255)
                        ->label(__('fields.phone')),
                ])
                ->createOptionAction(fn(Action $action): Action => $action
                    ->modalWidth('lg')),

            Forms\Components\ToggleButtons::make('status')
                ->inline()
                ->options(OrderStatus::class)
                ->required()
                ->label(__('fields.status')),

            Forms\Components\Textarea::make('notes')
                ->maxLength(255)
                ->columnSpan('full')
                ->label(__('fields.notes')),
        ];
    }

    public static function getWidgets(): array
    {
        return [
            OrderStats::class,
        ];
    }
}
