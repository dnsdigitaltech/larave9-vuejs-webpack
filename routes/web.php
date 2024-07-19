<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::any('/', function(){
    return view('welcome');
});



Route::post('/app/create_tag', [TestController::class, 'teste']);

Route::get('/new', [TestController::class, 'controllerMethod']);

Route::any('/{slug}', function(){
    return view('welcome');
});
