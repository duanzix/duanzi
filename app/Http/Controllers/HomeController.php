<?php

namespace App\Http\Controllers;


use App\Cate;
use App\Comment;
use App\Duanzi;
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


    //排行榜
    public function paihang()
    {
    	//读取数据库 获取标签数据
        $duanzi = Duanzi::orderBy('views','desc')->take(10)->get();
        // dd($duanzi);

        $duan = Duanzi::orderBy('zans','desc')->take(10)->get();
    	return view('home.paihang.paihang',compact('duanzi','duan'));
    }

    //排行详情页
    public function xq($id)
    {
    	$duanzi = Duanzi::findOrFail($id);
    	//增加阅读数
        $duanzi->views += 1;
        $duanzi -> save();
    	
    	//赞
    	$duan = Duanzi::orderBy('zans','desc')->take(5)->get();

    	//热度
    	$zi = Duanzi::orderBy('views','desc')->take(5)->get();
    	//上一篇
    	$prev = Duanzi::where('id','<',$duanzi->id)->orderBy('id','desc')->first();
    	//下一篇
    	$next = Duanzi::where('id','>',$duanzi->id)->orderBy('id','asc')->first();

    	//获取评论
    	$ping = Comment::all();
    	return view('home.xq.xiang',compact('duanzi','prev','next','duan','zi','ping'));
    }

    //评论
    public function comment(Request $request)
    {
    	$ping = new Comment;

    	$ping -> name = $request->name;
    	$ping -> content = $request->content;
    	$ping -> duanzi_id = $request->duanzi_id;
    	// dd($request->duanzi_id);

    	if ($ping->save()) {
            return back()->with('success','添加成功');
        }else{
            return back()->with('error','添加失败!');
    	}
    }

    public function wom()
    {
      $women = Wm::first();
      return view('home.women.wom',compact('women'));
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
