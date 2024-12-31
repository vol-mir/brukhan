<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\SocialNetworkFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string|null $image
 * @property string|null $url
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static \Database\Factories\SocialNetworkFactory factory($count = null, $state = [])
 * @method static Builder<static>|SocialNetwork newModelQuery()
 * @method static Builder<static>|SocialNetwork newQuery()
 * @method static Builder<static>|SocialNetwork query()
 * @method static Builder<static>|SocialNetwork whereCreatedAt($value)
 * @method static Builder<static>|SocialNetwork whereId($value)
 * @method static Builder<static>|SocialNetwork whereImage($value)
 * @method static Builder<static>|SocialNetwork whereName($value)
 * @method static Builder<static>|SocialNetwork whereSlug($value)
 * @method static Builder<static>|SocialNetwork whereUpdatedAt($value)
 * @method static Builder<static>|SocialNetwork whereUrl($value)
 * @mixin Eloquent
 */
class SocialNetwork extends Model
{
    /** @use HasFactory<SocialNetworkFactory> */
    use HasFactory;

    protected $fillable = [
        'image',
        'url',
        'name',
        'slug',
    ];
}
