<?php


namespace App\Http\Controllers\Api;


use Illuminate\Http\Request;
use App\Models\User;

class UserController extends BaseController {

    public function __construct() {

    }

    public function index(Request $request) {
        $user = (new User)
            ->select(['id', 'name', 'email', 'max_bid_amount', 'created_at', 'updated_at'])
            ->where('id', $request->user()->id)->first();
        if ($user) {
            return response(['status' => 1, 'item' => $user->toArray()], 200);
        } else {
            return response(['status' => 0, 'message' => 'User not found!'], 404);
        }
    }

    public function update(Request $request) {
        try {
            (new User)
                ->where('id', $request->user()->id)
                ->update($request->only(['name', 'max_bid_amount']));
            return response(['status' => 1, 'message' => 'User is updated successfully'], 200);
        } catch (\Throwable $t) {
            return response(['status' => 0, 'message' => 'Error:' . $t->getMessage()], 500);
        }
    }

}
