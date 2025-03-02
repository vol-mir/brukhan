<?php

declare(strict_types=1);

namespace App\Data;

use Spatie\LaravelData\Data;

class ProductData extends Data
{
    public function __construct(
        public string $slug,
    ) {
    }
}
