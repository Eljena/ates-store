<?php

use App\Enums\Role;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;

beforeEach(function () {
    $this->admin = User::factory()->create(['role' => Role::Admin]);
    $this->category = Category::factory()->create();
    $this->product = Product::factory()->create([
        'category_id' => $this->category->id,
        'name' => 'Altes Produkt',
        'slug' => 'altes-produkt',
    ]);

    $this->validPayload = [
        'name' => 'Neues Produkt',
        'brand' => 'Marke',
        'price' => '9.99',
        'pricePerKg' => null,
        'pricePerL' => null,
        'stock' => '42',
        'description' => 'Eine Beschreibung',
        'category_id' => $this->category->id,
    ];
});

test('admin can view the edit page', function () {
    $response = $this->actingAs($this->admin)
        ->get("/admin/products/{$this->product->id}/edit");

    $response->assertOk();
    $response->assertInertia(
        fn ($page) => $page
            ->component('admin/products/edit')
            ->where('product.id', $this->product->id)
            ->has('categories')
    );
});

test('admin can update a product', function () {
    $response = $this->actingAs($this->admin)->put(
        "/admin/products/{$this->product->id}",
        [...$this->validPayload, 'name' => 'Aktualisiert', 'stock' => '7'],
    );

    $response->assertRedirect(route('admin.products.index'));

    $this->assertDatabaseHas('products', [
        'id' => $this->product->id,
        'name' => 'Aktualisiert',
        'slug' => 'aktualisiert',
        'stock' => 7,
    ]);
});

test('update requires the mandatory fields', function () {
    $response = $this->actingAs($this->admin)->put(
        "/admin/products/{$this->product->id}",
        [...$this->validPayload, 'name' => '', 'price' => '', 'stock' => ''],
    );

    $response->assertSessionHasErrors(['name', 'price', 'stock']);

    $this->assertDatabaseHas('products', [
        'id' => $this->product->id,
        'name' => 'Altes Produkt',
    ]);
});

test('update rejects a name that another product already uses', function () {
    Product::factory()->create([
        'category_id' => $this->category->id,
        'name' => 'Belegtes Produkt',
        'slug' => 'belegtes-produkt',
    ]);

    $response = $this->actingAs($this->admin)->put(
        "/admin/products/{$this->product->id}",
        [...$this->validPayload, 'name' => 'Belegtes Produkt'],
    );

    $response->assertSessionHasErrors('name');
});

test('update allows keeping the products own name', function () {
    $response = $this->actingAs($this->admin)->put(
        "/admin/products/{$this->product->id}",
        [...$this->validPayload, 'name' => 'Altes Produkt', 'brand' => 'Neue Marke'],
    );

    $response->assertSessionHasNoErrors();

    $this->assertDatabaseHas('products', [
        'id' => $this->product->id,
        'name' => 'Altes Produkt',
        'brand' => 'Neue Marke',
    ]);
});

test('product manager can update a product', function () {
    $manager = User::factory()->create(['role' => Role::ProductManager]);

    $response = $this->actingAs($manager)->put(
        "/admin/products/{$this->product->id}",
        [...$this->validPayload, 'name' => 'Vom Manager'],
    );

    $response->assertRedirect(route('admin.products.index'));
    $this->assertDatabaseHas('products', [
        'id' => $this->product->id,
        'name' => 'Vom Manager',
    ]);
});

test('guest cannot edit a product', function () {
    $this->get("/admin/products/{$this->product->id}/edit")
        ->assertRedirect('/login');
});

test('customer cannot edit a product', function () {
    $customer = User::factory()->create(['role' => Role::Customer]);

    $this->actingAs($customer)
        ->get("/admin/products/{$this->product->id}/edit")
        ->assertRedirect('/dashboard');
});
