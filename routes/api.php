<?php

declare(strict_types=1);

use App\Http\Controllers\Api\V1\CommonController;
use Illuminate\Support\Facades\Route;

Route::controller(CommonController::class)->prefix('v1')->group(function (): void {
    Route::get('/site-info', 'siteInfo')->name('site-info');
});
