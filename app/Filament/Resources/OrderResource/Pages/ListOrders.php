<?php

declare(strict_types=1);

namespace App\Filament\Resources\OrderResource\Pages;

use App\Filament\Resources\OrderResource;
use Filament\Actions;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;

class ListOrders extends ListRecords
{
    protected static string $resource = OrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return OrderResource::getWidgets();
    }

    public function getTabs(): array
    {
        return [
            null => Tab::make(__('site.order_statuses.all')),
            (string)__('site.order_statuses.new') => Tab::make()->query(fn($query) => $query->where('status', 'new')),
            (string)__('site.order_statuses.processing') => Tab::make()->query(fn($query) => $query->where('status', 'processing')),
            (string)__('site.order_statuses.shipped') => Tab::make()->query(fn($query) => $query->where('status', 'shipped')),
            (string)__('site.order_statuses.delivered') => Tab::make()->query(fn($query) => $query->where('status', 'delivered')),
            (string)__('site.order_statuses.cancelled') => Tab::make()->query(fn($query) => $query->where('status', 'cancelled')),
        ];
    }
}
