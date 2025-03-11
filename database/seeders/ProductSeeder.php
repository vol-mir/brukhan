<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::all();

        $categories->each(function ($category): void {
            Product::factory(random_int(10, 30))
                ->create([
                    'category_id' => $category->id,
                ]);
        });
    }
}
