<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\LeadType;
use Illuminate\Database\Seeder;

class LeadTypeSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->getItems() as $item) {
            LeadType::query()->updateOrCreate(['slug' => $item['slug']], $item);
        }
    }

    /**
     * @return array<array<string, mixed>>
     */
    private function getItems(): array
    {
        return [
            [
                'name' => 'Подписка',
                'slug' => 'subscription',
                'is_message_send' => false,
            ],
            [
                'name' => 'Контакт',
                'slug' => 'contact',
                'is_message_send' => false,
            ],
        ];
    }
}
