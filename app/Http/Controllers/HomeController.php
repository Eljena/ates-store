<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() 
    {
        $categories = Category::all();

        $products = Product::with('category')
            ->latest()
            ->take(8)
            ->get();
            
        return Inertia::render('home', [
            'categories' => $categories,
            'products' => $products,
        ]);
    }
}
