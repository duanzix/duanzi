<?php

namespace App\Http\Controllers;

use App\Cate;
use App\Duanzi;
use App\Tag;
use App\Wm;
use App\Youlian;
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
      $cates = Cate::all();
      $duanzi = Duanzi::orderBy('id','desc')
            ->where('title','like', '%'.request()->keywords.'%')
            ->paginate(10);
      $tags = Tag::all();
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();
      
      $youlian = Youlian::all();
    	return view('index',compact('duanzi','cates','tags','youlian','xinduan'));

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

    //分类跳转
    public function fenlei(Request $request)
    {
      
      if(!empty($request->cateid)){
        $duanzi = Duanzi::where('cate_id', $request->cateid)->orderBy('id','desc')->paginate(10);
      }
      
      if(empty($request->cateid)){
       $duanzi = Duanzi::orderBy('id','desc')
            ->where('title','like', '%'.request()->keywords.'%')
            ->paginate(10);
      }
       $cates = Cate::all();
      $tags = Tag::all();
      $youlian = Youlian::all();
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();
      return view('index',compact('duanzi','cates','tags','youlian','xinduan'));
    }



}
