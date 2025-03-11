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
        $company = $this->faker->company;

        $imageUrl = "https://dummyimage.com/300x100/ccc/000&text=$company";

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
            'description' => $this->faker->sentence,
            'url' => $this->faker->url,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
