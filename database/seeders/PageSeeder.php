<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->getItems() as $item) {
            Page::query()->updateOrCreate(['name' => $item['name']], $item);
        }
    }

    /**
     * @return array<array<string, mixed>>
     */
    private function getItems(): array
    {
        return [
            [
                'name' => 'home',
                'title' => 'Главная',
                'description' => null,
                'keywords' => null,
            ],
            [
                'name' => 'contacts',
                'title' => 'Контакты',
                'description' => null,
                'keywords' => null,
            ],
            [
                'name' => 'about-us',
                'title' => 'О нашей компании и принципах работы',
                'description' => null,
                'keywords' => null,
            ],
            [
                'name' => 'policy_personal_data',
                'title' => 'Политика персональных данных',
                'description' => null,
                'keywords' => null,
            ],
            [
                'name' => 'policy_cookies',
                'title' => 'Политика в отношении обработки файлов cookie',
                'description' => null,
                'keywords' => null,
            ],
        ];
    }
}
