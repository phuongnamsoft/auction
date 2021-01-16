<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\AdminModel;
use Illuminate\Support\Facades\Auth;

class ApiAuth {

    public function __construct() {

    }

    public function handle($request, Closure $next) {
        if (!Auth::guard('web')->check()) {
            return response(['status' => 0, 'Access Denied'], 403);
        }
        return $next($request);
    }

}
