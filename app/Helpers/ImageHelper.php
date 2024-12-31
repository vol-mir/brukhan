<?php

declare(strict_types=1);

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;

class ImageHelper
{
    public static function deleteContentImages(?string $content): void
    {
        if ($content === null) {
            return;
        }

        $imagePaths = [];
        if ($content !== '' && $content !== '0') {
            $imagePaths = self::extractImagePaths($content);
        }

        foreach ($imagePaths as $imagePath) {
            $relativePath = self::convertToRelativePath($imagePath);
            if (Storage::disk('public')->exists($relativePath)) {
                Storage::disk('public')->delete($relativePath);
            }
        }
    }

    public static function cleanUpOriginalContentImages(?string $updatedContent, ?string $originalContent): void
    {
        if ($originalContent === null) {
            return;
        }

        $currentImagePaths = [];
        if ($updatedContent) {
            $currentImagePaths = self::extractImagePaths($updatedContent);
        }

        $originalImagePaths = self::extractImagePaths($originalContent);

        $obsoleteImages = array_diff($originalImagePaths, $currentImagePaths);

        foreach ($obsoleteImages as $imagePath) {
            $relativePath = self::convertToRelativePath($imagePath);
            if (Storage::disk('public')->exists($relativePath)) {
                Storage::disk('public')->delete($relativePath);
            }
        }
    }

    /**
     * Extracts image paths from the given HTML content.
     *
     * @param string $content HTML content
     * @return array<string> Array of image paths
     */
    private static function extractImagePaths(string $content): array
    {
        preg_match_all('/(?:src|href)="([^"]*\/images\/[^"]*)"/', $content, $matches);

        return $matches[1];
    }

    /**
     * Converts an absolute URL to a relative path for storage operations.
     *
     * @param string $imageUrl Absolute image URL
     * @return string Relative path of the image
     */
    private static function convertToRelativePath(string $imageUrl): string
    {
        $appUrl = is_string(config('app.url')) ? config('app.url') : '';

        return str_replace($appUrl . '/storage', '', $imageUrl);
    }
}
