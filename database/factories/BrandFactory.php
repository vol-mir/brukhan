<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * @extends Factory<Brand>
 */
class BrandFactory extends Factory
{
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        $company = fake()->company;

        $imageUrl = 'https://dummyimage.com/200x200/ccc/000&text=' . $company;

        $response = Http::get($imageUrl);

        $fileName = null;
        if ($response->successful()) {
            $fileName = 'images/brands/' . Str::uuid() . '.png';

            Storage::disk('public')->put($fileName, $response->body());
        }

        return [
            'name' => $company,
            'slug' => Str::slug($company),
            'image' => $fileName,
            'description' => fake()->sentence,
            'url' => fake()->url,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
