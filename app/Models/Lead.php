<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\LeadFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string|null $email
 * @property bool|null $is_processed
 * @property bool|null $is_message_sent
 * @property string|null $phone
 * @property string|null $first_name
 * @property string|null $last_name
 * @property string|null $message
 * @property int|null $lead_type_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read \App\Models\LeadType|null $leadType
 * @method static \Database\Factories\LeadFactory factory($count = null, $state = [])
 * @method static Builder<static>|Lead newModelQuery()
 * @method static Builder<static>|Lead newQuery()
 * @method static Builder<static>|Lead query()
 * @method static Builder<static>|Lead whereCreatedAt($value)
 * @method static Builder<static>|Lead whereEmail($value)
 * @method static Builder<static>|Lead whereFirstName($value)
 * @method static Builder<static>|Lead whereId($value)
 * @method static Builder<static>|Lead whereIsMessageSent($value)
 * @method static Builder<static>|Lead whereIsProcessed($value)
 * @method static Builder<static>|Lead whereLastName($value)
 * @method static Builder<static>|Lead whereLeadTypeId($value)
 * @method static Builder<static>|Lead whereMessage($value)
 * @method static Builder<static>|Lead wherePhone($value)
 * @method static Builder<static>|Lead whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Lead extends Model
{
    /** @use HasFactory<LeadFactory> */
    use HasFactory;

    protected $fillable = [
        'email',
        'lead_type_id',
        'is_processed',
        'is_message_sent',
        'phone',
        'first_name',
        'last_name',
        'message',
        'updated_at',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<LeadType, $this>
     */
    public function leadType(): BelongsTo
    {
        return $this->belongsTo(LeadType::class);
    }
}
