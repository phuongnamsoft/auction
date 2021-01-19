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

    public function getCurrentBidAmount($auctionId) {
        $auctionDetail = (new AuctionModel)->getById($auctionId);
        $currentBidAmount = $this->where('auction_id', $auctionId)->max('amount');
        return $currentBidAmount > $auctionDetail['min_bid_amount'] ? $currentBidAmount : $auctionDetail['min_bid_amount'];
    }

    public function bidNow($userId, $auctionId, $bidAmount) {
        $currentBidAmount = $this->getCurrentBidAmount($auctionId);
        if ($bidAmount > $currentBidAmount) {
            $this->insertGetId([
                'amount' => $bidAmount,
                'auction_id' => $auctionId,
                'user_id' => $userId
            ]);
            return true;
        }
        return false;
    }

    public function autoBid($userId, $auctionId) {
        $userDetail = User::find($userId);
        $currentBidAmount = $this->getCurrentBidAmount($auctionId);
        if ($userDetail->max_bid_amount > $currentBidAmount) {
            $this->insertGetId([
                'amount' => $currentBidAmount +1,
                'auction_id' => $auctionId,
                'user_id' => $userId
            ]);
            return true;
        }
        return false;
    }

}
