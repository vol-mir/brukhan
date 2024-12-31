<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\ContactFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property string $value
 * @property string|null $description
 * @property bool $is_main
 * @property int|null $contact_type_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read \App\Models\ContactType|null $contactType
 * @method static \Database\Factories\ContactFactory factory($count = null, $state = [])
 * @method static Builder<static>|Contact newModelQuery()
 * @method static Builder<static>|Contact newQuery()
 * @method static Builder<static>|Contact query()
 * @method static Builder<static>|Contact whereContactTypeId($value)
 * @method static Builder<static>|Contact whereCreatedAt($value)
 * @method static Builder<static>|Contact whereDescription($value)
 * @method static Builder<static>|Contact whereId($value)
 * @method static Builder<static>|Contact whereIsMain($value)
 * @method static Builder<static>|Contact whereName($value)
 * @method static Builder<static>|Contact whereUpdatedAt($value)
 * @method static Builder<static>|Contact whereValue($value)
 * @mixin Eloquent
 */
class Contact extends Model
{
    /** @use HasFactory<ContactFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'value',
        'description',
        'contact_type_id',
        'is_main',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<ContactType, $this>
     */
    public function contactType(): BelongsTo
    {
        return $this->belongsTo(ContactType::class);
    }
}
