<?php

declare(strict_types=1);

namespace App\Observers;

use App\Helpers\ImageHelper;
use App\Models\Product;

class ProductObserver
{
    public function updated(Product $product): void
    {
        $originalPresentation = $product->getOriginal('presentation');

        if ((is_string($originalPresentation) || $originalPresentation === null) && $product->presentation !== $originalPresentation) {
            ImageHelper::cleanUpOriginalContentImages($product->presentation, $originalPresentation);
        }
    }

    public function deleted(Product $product): void
    {
        ImageHelper::deleteContentImages($product->presentation);
    }
}
