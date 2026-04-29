<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Http\Requests\ProductFilterRequest;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(ProductFilterRequest $request) {
        $filters = $request->filters();

        $brandOptions = Product::query()
            ->select('brand')
            ->whereNotNull('brand')
            ->distinct()
            ->orderBy('brand')
            ->pluck('brand');

        $products = Product::query()
            ->available($filters['available'])
            ->filterBrands($filters['brands'])
            ->applySort($filters['sort'])
            ->get();

        return Inertia::render('shop/products/index', [
            'products' => $products,
            'categories' => Category::query()
                ->select('id', 'name', 'slug')
                ->orderBy('name')
                ->get(),
            'brands' => $brandOptions,
            'filters' => $filters,
        ]);
    }

    public function show(Product $product) {
        $relatedProducts = Product::query()
        ->where('category_id', $product->category_id)
        ->whereKeyNot($product->id)
        ->get();

        return Inertia::render('shop/products/show', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}
