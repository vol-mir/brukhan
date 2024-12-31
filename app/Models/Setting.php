<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\SettingFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string|null $slug
 * @property string|null $bank_details
 * @property string|null $registration_number
 * @property string|null $description
 * @property string|null $address
 * @property string|null $map
 * @property string|null $full_name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static \Database\Factories\SettingFactory factory($count = null, $state = [])
 * @method static Builder<static>|Setting newModelQuery()
 * @method static Builder<static>|Setting newQuery()
 * @method static Builder<static>|Setting query()
 * @method static Builder<static>|Setting whereAddress($value)
 * @method static Builder<static>|Setting whereBankDetails($value)
 * @method static Builder<static>|Setting whereCreatedAt($value)
 * @method static Builder<static>|Setting whereDescription($value)
 * @method static Builder<static>|Setting whereFullName($value)
 * @method static Builder<static>|Setting whereId($value)
 * @method static Builder<static>|Setting whereMap($value)
 * @method static Builder<static>|Setting whereRegistrationNumber($value)
 * @method static Builder<static>|Setting whereSlug($value)
 * @method static Builder<static>|Setting whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Setting extends Model
{
    /** @use HasFactory<SettingFactory> */
    use HasFactory;

    protected $fillable = [
        'slug',
        'bank_details',
        'registration_number',
        'description',
        'address',
        'map',
        'full_name',
    ];
}
