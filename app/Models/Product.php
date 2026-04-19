<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
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
}
