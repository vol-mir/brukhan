<?php

declare(strict_types=1);

namespace App\Observers;

use App\Helpers\ImageHelper;
use App\Models\BlogPost;
use Illuminate\Support\Facades\Storage;

class BlogPostObserver
{
    public function updated(BlogPost $blogPost): void
    {
        $originalContent = $blogPost->getOriginal('content');

        if ((is_string($originalContent) || $originalContent === null) && $blogPost->content !== $originalContent) {
            ImageHelper::cleanUpOriginalContentImages($blogPost->content, $originalContent);
        }

        $originalImage = $blogPost->getOriginal('image');

        if (is_string($originalImage) && $blogPost->image !== $originalImage && Storage::disk('public')->exists($originalImage)) {
            Storage::disk('public')->delete($originalImage);
        }
    }

    public function deleted(BlogPost $blogPost): void
    {
        ImageHelper::deleteContentImages($blogPost->content);
    }
}
