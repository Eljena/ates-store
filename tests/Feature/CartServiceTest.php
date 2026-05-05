<?php

use App\Services\CartService;
use App\Models\Product;

test('item is set to session successfully', function () {
    $cart = new CartService();

    $product = Product::factory()->make([
        'name' => 'Grüner Tee',
        'slug' => 'gruener-tee',
        'price' => '2.99',
        'stock' => 10,
    ]);

    $cart->add($product, 1);

    expect($cart->get())->not->toBeEmpty();
    expect($cart->get())->toHaveKey('gruener-tee');
});

test('item is set to session unique', function() {
    $cart = new CartService();

    $product = Product::factory()->make([
        'name' => 'Grüner Tee',
        'slug' => 'gruener-tee',
        'price' => '2.99',
        'stock' => 10,
    ]);

    $cart->add($product, 1);
    $cart->add($product, 1);

    expect($cart->get())->toHaveCount(1);
    expect($cart->get()['gruener-tee']['quantity'])->toBe(2);

});

test('result of total price calculating is correct', function() {
    $cart = new CartService();

    $product = Product::factory()->make([
        'name' => 'Grüner Tee',
        'slug' => 'gruener-tee',
        'price' => '2.99',
        'stock' => 10,
    ]);

    $cart->add($product, 1);
    $cart->add($product, 1);

    expect($cart->total())->toBe(5.98);
});

test('remove item correctly', function() {
    $cart = new CartService();

    $product = Product::factory()->make([
        'name' => 'Grüner Tee',
        'slug' => 'gruener-tee',
        'price' => '2.99',
        'stock' => 10,
    ]);

    $cart->add($product, 1);
    $cart->remove($product->slug);

    expect($cart->get())->toBeEmpty();
});

test('update item with quantity 0 removes item', function() {
    $cart = new CartService();

    $product = Product::factory()->make([
        'name' => 'Grüner Tee',
        'slug' => 'gruener-tee',
        'price' => '2.99',
        'stock' => 10,
    ]);

    $cart->add($product, 1);
    $cart->update($product->slug, 0);

    expect($cart->get())->toBeEmpty();
});

test('calculating count correct', function() {
    $cart = new CartService();

    $product1 = Product::factory()->make([
        'name' => 'Grüner Tee',
        'slug' => 'gruener-tee',
        'price' => '2.99',
        'stock' => 10,
    ]);

    $product2 = Product::factory()->make([
        'name' => 'Schwarzer Tee',
        'slug' => 'schwarzer-tee',
        'price' => '1.99',
        'stock' => 5,
    ]);

    $cart->add($product1, 3);
    $cart->add($product2, 2);

    expect($cart->count())->toBe(5);
});