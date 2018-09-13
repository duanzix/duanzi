<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
	//后台首页
    public function admin()
    {
    	return view('admin');
    }

    //前台首页
     public function home()
    {
    	return view('index');
    }

}
