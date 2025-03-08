<?php

declare(strict_types=1);

use App\Http\Controllers\Api\V1\CommonController;
use App\Http\Controllers\Api\V1\ProductController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->name('v1.')->group(function (): void {
    Route::controller(CommonController::class)->name('common.')->group(function (): void {
        Route::get('/site-info', 'siteInfo')->name('site-info');
        Route::get('/popular-tags', 'popularTags')->name('popular-tags');
    });
    Route::controller(ProductController::class)->name('product.')->group(function (): void {
        Route::get('/products/tags', 'getProductsByTags')->name('tags');
        Route::get('/product/{slug}', 'getProduct')->name('get-product')->where('slug', '[a-zA-Z0-9-]+');
        Route::get('/products', 'getProducts')->name('get-products');
    });
});
