<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin','HomeController@admin');
//关于我们
Route::get('/admin/gy','HomeController@gy');

//关于我们修改
Route::post('/admin/gy','HomeController@xiu');


//广告
Route::resource('gg','GgController');