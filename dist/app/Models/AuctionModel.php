<?php

namespace App\Models;

class AuctionModel extends BaseModel {

    protected $table = 'auctions';

    public function __construct(array $attributes = []) {
        parent::__construct($attributes);
    }

}
