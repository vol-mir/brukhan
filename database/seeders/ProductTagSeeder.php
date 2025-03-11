<?php

declare(strict_types=1);

namespace Database\Seeders;

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

        Product::all()->each(function ($product) use ($tags): void {
            $randomTags = $tags->random(random_int(1, 5))->pluck('id');

            $product->tags()->sync($randomTags);
        });
    }
}
