<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\BlogPostFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $title
 * @property string|null $slug
 * @property string|null $content
 * @property Carbon|null $published_at
 * @property string|null $description
 * @property string|null $image
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static \Database\Factories\BlogPostFactory factory($count = null, $state = [])
 * @method static Builder<static>|BlogPost newModelQuery()
 * @method static Builder<static>|BlogPost newQuery()
 * @method static Builder<static>|BlogPost query()
 * @method static Builder<static>|BlogPost whereContent($value)
 * @method static Builder<static>|BlogPost whereCreatedAt($value)
 * @method static Builder<static>|BlogPost whereDescription($value)
 * @method static Builder<static>|BlogPost whereId($value)
 * @method static Builder<static>|BlogPost whereImage($value)
 * @method static Builder<static>|BlogPost wherePublishedAt($value)
 * @method static Builder<static>|BlogPost whereSlug($value)
 * @method static Builder<static>|BlogPost whereTitle($value)
 * @method static Builder<static>|BlogPost whereUpdatedAt($value)
 * @mixin Eloquent
 */
class BlogPost extends Model
{
    /** @use HasFactory<BlogPostFactory> */
    use HasFactory;

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'published_at' => 'datetime',
    ];

    protected $fillable = [
        'title',
        'slug',
        'content',
        'published_at',
        'description',
        'image',
    ];
}
