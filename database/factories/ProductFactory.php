<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->words(3, true);

        return array(
            'name' => $name,
            'slug' => Str::slug($name),
            'sku' => $this->faker->bothify('SKU-###-???'),
            'description' => $this->faker->sentence(40),
            'is_visible' => true,
            'is_popular' => true,
            'rating' => $this->faker->numberBetween(1, 5),
            'published_at' => $this->faker->dateTimeBetween('-1 year'),
            'price' => $this->faker->randomFloat(2, 10, 5000),
            'presentation' => $this->faker->sentence(80),
            'category_id' => $this->faker->randomElement(Category::pluck('id')->toArray()),
        );
    }
}
