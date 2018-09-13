<?php

namespace App\Http\Controllers;

use App\Wm;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function admin()
    {
    	return view('admin');
    }


    public function wom()
    {
      $women = Wm::first();
      return view('home.women.wom',compact('women'));
    }

}
