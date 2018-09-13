<?php

namespace App\Http\Controllers;

use App\Tag;
use App\Wm;
use Illuminate\Http\Request;

class HomeController extends Controller
{
	//后台首页
    public function admin()
    {
    	return view('admin');
    }



    public function wom()
    {
      $women = Wm::first();
      return view('home.women.wom',compact('women'));
    }
    //前台首页
     public function home()
    {
    	return view('index');

    }

    /*
    前台标签
     */
    public function bq()
    {
      $bq = Tag::all();
      return view('home.bq',compact('bq'));
    }

}
