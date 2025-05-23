<?php

declare(strict_types=1);

namespace App\Actions\Api\V1;

use App\Http\Resources\Api\V1\BrandResource;
use App\Http\Resources\Api\V1\CategoryResource;
use App\Http\Resources\Api\V1\ProductResource;
use App\Http\Resources\Api\V1\SocialNetworkResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Product;
use App\Models\Setting;
use App\Models\SocialNetwork;

class SiteInfoAction
{
    /**
     * @return array<string, mixed>
     */
    public function run(): array
    {
        $mainPhone = Contact::query()
            ->whereHas('contactType', fn($q) => $q->where('slug', 'phone'))
            ->where('is_main', true)
            ->value('value');

        $mainEmail = Contact::query()
            ->whereHas('contactType', fn($q) => $q->where('slug', 'email'))
            ->where('is_main', true)
            ->value('value');

        $phones = Contact::query()
            ->whereHas('contactType', fn($q) => $q->where('slug', 'phone'))
            ->pluck('value')
            ->toArray();

        $emails = Contact::query()
            ->whereHas('contactType', fn($q) => $q->where('slug', 'email'))
            ->pluck('value')
            ->toArray();

        $setting = Setting::query()
            ->where('slug', 'main')
            ->first();

        $topCategories = Category::query()
            ->where('is_visible', true)
            ->where('is_popular', true)
            ->orderBy('position')
            ->take(4)
            ->get();

        $categories = Category::query()
            ->where('is_visible', true)
            ->where('is_popular', true)
            ->whereNull('parent_id')
            ->oldest('position')
            ->get();

        $products = Product::query()
            ->with(['category', 'category.parent', 'images'])
            ->where('is_visible', true)
            ->where('is_popular', true)
            ->where('is_popular', true)
            ->where('published_at', '<=', now())
            ->take(4)
            ->get();

        return [
            'main_phone' => $mainPhone,
            'main_email' => $mainEmail,
            'phones' => $phones,
            'emails' => $emails,
            'company' => config('app.name'),
            'address' => $setting?->address,
            'full_name' => $setting?->full_name,
            'description' => $setting?->description,
            'bank_details' => $setting?->bank_details,
            'map' => $setting?->map,
            'social_networks' => SocialNetworkResource::collection(SocialNetwork::query()->get()),
            'brands' => BrandResource::collection(Brand::query()->get()),
            'top_categories' => CategoryResource::collection($topCategories),
            'categories' => CategoryResource::collection($categories),
            'top_products' => ProductResource::collection($products),
        ];
    }
}
