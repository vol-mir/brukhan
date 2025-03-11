<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * @extends Factory<Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->words(2, true);

        $imageUrl = "https://dummyimage.com/1020x550/ccc/000&text=$name";

        $response = Http::get($imageUrl);

        $fileName = null;
        if ($response->successful()) {
            $fileName = 'images/categories/' . Str::uuid() . '.png';

            Storage::disk('public')->put($fileName, $response->body());
        }

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->sentence(),
            'position' => $this->faker->randomDigit(),
            'is_visible' => true,
            'order' => $this->faker->randomDigit(),
            'parent_id' => null,
            'is_popular' => true,
            'image' => $fileName,
        ];
    }
}
