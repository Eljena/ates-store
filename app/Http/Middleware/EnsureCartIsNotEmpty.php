<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Services\CartService;

class EnsureCartIsNotEmpty
{
    public function __construct(private CartService $cart) {}

    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (empty($this->cart->get())) {
            return redirect()->route('home');
        }
        return $next($request);
    }
}
