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
    return view('home.index');
});

Route::get('/admin','HomeController@admin');

//排行榜
Route::get('/paihang','HomeController@paihang');
//排行榜详情页
Route::get('/xq/{id}','HomeController@xq');

//评论
Route::post('/comment','HomeController@comment');

//友情链接
Route::resource('/youlian','YoulianController');

//前台首页
Route::get('/','HomeController@home');

//后台用户
Route::resource('user','UserController');

//关于我们
Route::get('/admin/gy','WmController@gy');

//关于我们修改
Route::post('/admin/gy','WmController@xiu');
//关于我们前台
Route::get('/wom','HomeController@wom');

//广告
Route::resource('gg','GgController');

//段子列表
Route::resource('duanzi','DuanZiController');

//分类管理
Route::resource('fenlei','CateController');

//标签管理
Route::resource('/biaoq','TagController');

//分类跳转
Route::get('/cate','HomeController@fenlei');

//标签跳段子
Route::get('/tiao','HomeController@tiao');

//前台标签
Route::get('/bq','HomeController@bq');

//点赞数
Route::get('/zan','DuanZiController@zan');

//标题跳转
Route::get('/lei/{id}','HomeController@lei');

