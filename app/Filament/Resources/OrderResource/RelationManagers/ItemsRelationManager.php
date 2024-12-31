<?php

declare(strict_types=1);

namespace App\Filament\Resources\OrderResource\RelationManagers;

use App\Models\Product;
use Exception;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;

class ItemsRelationManager extends RelationManager
{
    protected static string $relationship = 'orderItems';

    public static function getTitle(Model $ownerRecord, string $pageClass): string
    {
        return __('models.order_items');
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('product_id')
                    ->relationship('product', 'name')
                    ->getOptionLabelFromRecordUsing(fn(Product $product): string => $product->name . ($product->sku ? ' (' . $product->sku . ')' : ''))
                    ->searchable()
                    ->preload()
                    ->label(__('fields.product')),
                Forms\Components\TextInput::make('quantity')
                    ->integer()
                    ->minValue(1)
                    ->default(1)
                    ->required()
                    ->label(__('fields.quantity')),
                Forms\Components\TextInput::make('price')
                    ->required()
                    ->label(__('fields.price')),
            ]);
    }

    /**
     * @throws Exception
     */
    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('product.name')
                    ->searchable()
                    ->sortable()
                    ->label(__('fields.name')),
                Tables\Columns\TextColumn::make('product.sku')
                    ->searchable()
                    ->sortable()
                    ->label(__('fields.sku')),
                Tables\Columns\TextColumn::make('quantity')
                    ->searchable()
                    ->sortable()
                    ->summarize([
                        Tables\Columns\Summarizers\Sum::make(),
                    ])
                    ->label(__('fields.quantity')),
                Tables\Columns\TextColumn::make('price')
                    ->searchable()
                    ->sortable()
                    ->label(__('fields.price')),
                Tables\Columns\TextColumn::make('total_price')
                    ->searchable()
                    ->sortable()
                    ->summarize([
                        Tables\Columns\Summarizers\Sum::make()
                            ->money('rur'),
                    ])
                    ->label(__('fields.total_price')),
            ])
            ->filters([
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
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
            ->modelLabel(__('models.order_item'))
            ->emptyStateHeading(__('models.empty_items'));
    }
}
