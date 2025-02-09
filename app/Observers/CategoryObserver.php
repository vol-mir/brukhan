<?php

declare(strict_types=1);

namespace App\Observers;

use App\Helpers\ImageHelper;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;

class CategoryObserver
{
    public function updated(Category $category): void
    {
        $originalDescription = $category->getOriginal('description');

        if ((is_string($originalDescription) || $originalDescription === null) && $category->description !== $originalDescription) {
            ImageHelper::cleanUpOriginalContentImages($category->description, $originalDescription);
        }

        $originalImage = $category->getOriginal('image');

        if (is_string($originalImage) && $category->image !== $originalImage && Storage::disk('public')->exists($originalImage)) {
            Storage::disk('public')->delete($originalImage);
        }
    }

    public function deleted(Category $category): void
    {
        ImageHelper::deleteContentImages($category->description);
    }
}
