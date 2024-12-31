<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\LeadTypeFactory;
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
 * @property string $slug
 * @property bool|null $is_message_send
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection<int, \App\Models\Lead> $leads
 * @property-read int|null $leads_count
 * @method static \Database\Factories\LeadTypeFactory factory($count = null, $state = [])
 * @method static Builder<static>|LeadType newModelQuery()
 * @method static Builder<static>|LeadType newQuery()
 * @method static Builder<static>|LeadType query()
 * @method static Builder<static>|LeadType whereCreatedAt($value)
 * @method static Builder<static>|LeadType whereId($value)
 * @method static Builder<static>|LeadType whereIsMessageSend($value)
 * @method static Builder<static>|LeadType whereName($value)
 * @method static Builder<static>|LeadType whereSlug($value)
 * @method static Builder<static>|LeadType whereUpdatedAt($value)
 * @mixin Eloquent
 */
class LeadType extends Model
{
    /** @use HasFactory<LeadTypeFactory> */
    use HasFactory;

    public const TYPE_SUBSCRIPTION = 'subscription';

    public const TYPE_CONTACT = 'contact';

    protected $fillable = [
        'name',
        'slug',
        'is_message_send',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Lead, $this>
     */
    public function leads(): HasMany
    {
        return $this->hasMany(Lead::class);
    }
}
