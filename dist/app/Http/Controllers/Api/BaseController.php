<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use \Illuminate\Http\Response;

abstract class BaseController extends Controller {

    protected $viewData = [];

    public function __construct() {

    }

    public function getResponse(array $result, $code = Response::HTTP_OK) {
        return response()->json($result, $code);
    }

}
