<?php

declare(strict_types=1);

namespace App\Data;

use Spatie\LaravelData\Data;

class StatsData extends Data
{
    /**
     * @param array<float> $orderDetails
     * @param array<string, int> $newCustomersChart
     * @param array<string, int> $ordersChart
     */
    public function __construct(
        public float $total,
        public array $orderDetails,
        public int $newCustomers,
        public array $newCustomersChart,
        public int $ordersCount,
        public array $ordersChart
    ) {
    }
}
