<?php

declare(strict_types=1);

namespace App\Actions\Api\V1;

use App\Http\Resources\Api\V1\TagResource;
use App\Models\Tag;

class PopularTagsAction
{
    /**
     * @return array<string, mixed>
     */
    public function run(): array
    {
        $popularTags = Tag::query()
            ->withCount('products')
            ->orderBy('position')
            ->get();

        return [
            'popular_tags' => TagResource::collection($popularTags),
        ];
    }
}
