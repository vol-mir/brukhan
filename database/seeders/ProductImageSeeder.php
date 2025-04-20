<?php

declare(strict_types=1);

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

        $products->each(function ($product): void {
            ProductImage::factory(mt_rand(2, 4))
                ->create([
                    'product_id' => $product->id,
                ]);
        });
    }
}
