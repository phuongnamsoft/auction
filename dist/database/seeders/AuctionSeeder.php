<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuctionSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
//        DB::table('auctions')->insert([
//            [
//                'name' => 'Accient Dual Dragons',
//                'description' => 'Accient Dual Dragons',
//                'seller_id' => 1,
//                'category_id' => 3,
//                'currency_code' => 'USD',
//                'start_date' => date('Y-m-d H:i:s'),
//                'end_date' => date('Y-m-d H:i:s', time() + 31 * 24 * 60 * 60),
//                'image' => '/upload/images/1.jpg',
//                'images' => json_encode(['/upload/images/1.jpg', '/upload/images/1.jpg']),
//                'min_bid_amount' => 1500,
//                'shipping_fee' => 200,
//                'status' => 1
//            ],
//            [
//                'name' => 'Dong Son bronze drum',
//                'description' => 'Dong Son bronze drum in Vietnam',
//                'seller_id' => 1,
//                'category_id' => 3,
//                'currency_code' => 'USD',
//                'start_date' => date('Y-m-d H:i:s'),
//                'end_date' => date('Y-m-d H:i:s', time() + 31 * 24 * 60 * 60),
//                'image' => '/upload/images/1.jpg',
//                'images' => json_encode(['/upload/images/1.jpg', '/upload/images/1.jpg']),
//                'min_bid_amount' => 1500,
//                'shipping_fee' => 200,
//                'status' => 1
//            ],
//        ]);

        $listItems = [];
        for ($i = 0; $i < 10; $i++) {
            $listItems[] = [
                'name' => 'Dong Son bronze drum (No.' . rand(235, 674) . ')',
                'description' => 'Dong Son bronze drum in Vietnam',
                'user_id' => 1,
                'category_id' => 3,
                'currency_code' => 'USD',
                'start_date' => date('Y-m-d H:i:s'),
                'end_date' => date('Y-m-d H:i:s', time() + rand(10, 30) * 24 * 60 * 60),
                'image' => '/upload/images/2.jpg',
                'images' => json_encode(['/upload/images/2.jpg', '/upload/images/2.jpg']),
                'min_bid_amount' => rand(18, 23) * 1000,
                'shipping_fee' => 200,
                'status' => 1
            ];
        }
        DB::table('auctions')->insert($listItems);
    }
}
