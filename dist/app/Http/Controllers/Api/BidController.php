<?php


namespace App\Http\Controllers\Api;


use Illuminate\Http\Request;
use App\Models\BidModel;

class BidController extends BaseController {

    protected $bidModel;

    public function __construct(BidModel $bidModel) {
        $this->bidModel = $bidModel;
    }

    public function bidNow(Request $request, $id) {
        try {
            $userId = $request->user()->id;
            $result = $this->bidModel->bidNow($userId, $id, intval($request->get('amount')));
            return response(['status' => $result, 'message' => $result ? 'Bid-now successfully' : 'Bid-now failed'], 200);
        } catch (\Throwable $t) {
            return response(['status' => 0, 'message' => 'Error:' . $t->getMessage()], 500);
        }
    }

    public function autoBid(Request $request, $id) {
        try {
            $userId = $request->user()->id;
            $result = $this->bidModel->autoBid($userId, $id);
            return response(['status' => $result, 'message' => $result ? 'Auto-bid successfully' : 'Auto-bid failed'], 200);
        } catch (\Throwable $t) {
            return response(['status' => 0, 'message' => 'Error:' . $t->getMessage()], 500);
        }
    }


}
