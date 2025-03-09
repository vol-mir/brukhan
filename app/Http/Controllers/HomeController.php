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
            'page' => $this->getPageData(TitleType::Page, 'policy_personal_data'),
        ]);
    }

    public function termsCondition(): Response
    {
        return Inertia::render('TermsCondition', [
            'page' => $this->getPageData(TitleType::Page, 'policy_personal_data'),
        ]);
    }

    public function trackOrder(): Response
    {
        return Inertia::render('TrackOrder', [
            'page' => $this->getPageData(TitleType::Page, 'policy_personal_data'),
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
