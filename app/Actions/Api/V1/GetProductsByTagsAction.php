<?php

declare(strict_types=1);

namespace App\Actions\Api\V1\Product;

use App\Http\Resources\Api\V1\ProductResource;
use App\Http\Resources\Api\V1\TagResource;
use App\Models\Tag;

class GetProductsByTagsAction
{
    /**
     * @return array<string, mixed>
     */
    public function run(): array
    {
        $popularTags = Tag::query()
            ->withCount('products')
            ->orderBy('position')
            ->take(4)
            ->get();

        $tagGroups = $popularTags->map(fn($tag): array => [
            'tag' => new TagResource($tag),
            'products' => ProductResource::collection(
                $tag->products()->take(8)->get()
            )
        ]);

        return [
            'tag_groups' => $tagGroups
        ];
    }
}
