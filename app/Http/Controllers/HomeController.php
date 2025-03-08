<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\ShowCategoryAction;
use App\Actions\ShowProductAction;
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
            'page' => $this->getPageData('home'),
        ]);
    }

    public function aboutUs(): Response
    {
        return Inertia::render('AboutUs', [
            'page' => $this->getPageData('about-us'),
        ]);
    }

    public function contacts(): Response
    {
        return Inertia::render('Contacts', [
            'page' => $this->getPageData('contacts'),
        ]);
    }

    public function faq(): Response
    {
        return Inertia::render('Faq', [
            'page' => $this->getPageData('faq'),
        ]);
    }

    public function privacyPolicy(): Response
    {
        return Inertia::render('PrivacyPolicy', [
            'page' => $this->getPageData('policy_personal_data'),
        ]);
    }

    public function termsCondition(): Response
    {
        return Inertia::render('TermsCondition', [
            'page' => $this->getPageData('policy_personal_data'),
        ]);
    }

    public function trackOrder(): Response
    {
        return Inertia::render('TrackOrder', [
            'page' => $this->getPageData('policy_personal_data'),
        ]);
    }

    public function showProduct(ShowProductRequest $request, ShowProductAction $action): Response
    {
        return Inertia::render('Product', [
            'product' => ProductResource::make($action->run($request->toData())),
        ]);
    }

    public function showCategory(ShowCategoryRequest $request, ShowCategoryAction $action): Response
    {
        return Inertia::render('Category', [
            'category' => CategoryResource::make($action->run($request->toData())),
        ]);
    }
}
