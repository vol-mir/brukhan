<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\ProductImage;
use Illuminate\Support\Facades\Storage;

class ProductImageObserver
{
    public function updated(ProductImage $productImage): void
    {
        $originalImage = $productImage->getOriginal('image');

        if (is_string($originalImage) && $productImage->image !== $originalImage && Storage::disk('public')->exists($originalImage)) {
            Storage::disk('public')->delete($originalImage);
        }
    }
}
