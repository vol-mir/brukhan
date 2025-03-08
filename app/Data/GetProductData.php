<?php

declare(strict_types=1);

namespace App\Data;

use Spatie\LaravelData\Data;

class ShowProductData extends Data
{
    public function __construct(
        public string $slug,
    ) {
    }
}
