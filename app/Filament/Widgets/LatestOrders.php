<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Enums\OrderStatus;
use App\Filament\Resources\OrderResource;
use App\Models\Order;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestOrders extends BaseWidget
{
    protected int | string | array $columnSpan = 'full';

    protected static ?int $sort = 2;

    public function getTableHeading(): ?string
    {
        return __('site.latest_orders');
    }

    public function table(Table $table): Table
    {
        return $table
            ->query(OrderResource::getEloquentQuery())
            ->defaultPaginationPageOption(5)
            ->defaultSort('created_at', 'desc')
            ->columns([
                Tables\Columns\TextColumn::make('created_at')
                    ->date()
                    ->sortable()
                    ->label(__('fields.created_at')),
                Tables\Columns\TextColumn::make('number')
                    ->searchable()
                    ->sortable()
                    ->label(__('fields.number')),
                Tables\Columns\TextColumn::make('customer.name')
                    ->searchable()
                    ->sortable()
                    ->label(__('fields.customer')),
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
            ])
            ->actions([
                Tables\Actions\Action::make(__('site.open'))
                    ->url(fn(Order $record): string => OrderResource::getUrl('edit', ['record' => $record])),
            ]);
    }
}
