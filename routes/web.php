<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\AdminSettingsController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\LegalController;
use App\Http\Middleware\EnsureCartIsNotEmpty;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/categories/{slug}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');

Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');

/** Shopping Cart */
Route::resource('cart', CartController::class)->only(['index', 'store', 'update', 'destroy']);

/** Checkout  */
Route::middleware(EnsureCartIsNotEmpty::class)->group(function () {
    Route::get('checkout', [CheckoutController::class, 'create'])->name('checkout.create');
    Route::post('checkout', [CheckoutController::class, 'store'])->name('checkout.store');
});

Route::get('/checkout/success', function() {
    return Inertia::render('shop/checkout/success');
})->name('checkout.success');

// Alle eingeloggten User
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

// Portal - Admin + Produktmanager
Route::middleware(['auth', 'verified', 'role:admin,product_manager'])->group(function () {
    Route::get('/admin/products', [AdminProductController::class, 'index'])->name('admin.products.index');

    Route::get('/admin/products/create', [AdminProductController::class, 'create'])->name('admin.products.create');
    Route::post('/admin/products', [AdminProductController::class, 'store'])->name('admin.products.store');

    Route::delete('/admin/products/{product}', [AdminProductController::class, 'destroy'])->name('admin.products.destroy');
});

// Nur Admin
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/admin/settings', [AdminSettingsController::class, 'index'])->name('admin.settings');
});


/** Impressum */
Route::get('/imprint', [LegalController::class, 'imprint'])->name('imprint');

require __DIR__.'/settings.php';
    