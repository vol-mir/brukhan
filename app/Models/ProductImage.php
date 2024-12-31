<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\ProductImageFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string|null $image
 * @property bool $is_main
 * @property string $name
 * @property string|null $description
 * @property int|null $product_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read \App\Models\Product|null $product
 * @method static \Database\Factories\ProductImageFactory factory($count = null, $state = [])
 * @method static Builder<static>|ProductImage newModelQuery()
 * @method static Builder<static>|ProductImage newQuery()
 * @method static Builder<static>|ProductImage query()
 * @method static Builder<static>|ProductImage whereCreatedAt($value)
 * @method static Builder<static>|ProductImage whereDescription($value)
 * @method static Builder<static>|ProductImage whereId($value)
 * @method static Builder<static>|ProductImage whereImage($value)
 * @method static Builder<static>|ProductImage whereIsMain($value)
 * @method static Builder<static>|ProductImage whereName($value)
 * @method static Builder<static>|ProductImage whereProductId($value)
 * @method static Builder<static>|ProductImage whereUpdatedAt($value)
 * @mixin Eloquent
 */
class ProductImage extends Model
{
    /** @use HasFactory<ProductImageFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'is_main',
        'description',
        'product_id',
        'image',
    ];

    /**
     * @return BelongsTo<Product, $this>
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
