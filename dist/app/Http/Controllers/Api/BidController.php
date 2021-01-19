<?php


namespace App\Http\Controllers\Api;


use Illuminate\Http\Request;
use App\Models\AuctionModel;
use App\Models\BidModel;

class BidController extends BaseController {

    protected $bidModel;
    public function __construct(BidModel $bidModel) {
        $this->bidModel = $bidModel;
    }

    public function bidNow(Request $request, $id) {
        try {
            $userId = $request->user()->id;
        } catch (\Throwable $t) {
            return response(['status' => 0, 'message' => 'Error:' . $t->getMessage()], 500);
        }
    }

    public function autoBid(Request $request, $id) {
        try {
            $userId = $request->user()->id;
            $this->bidModel->autoBid($userId, $id);
        } catch (\Throwable $t) {
            return response(['status' => 0, 'message' => 'Error:' . $t->getMessage()], 500);
        }
    }


}
