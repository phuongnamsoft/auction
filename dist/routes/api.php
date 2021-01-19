<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'namespace' => 'Api',
], function () {

    Route::post('/auth/login', 'AuthController@login')->name('api.auth.login');
    Route::post('/auth/logout', 'AuthController@logout')->name('api.auth.logout');

});

Route::group([
    'namespace' => 'Api',
    'middleware' => 'auth:api',
], function () {

    Route::get('/auth/check-login', 'AuthController@checkLogin')->name('api.auth.checkLogin');
    Route::get('/auctions', 'AuctionController@index')->name('api.auction.index');
    Route::get('/auction/{id}', 'AuctionController@detail')->name('api.auction.detail');
    Route::get('/auction/{id}/bid-histories', 'AuctionController@bidHistories')->name('api.auction.bidHistories');

    Route::post('/auction/{id}/bid-now', 'BidController@bidNow')->name('api.bid.bidNow');
    Route::post('/auction/{id}/auto-bid', 'BidController@autoBid')->name('api.bid.autoBid');

});
