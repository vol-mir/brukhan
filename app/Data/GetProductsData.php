<?php

declare(strict_types=1);

namespace App\Data;

use Spatie\LaravelData\Data;

class GetProductsData extends Data
{
    /**
     * @param array<string,string>|null $order
     * @param array<string>|null $tags
     */
    public function __construct(
        public ?string $category = null,
        public ?int $page = null,
        public ?array $order = null,
        public ?float $min_price = null,
        public ?float $max_price = null,
        public ?array $tags = null,
    ) {
    }
}
