<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class ProductTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = Tag::all();

        Product::all()->each(function ($product) use ($tags) {
            $randomTags = $tags->random(rand(1, 5))->pluck('id');

            $product->tags()->sync($randomTags);
        });

    }
}
