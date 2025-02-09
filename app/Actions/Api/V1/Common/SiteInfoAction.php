<?php

declare(strict_types=1);

namespace App\Actions\Api\V1\Common;

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
        $mainPhone = null;
        $mainEmail = null;

        $contacts = Contact::query()->get();

        foreach ($contacts as $contact) {
            if ($contact->contactType?->slug === 'phone' && $contact->is_main) {
                $mainPhone = $contact->value;
            }

            if ($contact->contactType?->slug === 'email' && $contact->is_main) {
                $mainEmail = $contact->value;
            }
        }

        $setting = Setting::query()->where('slug', 'main')->first();

        $categories = Category::query()
            ->where('is_visible', true)
            ->where('is_popular', true)
            ->orderBy('position')
            ->take(4)
            ->get();

        $products = Product::query()
            ->with(['category', 'category.parent', 'images'])
            ->where('is_visible', true)
            ->where('is_popular', true)
            ->where('published_at', '<=', now())
            ->take(4)
            ->get();

        return [
            'main_phone' => $mainPhone,
            'main_email' => $mainEmail,
            'company' => config('app.name'),
            'address' => $setting?->address,
            'full_name' => $setting?->full_name,
            'social_networks' => SocialNetworkResource::collection(SocialNetwork::query()->get()),
            'brands' => BrandResource::collection(Brand::query()->get()),
            'top_categories' => CategoryResource::collection($categories),
            'top_products' => ProductResource::collection($products),
        ];
    }
}
