<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Actions\Api\V1\Product\GetProductsByTagsAction;
use Illuminate\Http\JsonResponse;

class ProductController
{
    public function getProductsByTags(GetProductsByTagsAction $action): JsonResponse
    {
        return new JsonResponse($action->run());
    }
}
