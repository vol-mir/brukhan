<?php

declare(strict_types=1);

namespace App\Actions\Api\V1;

use App\Data\GetProductsData;
use App\Http\Resources\Api\V1\ProductResource;
use App\Models\Product;
use Illuminate\Pagination\LengthAwarePaginator;

class GetProductsAction
{
    /**
     * @return array<string, mixed>
     */
    public function run(GetProductsData $data): array
    {
        $query = Product::query()
            ->with(['category', 'category.parent', 'images', 'tags']);

        if ($data->category) {
            $query->whereHas('category', function ($q) use ($data): void {
                $q->where('slug', $data->category)
                    ->orWhereHas('parent', function ($parentQuery) use ($data): void {
                        $parentQuery->where('slug', $data->category);
                    })
                    ->orWhereHas('children', function ($childrenQuery) use ($data): void {
                        $childrenQuery->where('slug', $data->category);
                    });
            });
        }

        if ($data->min_price !== null) {
            $query->where('price', '>=', $data->min_price);
        }

        if ($data->max_price !== null) {
            $query->where('price', '<=', $data->max_price);
        }

        if (!empty($data->tags)) {
            $query->whereHas('tags', function ($q) use ($data): void {
                $q->whereIn('slug', $data->tags);
            });
        }

        if ($data->order) {
            foreach ($data->order as $field => $direction) {
                $query->orderBy($field, $direction);
            }
        }

        $allProducts = $query->get();

        $perPage = 10;
        $currentPage = $data->page ?? 1;
        $startingPoint = ($currentPage - 1) * $perPage;

        $paginatedItems = $allProducts->slice($startingPoint, $perPage);

        $paginator = new LengthAwarePaginator(
            $paginatedItems,
            $allProducts->count(),
            $perPage,
            $currentPage,
            ['path' => request()->url(), 'query' => request()->query()]
        );

        return [
            'products' => ProductResource::collection($paginator->items()),
            'pagination' => [
                'total' => $paginator->total(),
                'per_page' => $paginator->perPage(),
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
            ],
        ];
    }
}
