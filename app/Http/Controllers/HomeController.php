<?php

namespace App\Http\Controllers;

use App\Duanzi;
use App\Tag;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function admin()
    {
    	return view('admin');
    }

    public function home(Request $request)
    {
    	$duanzis = Duanzi::all();
    	$tags = Tag::all();
    	return view('index',compact('duanzis','tags'));
    }

    public function tiao(Request $request)
    {
    	if(!empty($request->tag_id)){
             $tag = Tag::findOrFail($request->tag_id);
             $duanzis = $tag->duanzis()->paginate(10);
        }
        
        if(empty($request->tag_id)){
        $duanzis = Duanzi::all();
    	}

    	$tags = Tag::all();
    	
    	return view('index',compact('duanzis','tags'));

    }


}
