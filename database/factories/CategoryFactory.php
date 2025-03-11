<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Category;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Throwable;

/**
 * @extends Factory<Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     * @throws Throwable
     */
    public function definition(): array
    {
        $name = fake()->unique()->words(2, true);

        throw_unless(is_string($name), Exception::class, 'The variable $name is not string.');

        $imageUrl = 'https://dummyimage.com/1020x550/ccc/000&text=' . $name;

        $response = Http::get($imageUrl);

        $fileName = null;
        if ($response->successful()) {
            $fileName = 'images/categories/' . Str::uuid() . '.png';

            Storage::disk('public')->put($fileName, $response->body());
        }

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => fake()->sentence(),
            'position' => fake()->randomDigit(),
            'is_visible' => true,
            'order' => fake()->randomDigit(),
            'parent_id' => null,
            'is_popular' => true,
            'image' => $fileName,
        ];
    }
}
