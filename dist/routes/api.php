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
    Route::get('/auctions', 'AuctionController@getListAuction')->name('api.auction.getListAuction');

});
