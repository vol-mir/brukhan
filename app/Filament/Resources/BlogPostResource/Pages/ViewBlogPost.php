<?php

declare(strict_types=1);

namespace App\Filament\Resources\BlogPostResource\Pages;

use App\Filament\Resources\BlogPostResource;
use App\Models\BlogPost;
use Filament\Resources\Pages\ViewRecord;
use Illuminate\Contracts\Support\Htmlable;

class ViewBlogPost extends ViewRecord
{
    protected static string $resource = BlogPostResource::class;

    public function getTitle(): string | Htmlable
    {
        /** @var BlogPost $blogPost */
        $blogPost = $this->getRecord();

        return $blogPost->title;
    }

    protected function getActions(): array
    {
        return [];
    }
}
