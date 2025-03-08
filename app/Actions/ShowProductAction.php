<?php

declare(strict_types=1);

namespace App\Actions;

use App\Data\ShowProductData;
use App\Models\Product;

class GetProductBySlugAction
{
    public function run(ShowProductData $data): Product
    {
        return Product::query()
            ->where('slug', $data->slug)
            ->firstOrFail();
    }
}
