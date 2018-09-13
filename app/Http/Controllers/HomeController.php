<?php

namespace App\Http\Controllers;

use App\Wm;
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

      //关于我们 
    public function gy()
    {
            //读取表中的数据
       
        $women = Wm::first();
        return view('layouts.admin.gy',compact('women'));
    }

    /*
    保存设置  关于我们  后台
    */
    public function xiu(Request $request)
    {
 
    $women = Wm::first();

      if (!$women) {
          $women = new Wm;
      }
      
      $women -> text = $request->text;
      $women -> title = $request->title;
      $women -> url = $request->url;
     if ($request->hasFile('logo')) {
            $women->logo = '/'.$request->logo->store('uploads/'.date('Ymd'));
      }

       if ($women -> save()) {
            return back()->with('success','设置成功');
       }else{
            return back()->with('error','设置失败');
       }

    }

}
