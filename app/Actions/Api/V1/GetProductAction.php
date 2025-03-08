<?php

declare(strict_types=1);

namespace App\Actions\Api\V1;

use App\Data\GetProductData;
use App\Http\Resources\Api\V1\ProductResource;
use App\Models\Product;

class GetProductAction
{
    /**
     * @return array<string, mixed>
     */
    public function run(GetProductData $data): array
    {
        $product = Product::query()
            ->where('slug', $data->slug)
            ->firstOrFail();

        return [
            'product' => ProductResource::make($product),
        ];
    }
}
