<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1;

use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Brand
 */
class BrandResource extends JsonResource
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
            'url' => $this->url,
            'name' => $this->name,
            'slug' => $this->slug,
        ];
    }
}
