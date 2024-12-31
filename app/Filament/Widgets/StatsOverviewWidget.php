<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Data\StatsData;
use App\Models\Order;
use Carbon\Carbon;
use Filament\Widgets\Concerns\InteractsWithPageFilters;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class StatsOverviewWidget extends BaseWidget
{
    use InteractsWithPageFilters;

    protected static ?int $sort = 0;

    protected Carbon $startDate;

    protected Carbon $endDate;

    protected Carbon $prevStartDate;

    protected Carbon $prevEndDate;

    protected function getStats(): array
    {
        $this->getDateRanges();

        $currentStats = $this->calculateStats($this->startDate, $this->endDate);
        $previousStats = $this->calculateStats($this->prevStartDate, $this->prevEndDate);

        $revenueStat = $this->buildRevenueStat(
            $currentStats->total,
            $previousStats->total,
            $currentStats->orderDetails
        );

        $newCustomersStat = $this->buildNewCustomersStat(
            $currentStats->newCustomers,
            $previousStats->newCustomers,
            $currentStats->newCustomersChart
        );

        $newOrdersStat = $this->buildNewOrdersStat(
            $currentStats->ordersCount,
            $previousStats->ordersCount,
            $currentStats->ordersChart
        );

        return [$revenueStat, $newCustomersStat, $newOrdersStat];
    }

    private function getDateRanges(): void
    {
        $filtersStartDate = array_key_exists('startDate', $this->filters ?? [])
            ? $this->filters['startDate']
            : null;

        $filtersEndDate = array_key_exists('endDate', $this->filters ?? [])
            ? $this->filters['endDate']
            : null;

        $this->startDate = is_string($filtersStartDate)
            ? Carbon::parse($filtersStartDate)->startOfDay()
            : now()->startOfMonth()->startOfDay();

        $this->endDate = is_string($filtersEndDate)
            ? Carbon::parse($filtersEndDate)->startOfDay()
            : now()->endOfMonth()->endOfDay();

        $interval = $this->startDate->diffInDays($this->endDate);

        $this->prevStartDate = $this->startDate->copy()->subDays($interval + 1)->startOfDay();
        $this->prevEndDate = $this->endDate->copy()->subDays($interval + 1)->endOfDay();
    }

    private function calculateStats(Carbon $startDate, Carbon $endDate): StatsData
    {
        $orders = $this->getOrders($startDate, $endDate);

        return new StatsData(
            total: $this->calculateTotal($orders),
            orderDetails: $this->getOrderDetails($orders),
            newCustomers: $this->getNewCustomersCount($startDate, $endDate),
            newCustomersChart: $this->getNewCustomersChart($startDate, $endDate),
            ordersCount: $orders->count(),
            ordersChart: $this->getOrdersChart($startDate, $endDate)
        );
    }

    /**
     * @return Collection<int, Order>
     */
    private function getOrders(Carbon $startDate, Carbon $endDate): Collection
    {
        return Order::query()->whereBetween('created_at', [$startDate, $endDate])->get();
    }

    /**
     * @param Collection<int, Order> $orders
     */
    private function calculateTotal(Collection $orders): float
    {
        $sum = $orders->sum('total_price');

        return is_numeric($sum) ? (float)$sum : 0;
    }

    /**
     * @param Collection<int, Order> $orders
     * @return array<float>
     */
    private function getOrderDetails(Collection $orders): array
    {
        /** @phpstan-ignore-next-line */
        return $orders->map(fn(Order $order): float => (float)$order->total_price)->toArray();
    }

    private function getNewCustomersCount(Carbon $startDate, Carbon $endDate): int
    {
        return Order::query()
            ->whereBetween('created_at', [$startDate, $endDate])
            ->whereDoesntHave('previousOrders', function (Builder $query) use ($startDate, $endDate): void {
                $query->whereBetween('created_at', [$startDate->copy()->subMonth(), $endDate->copy()->subMonth()]);
            })
            ->distinct('customer_id')
            ->count('customer_id');
    }

    /**
     * @return array<string, int>
     */
    private function getNewCustomersChart(Carbon $startDate, Carbon $endDate): array
    {
        /** @phpstan-ignore-next-line */
        return DB::table('orders')
            ->selectRaw('DATE(created_at) as date, COUNT(DISTINCT customer_id) as orders')
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy('date')
            ->orderByRaw('DATE(created_at) ASC')
            ->get()
            ->mapWithKeys(fn($item) => [(string)$item->date => (int)$item->orders])
            ->toArray();
    }

    /**
     * @return array<string, int>
     */
    private function getOrdersChart(Carbon $startDate, Carbon $endDate): array
    {
        /** @phpstan-ignore-next-line */
        return DB::table('orders')
            ->selectRaw('DATE(created_at) as date, COUNT(*) as orders')
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy('date')
            ->orderByRaw('DATE(created_at) ASC')
            ->get()
            ->mapWithKeys(fn($item) => [(string)$item->date => (int)$item->orders])
            ->toArray();
    }

    /**
     * @param array<float> $orderDetails
     */
    private function buildRevenueStat(float $currentTotal, float $prevTotal, array $orderDetails): Stat
    {
        $difference = round($currentTotal - $prevTotal, 2);

        return Stat::make(__('site.revenue'), $currentTotal . ' ' . __('site.rur'))
            ->description($difference . ' ' . __('site.rur') . ' ' . ($difference >= 0 ? __('site.increase') : __('site.decrease')))
            ->descriptionIcon($difference >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
            ->chart($orderDetails)
            ->color($difference >= 0 ? 'success' : 'danger');
    }

    /**
     * @param array<string, int> $chart
     */
    private function buildNewCustomersStat(int $current, int $previous, array $chart): Stat
    {
        $change = $this->calculateChange($current, $previous);

        return Stat::make(__('site.new_customers'), $current)
            ->description(abs($change) . '% ' . ($change < 0 ? __('site.decrease') : __('site.increase')))
            ->descriptionIcon($change < 0 ? 'heroicon-m-arrow-trending-down' : 'heroicon-m-arrow-trending-up')
            ->chart($chart)
            ->color($change < 0 ? 'danger' : 'success');
    }

    /**
     * @param array<string, int> $chart
     */
    private function buildNewOrdersStat(int $current, int $previous, array $chart): Stat
    {
        $change = $this->calculateChange($current, $previous);

        return Stat::make(__('site.new_orders'), $current)
            ->description(abs($change) . '% ' . ($change < 0 ? __('site.decrease') : __('site.increase')))
            ->descriptionIcon($change < 0 ? 'heroicon-m-arrow-trending-down' : 'heroicon-m-arrow-trending-up')
            ->chart($chart)
            ->color($change < 0 ? 'danger' : 'success');
    }

    private function calculateChange(int $current, int $previous): float
    {
        return $previous > 0 ? (($current - $previous) / $previous) * 100 : 0;
    }
}
