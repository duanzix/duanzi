<?php

namespace App\Http\Controllers;

use App\Cate;
use App\Comment;
use App\Duanzi;
use App\Gg;
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


    public function home(Request $request)
    {
      $cate = Cate::take(4)->get();
      $xiugai = Duanzi::orderBy('updated_at','desc')->take(5)->get();
      $suiji = Duanzi::orderBy('created_at')->take(5)->get();
       $cates = Cate::all();
      $duanzi = Duanzi::orderBy('id','desc')
            ->where('title','like', '%'.request()->keywords.'%')
            ->paginate(10);
      $tags = Tag::all();
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();     
      $youlian = Youlian::all();
      $guanggao = Gg::first();
      $women = Wm::first();
      return view('index',compact('duanzi','cates','tags','youlian','xinduan','suiji','xiugai','cate','guanggao','women'));
    }
  
  


    //排行榜
    public function paihang()
    {
      $xiugai = Duanzi::orderBy('updated_at','desc')->take(5)->get();
      $women = Wm::first();
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();     
      $youlian = Youlian::all();
    	//读取数据库 获取标签数据
        $duanzi = Duanzi::orderBy('views','desc')->take(10)->get();
        // dd($duanzi);

        $duan = Duanzi::orderBy('zans','desc')->take(10)->get();
        $cate = Cate::take(4)->get();
    	return view('home.paihang.paihang',compact('duanzi','duan','women','xinduan','youlian','xiugai','cate'));
    }

    //排行详情页
    public function xq($id)
    {
      $women = Wm::first();
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();     
      $youlian = Youlian::all();
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
      $xiugai = Duanzi::orderBy('updated_at','desc')->take(5)->get();
      $cate = Cate::take(4)->get();
    	return view('home.xq.xiang',compact('duanzi','prev','next','duan','zi','ping','women','youlian','xinduan','xiugai','cate'));
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
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();     
      $youlian = Youlian::all();
      $xiugai = Duanzi::orderBy('updated_at','desc')->take(5)->get();
      $cate = Cate::take(4)->get();
      return view('home.women.wom',compact('women','xinduan','youlian','xiugai','cate'));
    }
   
    /*
    前台标签
     */
    public function bq()
    {
      $women = Wm::first();
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();     
      $youlian = Youlian::all();
      $bq = Tag::all();
      $xiugai = Duanzi::orderBy('updated_at','desc')->take(5)->get();
      $cate = Cate::take(4)->get();
      return view('home.bq',compact('bq','women','xinduan','youlian','xiugai','cate'));
    }

    //分类跳转
    public function fenlei(Request $request)
    {
      
      if(!empty($request->cateid)){
        $duanzi = Duanzi::where('cate_id', $request->cateid)->orderBy('id','desc')->paginate(10);
      }

      if(!empty($request->tag_id)){
          $tag = Tag::findOrFail($request->tag_id);
          $duanzi = $tag->duanzis()->paginate(10);
        }
      
      if(empty($request->cateid) && empty($request->tag_id)){
       $duanzi = Duanzi::orderBy('id','desc')
            ->where('title','like', '%'.request()->keywords.'%')
            ->paginate(10);
      }
       $cates = Cate::all();
      $tags = Tag::all();
      $youlian = Youlian::all();
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();
      $women = Wm::first();
      $suiji = Duanzi::orderBy('created_at')->take(5)->get();
      $xiugai = Duanzi::orderBy('updated_at','desc')->take(5)->get();
      $cate = Cate::take(4)->get();
      return view('index',compact('duanzi','cates','tags','youlian','xinduan','women','suiji','xiugai','cate'));
    }

    //标题类跳转
    public function lei($id)
    {
      $cate = Cate::take(4)->get();
      $ca = Cate::findOrFail($id);
      $duanzi = Duanzi::where('cate_id', $id)->orderBy('id','desc')->paginate(10);
      $cates = Cate::all();
      $tags = Tag::all();
      $youlian = Youlian::all();
      $xinduan = Duanzi::orderBy('created_at','desc')->take(5)->get();
      $women = Wm::first();
      $suiji = Duanzi::orderBy('created_at')->take(5)->get();
      $xiugai = Duanzi::orderBy('updated_at','desc')->take(5)->get();
      $guanggao = Gg::first();
     
      return view('home.lei',compact('duanzi','cates','tags','youlian','xinduan','women','suiji','xiugai','ca','cate','guanggao'));
    }



}
