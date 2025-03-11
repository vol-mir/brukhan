<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * @extends Factory<ProductImage>
 */
class ProductImageFactory extends Factory
{
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        $name = $this->faker->words(2, true);

        $imageUrl = "https://dummyimage.com/640x480/ccc/000&text=$name";

        $response = Http::get($imageUrl);

        $fileName = null;
        if ($response->successful()) {
            $fileName = 'images/products/' . Str::uuid() . '.png';

            Storage::disk('public')->put($fileName, $response->body());
        }

        return [
            'image' => $fileName,
            'is_main' => true,
            'name' => $this->faker->words(2, true),
            'description' => $this->faker->sentence(),
            'product_id' => $this->faker->randomElement(Product::pluck('id')->toArray()),
        ];
    }
}
