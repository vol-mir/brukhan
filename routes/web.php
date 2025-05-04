<?php

declare(strict_types=1);

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::controller(HomeController::class)->group(function (): void {
    Route::get('/', 'home')->name('home');
    Route::get('/about-us', 'aboutUs')->name('about-us');
    Route::get('/contacts', 'contacts')->name('contacts');
    Route::get('/faq', 'faq')->name('faq');
    Route::get('/privacy-policy', 'privacyPolicy')->name('privacy-policy');
    Route::get('/policy-cookies', 'policyCookies')->name('policy-cookies');
    Route::get('/bank-details', 'bankDetails')->name('bank-details');
    Route::get('/delivery', 'delivery')->name('delivery');
    Route::get('/product/{slug}', 'showProduct')->name('show-product');
    Route::get('/category/{slug}', 'showCategory')->name('show-category');
});
