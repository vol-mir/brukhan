<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\ContactTypeFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property string|null $slug
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection<int, ContactType> $contacts
 * @property-read int|null $contacts_count
 * @method static \Database\Factories\ContactTypeFactory factory($count = null, $state = [])
 * @method static Builder<static>|ContactType newModelQuery()
 * @method static Builder<static>|ContactType newQuery()
 * @method static Builder<static>|ContactType query()
 * @method static Builder<static>|ContactType whereCreatedAt($value)
 * @method static Builder<static>|ContactType whereId($value)
 * @method static Builder<static>|ContactType whereName($value)
 * @method static Builder<static>|ContactType whereSlug($value)
 * @method static Builder<static>|ContactType whereUpdatedAt($value)
 * @mixin Eloquent
 */
class ContactType extends Model
{
    /** @use HasFactory<ContactTypeFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\ContactType, $this>
     */
    public function contacts(): HasMany
    {
        return $this->hasMany(ContactType::class);
    }
}
