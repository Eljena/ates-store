<?php

namespace App\Services;

use App\Models\Product;

class CartService {
    
    public function get(): array
    {
        return session()->get('cart', []);  // 2. Parameter Fallback falls 'cart' noch nicht in der Session existiert
    }

    public function add(Product $product, int $quantity = 1): void 
    {
         $cart = $this->get();

        // falls Produkt schon im Warenkorb ist -> nur die Menge erhöhen; slug ist key
        if (isset($cart[$product->slug])) {
            $cart[$product->slug]['quantity'] += $quantity;
        } else {
            $cart[$product->slug] = [
                'product_id' => $product->id,
                'quantity' => $quantity,
                'price' => $product->price,
            ];
        } 

        session()->put('cart', $cart);
    }

    public function remove(string $slug): void 
    {
        $cart = $this->get();

        unset($cart[$slug]);

        // falls Element letztes ist, wird Session-Key gelöscht
        if(empty($cart)) {
            session()->forget('cart');
            return;
        }

        session()->put('cart', $cart);
    }

    public function update(string $slug, int $quantity):void {
        $cart = $this->get();

        if (! isset($cart[$slug])) {
            return;
        }

        // delegiert an remove wenn die Menge 0 ist
        if ($quantity <= 0) {
            $this->remove($slug);
            return;
        }

        $cart[$slug]['quantity'] = $quantity;

        session()->put('cart', $cart);

    }

    public function clear(): void {

        session()->forget('cart');
    }

    public function total():float {
        $total = 0;

        foreach ($this->get() as $item) {
            // float und int sind defensive Programmierung -> Sessiondaten sind serialisierte Strings, also wird sichergestellt, dass Berechnung korrekt ist
            $total += (float) $item['price'] * (int) $item['quantity'];
        }

        return $total;
    }

    public function count(): int {
        $count = 0;

        foreach ($this->get() as $item) {
            $count += (int) ($item['quantity'] ?? 0);
        }

        return $count;
    }
}