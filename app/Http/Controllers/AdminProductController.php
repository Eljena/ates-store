<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Closure;

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
            'name' => [
                'required', 
                'string', 
                'max:255', 
                function (string $attribute, mixed $value, Closure $fail) {
                     if (Product::where('slug', Str::slug((string) $value))->exists()) {
                         $fail('Der Produktname ist bereits vergeben.');
                     }
                 }
            ],
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

    public function edit(Product $product) {
        return Inertia::render('admin/products/edit', [
            'product' => $product,
            'categories' => Category::all(),
        ]);
    }

    public function update(Request $request, Product $product) {
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                function (string $attribute, mixed $value, Closure $fail) use ($product) {
                    if (Product::where('slug', Str::slug((string) $value))
                        ->where('id', '!=', $product->id)
                        ->exists()) {
                        $fail('Der Produktname ist bereits vergeben.');
                    }
                }
            ],
            'brand' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'pricePerKg' => 'nullable|numeric|min:0',
            'pricePerL' => 'nullable|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        $product->update($validated);

        return redirect()->route('admin.products.index');
    }

    public function destroy(Product $product) {
        $product->delete();

        return redirect()->route('admin.products.index');
    }
}
