<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'price',
        'pricePerKg',
        'pricePerL',
        'stock',
        'images',
        'description',
    ];    

    protected $casts = [
        'images' => 'array',
        'price' => 'decimal:2',
        'pricePerKg' => 'decimal:2',
        'pricePerL' => 'decimal:2',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeAvailable(Builder $query, bool $onlyAvailable = true): Builder {
        if ($onlyAvailable) {
            $query->where('stock', '>', 0);
        }

        return $query;
    }

    public function scopeFilterBrands(Builder $query, array $brands = []): Builder {
        if (! empty($brands)) {
            $query->whereIn('brand', $brands);
        }

        return $query;
    }

    public function scopeApplySort(Builder $query, ?string $sort): Builder {
        return match ($sort) {
            'price-asc' => $query->orderBy('price', 'asc'),
            'price-desc' => $query->orderBy('price', 'desc'),
            'name-asc' => $query->orderBy('name', 'asc'),
            'name-desc' => $query->orderBy('name', 'desc'),
            default => $query->latest(),
        };
    }
}
