<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Actions\Api\V1\GetProductAction;
use App\Actions\Api\V1\GetProductsAction;
use App\Actions\Api\V1\GetProductsByTagsAction;
use App\Http\Requests\Api\V1\GetProductRequest;
use App\Http\Requests\Api\V1\GetProductsRequest;
use Illuminate\Http\JsonResponse;

class ProductController
{
    public function getProductsByTags(GetProductsByTagsAction $action): JsonResponse
    {
        return new JsonResponse($action->run());
    }

    public function getProduct(GetProductRequest $request, GetProductAction $action): JsonResponse
    {
        return new JsonResponse($action->run($request->toData()));
    }

    public function getProducts(GetProductsRequest $request, GetProductsAction $action): JsonResponse
    {
        return new JsonResponse($action->run($request->toData()));
    }
}
