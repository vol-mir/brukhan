<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class OrdersChart extends ChartWidget
{
    protected static ?int $sort = 1;

    public function getHeading(): ?string
    {
        return __('site.orders_per_month');
    }

    protected function getType(): string
    {
        return 'line';
    }

    protected function getData(): array
    {
        $data = $this->getMonthlyOrderData();

        return [
            'datasets' => [
                [
                    'label' => __('models.orders'),
                    'data' => array_values($data),
                    'fill' => 'start',
                ],
            ],
            'labels' => array_keys($data),
        ];
    }

    /**
     * @return array<string, int>
     */
    private function getMonthlyOrderData(): array
    {
        $filterDate = array_key_exists('startDate', $this->filters ?? [])
            ? $this->filters['startDate']
            : null;

        $selectDate = is_string($filterDate)
            ? Carbon::parse($filterDate)
            : Carbon::now();

        $startOfYear = $selectDate->copy()->startOfYear();
        $endOfYear = $selectDate->copy()->endOfYear();

        $monthlyData = DB::table('orders')
            ->selectRaw('EXTRACT(MONTH FROM created_at) as month, COUNT(*) as total')
            ->whereBetween('created_at', [$startOfYear, $endOfYear])
            ->groupBy('month')
            ->oldest('month')
            ->get()
            ->mapWithKeys(fn($item) => [(string)$item->month => (int)$item->total])
            ->toArray();

        $data = [];
        foreach (range(1, 12) as $month) {
            $carbonCreate = Carbon::create();

            if (!$carbonCreate instanceof Carbon) {
                continue;
            }

            $value = isset($monthlyData[$month]) && is_numeric($monthlyData[$month])
                ? (int)$monthlyData[$month]
                : 0;

            $data[$carbonCreate->month($month)->format('M')] = $value;
        }

        return $data;
    }
}
