<?php

namespace App\Http\Controllers;

use App\Gg;
use Illuminate\Http\Request;

class GgController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //读取数据库， 获取用户数据
        $ggs = Gg::orderBy('id','desc')
            ->where('url','like', '%'.request()->keywords.'%')
            ->paginate(3);

        //解析模板显示到用户数据
        return view('admin.gg.index', ['ggs'=>$ggs]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.gg.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $gg = new Gg;
        $gg -> url = $request->url;

        


        //文件上传
        //检测是否有文件上传
            
        if ($request->hasFile('image')) {
            $gg->image = '/'.$request->image->store('uploads/'.date('Ymd'));
        }


        if($gg -> save()){
            return redirect('/gg')->with('success','添加成功');
        }else{
            return back()->with('error','添加失败');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
          $gg = Gg::find($id);

        return view('admin.gg.edit', ['gg'=>$gg]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
         $gg = Gg::find($id);
        $gg -> url = $request->url;

        


        //文件上传
        //检测是否有文件上传
            
        if ($request->hasFile('image')) {
            $gg->image = '/'.$request->image->store('uploads/'.date('Ymd'));
        }


        if($gg -> save()){
            return redirect('/gg')->with('success','添加成功');
        }else{
            return back()->with('error','添加失败');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
         $gg = Gg::find($id);
        $gg -> delete();

        if($gg -> delete()){
          return redirect('/gg')->with('success','删除成功');  
        }else{
             return back()->with('error','删除失败');   
        }
    }
}
