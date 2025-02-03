<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Actions\Api\V1\Common\SiteInfoAction;
use Illuminate\Http\JsonResponse;

class CommonController
{
    public function siteInfo(SiteInfoAction $action): JsonResponse
    {
        return new JsonResponse($action->run());
    }
}
