<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function controllerMethod()
    {
        return response()->json([
            'msg' => 'qui é um retorno'
        ]);
    }

    public function teste()
    {
        return response()->json([
            'msg' => 'apenas um erro encontrado'
        ], 422);
    }
}
