<?php

declare(strict_types=1);

namespace App\Data;

use Spatie\LaravelData\Data;

class CategoryData extends Data
{
    public function __construct(
        public string $slug,
    ) {
    }
}
