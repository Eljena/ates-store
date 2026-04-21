<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show(Request $request, string $slug) {
        $sort = $request->query('sort');   

        $category = Category::where('slug', $slug)->firstOrFail();

        $productsQuery = $category->products()->with('category');
            
        $sortMap = [
            'price-asc' => ['price', 'asc'],
            'price-desc' => ['price', 'desc'],
            'name-asc' => ['name', 'asc'],
            'name-desc' => ['name', 'desc'],
        ];

        if (isset($sortMap[$sort])) {
            [$column, $direction] = $sortMap[$sort];
            $productsQuery->orderBy($column, $direction);
        } else {
            $productsQuery->latest();
        }

        return Inertia::render('shop/category/show', [
            'category' => $category,
            'categories' => Category::query()
                ->select('id', 'name', 'slug')
                ->orderBy('name', 'asc')
                ->get(),
            'products' => $productsQuery->get(),
            'filters' => [
                'sort' => $sort,
            ],
        ]);
    }
}
