<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Product
 */
class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $imageMain = null;
        $imageHover = null;

        foreach ($this->images as $image) {
            if (!$image->is_main) {
                continue;
            }

            if ($imageMain === null) {
                $imageMain = url('/') . '/' . $image->image;
            }

            $imageHover = url('/') . '/' . $image->image;

            if ($imageMain === $imageHover) {
                $imageHover = null;
            }

            if ($imageHover) {
                break;
            }
        }

        return [
            'name' => $this->name,
            'slug' => $this->slug,
            'sku' => $this->sku,
            'description' => $this->description,
            'is_popular' => $this->is_popular,
            'rating' => $this->rating,
            'category' => [
                'name' => $this->category?->name,
                'parent' => $this->category?->parent?->name,
            ],
            'price' => $this->price,
            'image_main' => $imageMain,
            'image_hover' => $imageHover ?? $imageMain,
        ];
    }
}
