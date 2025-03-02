<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Product
 */
class ProductResource extends JsonResource
{
    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'slug' => $this->slug,
            'sku' => $this->sku,
            'description' => $this->description,
            'presentation' => $this->presentation,
            'is_popular' => $this->is_popular,
            'rating' => $this->rating,
            'category' => [
                'name' => $this->category?->name,
                'parent' => $this->category?->parent?->name,
            ],
            'price' => $this->price,
            'images' => ProductImageResource::collection($this->images)
        ];
    }
}
