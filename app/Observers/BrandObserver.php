<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\Brand;
use Illuminate\Support\Facades\Storage;

class BrandObserver
{
    public function updated(Brand $brand): void
    {
        $originalImage = $brand->getOriginal('image');

        if (is_string($originalImage) && $brand->image !== $originalImage && Storage::disk('public')->exists($originalImage)) {
            Storage::disk('public')->delete($originalImage);
        }
    }
}
