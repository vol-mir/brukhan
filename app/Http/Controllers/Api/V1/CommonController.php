<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Http\Resources\Api\V1\SocialNetworkResource;
use App\Models\Contact;
use App\Models\Setting;
use App\Models\SocialNetwork;
use Illuminate\Http\JsonResponse;

class CommonController
{
    public function siteInfo(): JsonResponse
    {
        $socialNetworks = SocialNetwork::all();

        $mainPhone = null;
        $mainEmail = null;

        $contacts = Contact::query()
            ->get();

        foreach ($contacts as $contact) {
            if ($contact->contactType?->slug === 'phone' && $contact->is_main) {
                $mainPhone = $contact->value;
            }

            if ($contact->contactType?->slug === 'email' && $contact->is_main) {
                $mainEmail = $contact->value;
            }
        }

        $setting = Setting::query()
            ->where('slug', 'main')
            ->first();

        return new JsonResponse([
            'main_phone' => $mainPhone,
            'main_email' => $mainEmail,
            'company' => config('app.name'),
            'address' => $setting?->address,
            'full_name' => $setting?->full_name,
            'social_networks' => SocialNetworkResource::collection($socialNetworks),
        ]);
    }
}
