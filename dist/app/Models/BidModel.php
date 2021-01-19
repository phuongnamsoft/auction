<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;

class BidModel extends BaseModel {

    protected $table = 'bids';

    public function __construct(array $attributes = []) {
        parent::__construct($attributes);
    }

    public function getJoinQuery() {
        return $this
            ->select([
                'bids.*',
                'users.name as user_name',
                'auctions.name as auction_name'
            ])
            ->join('auctions', 'auctions.id', '=', 'bids.auction_id')
            ->join('users', 'users.id', '=', 'auctions.user_id');
    }

    public function bidNow($userId, $auctionId, $bidAmount) {
        DB::transaction(function () {
            DB::raw('LOCK TABLES bids WRITE');
            

            DB::raw('UNLOCK TABLES');
        });

    }

    public function autoBid($userId, $auctionId) {
        $userDetail = User::findOne($userId);

    }

}
