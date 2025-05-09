<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Category
 */
class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'image' => $this->image ? url('/') . '/' . $this->image : null,
            'description' => $this->description,
            'is_popular' => $this->is_popular,
            'name' => $this->name,
            'slug' => $this->slug,
            'link' => 'show-category',
            'product_count' => $this->getProductCount(),
        ];
    }

    private function getProductCount(): int
    {
        $productCount = $this->products()->count();

        foreach ($this->children as $child) {
            $productCount += (new self($child))->getProductCount();
        }

        return $productCount;
    }
}
