<?php

declare(strict_types=1);

namespace App\Actions;

use App\Data\CategoryData;
use App\Models\Category;

class ShowCategoryAction
{
    public function run(CategoryData $data): Category
    {
        return Category::query()
            ->where('slug', $data->slug)
            ->firstOrFail();
    }
}
