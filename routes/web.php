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


//段子列表
Route::resource('duanzi','DuanZiController');

//分类管理
Route::resource('fenlei','CateController');

//标签管理
Route::resource('/biaoq','TagController');
