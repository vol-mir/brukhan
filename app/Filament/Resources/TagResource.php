<?php

declare(strict_types=1);

namespace App\Filament\Resources;

use App\Filament\Resources\TagResource\Pages;
use App\Models\Tag;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class TagResource extends Resource
{
    protected static ?string $model = Tag::class;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationIcon = 'heroicon-s-tag';

    protected static ?int $navigationSort = 6;

    public static function getNavigationGroup(): string
    {
        return __('navigation.company');
    }

    public static function getPluralModelLabel(): string
    {
        return __('models.tags');
    }

    public static function getModelLabel(): string
    {
        return __('models.tag');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Grid::make()
                            ->schema([
                                Forms\Components\TextInput::make('name')
                                    ->required()
                                    ->live(onBlur: true)
                                    ->maxLength(255)
                                    ->afterStateUpdated(fn(string $operation, $state, Forms\Set $set): mixed => in_array($operation, ['create', 'edit']) ? $set('slug', Str::slug($state)) : null)
                                    ->label(__('fields.name')),
                                Forms\Components\TextInput::make('slug')
                                    ->dehydrated()
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(Tag::class, 'slug', ignoreRecord: true)
                                    ->label(__('fields.slug')),
                                Forms\Components\TextInput::make('position')
                                    ->integer()
                                    ->minValue(1)
                                    ->default(1)
                                    ->label(__('fields.position')),
                            ]),

                        Forms\Components\Toggle::make('is_popular')
                            ->label(__('fields.is_popular')),

                        Forms\Components\Textarea::make('description')
                            ->maxLength(65535)
                            ->columnSpan('full')
                            ->label(__('fields.description')),
                    ])
                    ->columnSpan(['lg' => 3]),
            ])
            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label(__('fields.name'))
                    ->searchable()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_popular')
                    ->boolean()
                    ->label(__('fields.is_popular')),
                Tables\Columns\TextColumn::make('position')
                    ->label(__('fields.position'))
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
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
            ->emptyStateHeading(__('models.empty_items'));
    }

    public static function getRelations(): array
    {
        return [
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTags::route('/'),
            'create' => Pages\CreateTag::route('/create'),
            'edit' => Pages\EditTag::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'slug'];
    }
}
