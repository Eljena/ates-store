<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Services\CartService;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;   

class CartController extends Controller
{
    public function __construct(private CartService $cart) {}

    public function index() {
        return Inertia::render('shop/cart/index', [
            'items' => $this->cart->get(),
            'total' => $this->cart->total(),
        ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'product' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);   
        
        $product = Product::findOrFail($validated['product']);

        $this->cart->add($product, $validated['quantity']);

        return to_route('cart.index');
    }

    public function update(Request $request, string $slug) {
        $validated = $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        $this->cart->update($slug, $validated['quantity']);

        return to_route('cart.index');

    }

    public function destroy(string $slug): RedirectResponse {
        $this->cart->remove($slug);
        return to_route('cart.index');
    }
}
