<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ContactTypeSeeder::class,
            LeadTypeSeeder::class,
            PageSeeder::class,
        ]);

        if (app()->environment('local')) {
            $this->call([
                BrandSeeder::class,
                CategorySeeder::class,
                ProductSeeder::class,
                TagSeeder::class,
                ProductTagSeeder::class,
                ProductImageSeeder::class,
            ]);
        }
    }
}
