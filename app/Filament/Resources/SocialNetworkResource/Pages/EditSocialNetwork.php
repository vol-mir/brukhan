<?php

declare(strict_types=1);

namespace App\Filament\Resources\SocialNetworkResource\Pages;

use App\Filament\Resources\SocialNetworkResource;
use App\Models\SocialNetwork;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Facades\Storage;

class EditSocialNetwork extends EditRecord
{
    protected static string $resource = SocialNetworkResource::class;

    public function getTitle(): string | Htmlable
    {
        /** @var SocialNetwork $socialNetwork */
        $socialNetwork = $this->getRecord();

        return $socialNetwork->name;
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()
                ->after(function (SocialNetwork $socialNetwork): void {
                    if ($socialNetwork->image) {
                        Storage::disk('public')->delete($socialNetwork->image);
                    }
                }),
        ];
    }
}
