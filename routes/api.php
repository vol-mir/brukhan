<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::get("/test-me", fn(): string => 'Hello from Laravel!');
