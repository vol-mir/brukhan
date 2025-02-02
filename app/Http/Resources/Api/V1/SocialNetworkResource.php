<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1;

use App\Models\SocialNetwork;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin SocialNetwork
 */
class SocialNetworkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'image' => $this->image,
            'url' => $this->url,
            'name' => $this->name,
            'slug' => $this->slug,
        ];
    }
}
