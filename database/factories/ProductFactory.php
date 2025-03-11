<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Throwable;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     * @throws Throwable
     */
    public function definition(): array
    {
        $name = fake()->unique()->words(3, true);

        throw_unless(is_string($name), Exception::class, 'The variable $name is not string.');

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'sku' => fake()->bothify('SKU-###-???'),
            'description' => fake()->sentence(40),
            'is_visible' => true,
            'is_popular' => true,
            'rating' => fake()->numberBetween(1, 5),
            'published_at' => fake()->dateTimeBetween('-1 year'),
            'price' => fake()->randomFloat(2, 10, 5000),
            'presentation' => fake()->sentence(80),
            'category_id' => fake()->randomElement(Category::query()->pluck('id')->toArray()),
        ];
    }
}
