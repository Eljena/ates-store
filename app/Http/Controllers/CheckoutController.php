<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use App\Services\CartService;
use App\Models\Order;
use App\Models\OrderItem;

class CheckoutController extends Controller
{
    public function __construct(private CartService $cart) {}    

    public function create() {
        return Inertia::render('shop/checkout/create');
    }

    public function store(Request $request): RedirectResponse {
        $validated = $request->validate([
            'customer_firstName' => 'string|required|min:2|max:255',
            'customer_lastName' => 'string|required|min:2|max:255',
            'customer_email' => 'required|email',
            'customer_address' => 'string|required|max:255',
        ]);

        $order = Order::create($validated);
        $cartItems =$this->cart->get();

        foreach ($cartItems as $item) {
            OrderItem::create([
                ...$item,
                'order_id' => $order->id,
            ]);
        }

        $this->cart->clear();
        return to_route('checkout.success');
    }
}
