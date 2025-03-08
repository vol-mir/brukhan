<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Actions\Api\V1\PopularTagsAction;
use App\Actions\Api\V1\SiteInfoAction;
use Illuminate\Http\JsonResponse;

class CommonController
{
    public function siteInfo(SiteInfoAction $action): JsonResponse
    {
        return new JsonResponse($action->run());
    }

    public function popularTags(PopularTagsAction $action): JsonResponse
    {
        return new JsonResponse($action->run());
    }
}
