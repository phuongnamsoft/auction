<?php

namespace App\Models;

class BidModel extends BaseModel {

    protected $table = 'bids';

    public function __construct(array $attributes = []) {
        parent::__construct($attributes);
    }

}
