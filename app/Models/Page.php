<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\PageFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property string $title
 * @property string|null $description
 * @property string|null $keywords
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static \Database\Factories\PageFactory factory($count = null, $state = [])
 * @method static Builder<static>|Page newModelQuery()
 * @method static Builder<static>|Page newQuery()
 * @method static Builder<static>|Page query()
 * @method static Builder<static>|Page whereCreatedAt($value)
 * @method static Builder<static>|Page whereDescription($value)
 * @method static Builder<static>|Page whereId($value)
 * @method static Builder<static>|Page whereKeywords($value)
 * @method static Builder<static>|Page whereName($value)
 * @method static Builder<static>|Page whereTitle($value)
 * @method static Builder<static>|Page whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Page extends Model
{
    /** @use HasFactory<PageFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'description',
        'keywords',
    ];
}
