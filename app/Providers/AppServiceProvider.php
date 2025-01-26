<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\BlogPost;
use App\Models\Brand;
use App\Models\Category;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Setting;
use App\Models\SocialNetwork;
use App\Observers\BlogPostObserver;
use App\Observers\BrandObserver;
use App\Observers\CategoryObserver;
use App\Observers\OrderItemObserver;
use App\Observers\ProductImageObserver;
use App\Observers\ProductObserver;
use App\Observers\SettingObserver;
use App\Observers\SocialNetworkObserver;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Opcodes\LogViewer\Facades\LogViewer;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Brand::observe(BrandObserver::class);
        Product::observe(ProductObserver::class);
        ProductImage::observe(ProductImageObserver::class);
        Category::observe(CategoryObserver::class);
        BlogPost::observe(BlogPostObserver::class);
        SocialNetwork::observe(SocialNetworkObserver::class);
        Setting::observe(SettingObserver::class);
        OrderItem::observe(OrderItemObserver::class);

        LogViewer::auth(fn($request): bool => $request->user() !== null);

        Inertia::version(fn() => config('inertia.ssr_enabled') ? config('inertia.ssr_url') : null);
    }
}
