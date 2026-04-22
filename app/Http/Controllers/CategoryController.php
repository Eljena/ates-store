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
            'available' => ['nullable', 'boolean']
        ]); 

        $category = Category::where('slug', $slug)->firstOrFail();

        $products = $category->products()
            ->with('category:id,name')
            ->available($request->boolean('available'))
            ->applySort($filters['sort'] ?? null)
            ->get();
           
        return Inertia::render('shop/category/show', [
            'category' => $category,
            'categories' => Category::query()
                ->select('id', 'name', 'slug')
                ->orderBy('name')
                ->get(),
            'products' => $products,
            'filters' => [
                'sort' => $filters['sort'] ?? null,
                'available' => $request->boolean('available'),
            ],
        ]);
    }
}
