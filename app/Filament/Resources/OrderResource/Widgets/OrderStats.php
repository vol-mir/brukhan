<?php

declare(strict_types=1);

namespace App\Filament\Resources\OrderResource\Widgets;

use App\Filament\Resources\OrderResource\Pages\ListOrders;
use App\Models\Order;
use Filament\Widgets\Concerns\InteractsWithPageTable;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class OrderStats extends StatsOverviewWidget
{
    use InteractsWithPageTable;

    protected static ?string $pollingInterval = null;

    /**
     * @var array<string,string>
     */
    public array $tableColumnSearches = [];

    protected function getTablePage(): string
    {
        return ListOrders::class;
    }

    protected function getStats(): array
    {
        $orderData = Trend::model(Order::class)
            ->between(
                start: now()->subYear(),
                end: now(),
            )
            ->perMonth()
            ->count();

        return [
            Stat::make(__('site.orders'), $this->getPageTableQuery()->count())
                ->chart(
                    /** @phpstan-ignore-next-line */
                    $orderData
                        /** @phpstan-ignore-next-line */
                        ->map(fn(TrendValue $value): float => (float) $value->aggregate)
                        ->toArray()
                ),
            Stat::make(__('site.open_orders'), $this->getPageTableQuery()->whereIn('status', ['open', 'processing'])->count()),
            Stat::make(__('site.average_price'), number_format((float)$this->getPageTableQuery()->avg('total_price'), 2)),
        ];
    }
}
