<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::get('/{vue_capture?}', fn() => view('app'))->where('vue_capture', '^(?!api|admin).*$');
