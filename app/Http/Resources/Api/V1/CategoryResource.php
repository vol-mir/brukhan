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
            'image' => url('/') . '/' . $this->image,
            'description' => $this->description,
            'is_popular' => $this->is_popular,
            'name' => $this->name,
            'slug' => $this->slug,
        ];
    }
}
