<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\SocialNetwork;

abstract class Controller
{
    /**
     * @return array<string, mixed>
     */
    public function getPageData(string $name): array
    {
        $page = Page::query()->whereName($name)->first();

        return [
            'title' => $page->title ?? config('app.name'),
            'description' => $page->description ?? config('app.name'),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function getInfoSite(): array
    {
        $socialNetworks = SocialNetwork::query()->get()->toArray();

        return [
            'social_networks' => $socialNetworks,
        ];
    }
}
