<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductImage;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Throwable;

/**
 * @extends Factory<ProductImage>
 */
class ProductImageFactory extends Factory
{
    /**
     * Define the model's default state.
     * @throws Exception
     * @throws Throwable
     */
    public function definition(): array
    {
        $name = fake()->words(2, true);

        throw_unless(is_string($name), Exception::class, 'The variable $name is not string.');

        $imageUrl = 'https://dummyimage.com/640x480/ccc/000&text=' . $name;

        $response = Http::get($imageUrl);

        $fileName = null;
        if ($response->successful()) {
            $fileName = 'images/products/' . Str::uuid() . '.png';

            Storage::disk('public')->put($fileName, $response->body());
        }

        return [
            'image' => $fileName,
            'is_main' => true,
            'name' => fake()->words(2, true),
            'description' => fake()->sentence(),
            'product_id' => fake()->randomElement(Product::query()->pluck('id')->toArray()),
        ];
    }
}
