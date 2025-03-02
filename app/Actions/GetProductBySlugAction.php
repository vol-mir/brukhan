<?php

declare(strict_types=1);

namespace App\Actions;

use App\Data\ProductData;
use App\Models\Product;

class GetProductBySlugAction
{
    public function run(ProductData $data): Product
    {
        return Product::query()
            ->where('slug', $data->slug)
            ->firstOrFail();
    }
}
