<?php

declare(strict_types=1);

use App\Http\Controllers\Api\V1\CommonController;
use App\Http\Controllers\Api\V1\ProductController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->name('v1.')->group(function (): void {
    Route::controller(CommonController::class)->name('common.')->group(function (): void {
        Route::get('/site-info', 'siteInfo')->name('site-info');
    });
    Route::controller(ProductController::class)->name('product.')->group(function (): void {
        Route::get('/products/tags', 'getProductsByTags')->name('get-products-by-tags');
    });
});
