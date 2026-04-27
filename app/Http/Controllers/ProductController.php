<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request) {
        $filters = $request->validate([
            'sort' => ['nullable', 'in:price-asc,price-desc,name-asc,name-desc'],
            'available' => ['nullable', 'boolean'],
            'brands' => ['nullable', 'array'],
            'brands.*' => ['string'],
        ]); 

        $sort = $filters['sort'] ?? null;
        $selectedBrands = $filters['brands'] ?? [];
        $available = $request->boolean('available');

        $brandOptions = Product::query()
            ->with('category:id,name')
            ->select('brand')
            ->whereNotNull('brand')
            ->distinct()
            ->orderBy('brand')
            ->pluck('brand');

        $products = Product::query()
            ->available($available)
            ->filterBrands($selectedBrands)
            ->applySort($sort)
            ->get();

        return Inertia::render('shop/products/index', [
            'products' => $products,
            'categories' => Category::query()
                ->select('id', 'name', 'slug')
                ->orderBy('name')
                ->get(),
            'brands' => $brandOptions,
            'filters' => [
                'sort' => $sort,
                'available' => $available,
                'brands' => $selectedBrands,
            ],
        ]);
    }
}
