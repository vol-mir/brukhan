<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\ShowCategoryAction;
use App\Actions\ShowProductAction;
use App\Enums\TitleType;
use App\Http\Requests\ShowCategoryRequest;
use App\Http\Requests\ShowProductRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Home', [
            'page' => $this->getPageData(TitleType::Main, 'home'),
        ]);
    }

    public function aboutUs(): Response
    {
        return Inertia::render('AboutUs', [
            'page' => $this->getPageData(TitleType::Page, 'about-us'),
        ]);
    }

    public function contacts(): Response
    {
        return Inertia::render('Contacts', [
            'page' => $this->getPageData(TitleType::Page, 'contacts'),
        ]);
    }

    public function faq(): Response
    {
        return Inertia::render('Faq', [
            'page' => $this->getPageData(TitleType::Page, 'faq'),
        ]);
    }

    public function privacyPolicy(): Response
    {
        return Inertia::render('PrivacyPolicy', [
            'page' => $this->getPageData(TitleType::Page, 'privacy_policy'),
        ]);
    }

    public function policyCookies(): Response
    {
        return Inertia::render('PolicyCookies', [
            'page' => $this->getPageData(TitleType::Page, 'policy_cookies'),
        ]);
    }

    public function bankDetails(): Response
    {
        return Inertia::render('BankDetails', [
            'page' => $this->getPageData(TitleType::Page, 'bank_details'),
        ]);
    }

    public function delivery(): Response
    {
        return Inertia::render('Delivery', [
            'page' => $this->getPageData(TitleType::Page, 'delivery'),
        ]);
    }

    public function showProduct(ShowProductRequest $request, ShowProductAction $action): Response
    {
        $product = $action->run($request->toData());

        return Inertia::render('Product', [
            'page' => $this->getPageData(TitleType::Product, $product),
            'product' => ProductResource::make($product),
        ]);
    }

    public function showCategory(ShowCategoryRequest $request, ShowCategoryAction $action): Response
    {
        $category = $action->run($request->toData());

        return Inertia::render('Category', [
            'page' => $this->getPageData(TitleType::Category, $category),
            'category' => CategoryResource::make($category),
        ]);
    }
}
