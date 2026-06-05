<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class AdminSettingsController extends Controller
{
    public function index() {
        $users = User::all();

        return Inertia::render('admin/settings', [
            'users' => $users,
        ]);
    }
}
