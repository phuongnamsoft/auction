<?php


namespace App\Http\Controllers\Api;


use Illuminate\Http\Request;
use App\Models\AuctionModel;
use App\Models\BidModel;

class AuctionController extends BaseController {

    public function __construct() {

    }

    public function index(Request $request) {
        $model = (new AuctionModel)->getJoinQuery();

        if ($request->has('search')) {
            $model = $model->where('auctions.name', 'LIKE', $request->get('search') . '%')->orWhere('auctions.description', $request->get('search') . '%');
        }

        if ($request->has('sort')) {
            $model = $model->orderBy('auctions.min_bid_amount', $request->get('sort'));
        }

        return $model->paginate(9);
    }

    public function detail(Request $request, $id) {
        try {
            $result = (new AuctionModel)->getJoinQuery()->find($id);
            if (!$result) {
                return response(['status' => 0, 'message' => 'Item not found'], 404);
            }
            if (!$result->status) {
                return response(['status' => 0, 'message' => 'Item not active'], 404);
            }
            $result->currentBidAmount = (new BidModel)->where('auction_id', $id)->max('amount');
            return response(['status' => 1, 'message' => 'Success', 'item' => $result->toArray()], 200);
        } catch (\Throwable $t) {
            return response(['status' => 0, 'message' => 'Error:' . $t->getMessage()], 500);
        }
    }

    public function bidHistories(Request $request, $id) {
        try {
            $items = (new BidModel)->getJoinQuery()->where('bids.auction_id', $id)->orderBy('id','desc')->limit(10)->get()->toArray();
            return response(['status' => 1, 'message' => 'Success', 'items' => $items], 200);
        } catch (\Throwable $t) {
            return response(['status' => 0, 'message' => 'Error:' . $t->getMessage()], 500);
        }
    }

}
