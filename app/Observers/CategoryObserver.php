<?php

declare(strict_types=1);

namespace App\Observers;

use App\Helpers\ImageHelper;
use App\Models\Category;

class CategoryObserver
{
    public function updated(Category $category): void
    {
        $originalDescription = $category->getOriginal('description');

        if ((is_string($originalDescription) || $originalDescription === null) && $category->description !== $originalDescription) {
            ImageHelper::cleanUpOriginalContentImages($category->description, $originalDescription);
        }
    }

    public function deleted(Category $category): void
    {
        ImageHelper::deleteContentImages($category->description);
    }
}
