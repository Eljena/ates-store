<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\ProductFilterRequest;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show(ProductFilterRequest $request, string $slug) {
        $filters = $request->filters();

        $category = Category::where('slug', $slug)->firstOrFail();

        $products = $category->products()
            ->with('category:id,name')
            ->available($filters['available'])
            ->filterBrands($filters['brands'])
            ->applySort($filters['sort'])
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
            'filters' => $filters,
        ]);
    }
}
