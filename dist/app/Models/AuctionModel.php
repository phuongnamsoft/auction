<?php

namespace App\Models;

class AuctionModel extends BaseModel {

    protected $table = 'auctions';

    public function __construct(array $attributes = []) {
        parent::__construct($attributes);
    }

    public function getJoinQuery() {
        return $this
            ->select([
                'auctions.*',
                'users.name as user_name',
                'auction_categories.name as category_name'
            ])
            ->join('auction_categories', 'auction_categories.id', '=', 'auctions.category_id')
            ->join('users', 'users.id', '=', 'auctions.user_id');
    }

}
