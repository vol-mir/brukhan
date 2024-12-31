<?php

declare(strict_types=1);

namespace App\Filament\Resources\ProductResource\Widgets;

use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ProductStats extends StatsOverviewWidget
{
    protected static ?string $pollingInterval = null;

    protected function getStats(): array
    {
        return [
            Stat::make(__('widgets.total_products'), Product::query()->count()),
            Stat::make(__('widgets.is_visible_total_products'), Product::query()->where('is_visible', true)->count()),
            Stat::make(__('widgets.is_popular_total_products'), Product::query()->where('is_popular', true)->count()),
        ];
    }
}
