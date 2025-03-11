<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Seeder;

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = Product::all();

        $products->each(function ($product) {
            ProductImage::factory(rand(3,6))
                ->create([
                    'product_id' => $product->id,
                ]);
        });

    }
}
