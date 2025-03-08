<?php

declare(strict_types=1);

namespace App\Actions;

use App\Data\GetProductData;
use App\Models\Product;

class ShowProductAction
{
    public function run(GetProductData $data): Product
    {
        return Product::query()
            ->where('slug', $data->slug)
            ->firstOrFail();
    }
}
