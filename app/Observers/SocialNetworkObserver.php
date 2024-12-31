<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\SocialNetwork;
use Illuminate\Support\Facades\Storage;

class SocialNetworkObserver
{
    public function updated(SocialNetwork $socialNetwork): void
    {
        $originalImage = $socialNetwork->getOriginal('image');

        if (is_string($originalImage) && $socialNetwork->image !== $originalImage && Storage::disk('public')->exists($originalImage)) {
            Storage::disk('public')->delete($originalImage);
        }
    }
}
