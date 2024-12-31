<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\ContactType;
use Illuminate\Database\Seeder;

class ContactTypeSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->getItems() as $item) {
            ContactType::query()->updateOrCreate(['slug' => $item['slug']], $item);
        }
    }

    /**
     * @return array<array<string, mixed>>
     */
    private function getItems(): array
    {
        return [
            [
                'name' => 'Email',
                'slug' => 'email',
            ],
            [
                'name' => 'Телефон',
                'slug' => 'phone',
            ],
        ];
    }
}
