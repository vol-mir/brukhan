<?php

declare(strict_types=1);

namespace App\Filament\Resources\BlogPostResource\Pages;

use App\Filament\Resources\BlogPostResource;
use App\Models\BlogPost;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Facades\Storage;

class EditBlogPost extends EditRecord
{
    protected static string $resource = BlogPostResource::class;

    public function getTitle(): string | Htmlable
    {
        /** @var BlogPost $blogPost */
        $blogPost = $this->getRecord();

        return $blogPost->title;
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()
                ->after(function (BlogPost $blogPost): void {
                    if ($blogPost->image) {
                        Storage::disk('public')->delete($blogPost->image);
                    }
                }),
        ];
    }
}
