<?php

declare(strict_types=1);

namespace App\Observers;

use App\Helpers\ImageHelper;
use App\Models\Setting;

class SettingObserver
{
    public function updated(Setting $setting): void
    {
        $originalBankDetails = $setting->getOriginal('bank_details');

        if ((is_string($originalBankDetails) || $originalBankDetails === null) && $setting->bank_details !== $originalBankDetails) {
            ImageHelper::cleanUpOriginalContentImages($setting->bank_details, $originalBankDetails);
        }
    }

    public function deleted(Setting $setting): void
    {
        ImageHelper::deleteContentImages($setting->bank_details);
    }
}
