<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\TitleType;
use App\Models\Category;
use App\Models\Page;
use App\Models\Product;
use App\Models\SocialNetwork;

abstract class Controller
{
    /**
     * @return array<string, mixed>
     */
    public function getPageData(TitleType $titleType, mixed $data): array
    {
        return match (true) {
            $titleType === TitleType::Page && is_string($data) => (function () use ($data): array {
                $page = Page::query()->whereName($data)->first();
                $title = $page->title ?? config('app.name');
                $description = $page->description ?? config('app.name');

                return [
                    'title' => $title,
                    'description' => $description
                ];
            })(),

            $titleType === TitleType::Product && $data instanceof Product => (function () use ($data): array {
                $title = $data->name ?? config('app.name');
                $description = $data->description ?? config('app.name');

                return [
                    'title' => $title,
                    'description' => $description
                ];
            })(),

            $titleType === TitleType::Category && $data instanceof Category => (function () use ($data): array {
                $title = $data->name ?? config('app.name');
                $description = $data->description ?? config('app.name');

                return [
                    'title' => $title,
                    'description' => $description
                ];
            })(),

            default => (function (): array {
                $title = config('app.name');
                $description = config('app.name');

                return [
                    'title' => $title,
                    'description' => $description
                ];
            })(),
        };
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
