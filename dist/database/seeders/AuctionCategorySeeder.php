<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuctionCategorySeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('auction_categories')->insert([
            [
                'name' => 'Antique coins',
                'description' => 'All ancient coins',
                'status' => 1
            ],
            [
                'name' => 'Antique potteries',
                'description' => 'All antique potteries',
                'status' => 1
            ],
        ]);
    }
}
