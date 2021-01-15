<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuctionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auctions', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->string('name');
            $table->unsignedBigInteger('seller_id');
            $table->bigInteger('category_id')->unsigned();
            $table->bigInteger('currency_id')->unsigned();
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->text('content');
            $table->text('description');
            $table->string('image', 255)->nullable();
            $table->text('images')->nullable();

            $table->integer('min_bid_amount')->unsigned();
            $table->integer('shipping_fee')->unsigned();
            
            $table->integer('status')->default(0);

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('auctions');
    }
}