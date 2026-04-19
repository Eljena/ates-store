<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show(string $slug) {
        $category = Category::where('slug', $slug)
            ->with('products')
            ->firstOrFail();
            

        return Inertia::render('shop/category/show', [
            'category' => $category,
        ]);
    }
}
