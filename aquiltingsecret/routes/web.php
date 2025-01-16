<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController; // Import ProductController
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

// In web.php
Route::post('/products', [ProductController::class, 'store'])->name('products.store');

// Redirect to the Dashboard using the controller
Route::get('/dashboard', [ProductController::class, 'dashboard'])
    ->middleware(['auth', 'verified'])  // Authentication and email verification middleware
    ->name('dashboard');

// The default welcome page for unauthenticated users
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Welcome');

// A custom product page route (not using ProductController)
Route::get('/productpagina', function(){
    return Inertia::render('productpagina', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/info', function () {
    return Inertia::render('Info');
})->name('info');

// Profile-related routes for authenticated users
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Logout route
Route::post('/logout', function () {
    Auth::logout();
    return Inertia::location(route('Welcome')); // Redirect back to Welcome page after logout
})->name('logout');

require __DIR__.'/auth.php';
