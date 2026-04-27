<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show(Request $request, string $slug) {
        $filters = $request->validate([
            'sort' => ['nullable', 'in:price-asc,price-desc,name-asc,name-desc'],
            'available' => ['nullable', 'boolean'],
            'brands' => ['nullable', 'array'],
            'brands.*' => ['string'],
        ]); 

        $category = Category::where('slug', $slug)->firstOrFail();

        $sort = $filters['sort'] ?? null;
        $selectedBrands = $filters['brands'] ?? [];
        $available = $request->boolean('available');

        $products = $category->products()
            ->with('category:id,name')
            ->available($available)
            ->filterBrands($selectedBrands)
            ->applySort($sort)
            ->get();

        $brandOptions = $category->products()
            ->select('brand')
            ->whereNotNull('brand')
            ->distinct()
            ->orderBy('brand')
            ->pluck('brand');
           
        return Inertia::render('shop/categories/show', [
            'category' => $category,
            'categories' => Category::query()
                ->select('id', 'name', 'slug')
                ->orderBy('name')
                ->get(),
            'products' => $products,
            'brands' => $brandOptions,
            'filters' => [
                'sort' => $sort,
                'available' => $available,
                'brands' => $selectedBrands,
            ],
        ]);
    }
}
