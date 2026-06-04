<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    public function index() {
        $products = Product::with('category')->paginate(15);

        return Inertia::render('admin/products/index', [
            'products' => $products,
        ]);
    }

    public function destroy(Product $product) {
        $product->delete();

        return redirect()->route('admin.products.index');
    }
}
