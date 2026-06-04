<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class AdminProductController extends Controller
{
    public function index() {
        $products = Product::with('category')->paginate(15);

        return Inertia::render('admin/products/index', [
            'products' => $products,
        ]);
    }

    public function create() {
        $categories = Category::all();

        return Inertia::render('admin/products/create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request): RedirectResponse {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique('products', 'slug')->where(fn ($q) => $q->where('slug', Str::slug($request->name)))],
            'brand' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'pricePerKg' => 'nullable|numeric|min:0',
            'pricePerL' => 'nullable|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        Product::create($validated);

        return redirect()->route('admin.products.index');
    }

    public function destroy(Product $product) {
        $product->delete();

        return redirect()->route('admin.products.index');
    }
}
