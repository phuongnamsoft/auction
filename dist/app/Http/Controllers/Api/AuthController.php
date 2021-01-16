<?php


namespace App\Http\Controllers\Api;


use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController {

    public function __construct() {

    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Auth::attempt($request->only(['email', 'password']))) {
                $token = $user->createToken('AuctionToken')->accessToken;
                return response(['status' => 1, 'message' => "Login successfully", 'access_token' => $token], 200);
            } else {
                return response(['status' => 0, 'message' => "Password mismatch"], 422);
            }
        } else {
            return response(['status' => 0, 'message' => 'User does not exist'], 422);
        }
    }

    public function logout(Request $request) {
        Auth::logout();
        return response(['status' => 1, 'message' => "Logout successfully"], 200);
    }

    public function checkLogin(Request $request) {
        if (Auth::check()) {
            return response(['status' => 1, 'message' => "Is Logged"], 200);
        }
        return response(['status' => 0, 'message' => "Is not Logged"], 403);
    }
}
