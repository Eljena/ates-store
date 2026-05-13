<?php

use App\Enums\Role;
use App\Models\User;

test('guest cannot access admin', function () {
    $response = $this->get('/admin');

    $response->assertRedirect('/login');
});

test('logged in user cannot access admin', function () {
    $user = User::factory()->create(['role' => Role::Customer]);

    $response = $this->actingAs($user)->get('/admin');

    $response->assertRedirect('/dashboard');
});

test('admin can access admin', function () {
    $user = User::factory()->create(['role' => Role::Admin]);

    $response = $this->actingAs($user)->get('/admin');

    $response->assertStatus(200);
});
