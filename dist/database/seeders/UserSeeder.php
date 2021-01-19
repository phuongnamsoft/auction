<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('users')->insert([
            'name' => 'Nam Nguyen',
            'email' => 'phuongnam@phuongnam.org',
            'password' => Hash::make('password@123'),
            'max_bid_amount' => 3000

        ]);
        for ($index = 1; $index <= 10; $index++) {
            DB::table('users')->insert([
                'name' => 'Scopic Bidder ' . $index,
                'email' => 'bidder' . $index . '@scopicsoftware.com',
                'password' => Hash::make('password@123'),
                'max_bid_amount' => rand(3, 6) * 1000
            ]);
        }
    }
}
