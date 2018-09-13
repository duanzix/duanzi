<?php

namespace App\Http\Controllers;

use App\Youlian;
use Illuminate\Http\Request;

class YoulianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $youlians = Youlian::orderBy('id','desc')
        //搜索
        ->where('name','like','%'.request()->keywords.'%')
        //分页
        ->paginate(10);
        //解析模板 显示用户数据
        return view('admin.youlian.index',['youlians'=>$youlians]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.youlian.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $youlian = new Youlian;

        $youlian->name = $request ->name;     
        $youlian->url = $request ->url;     

        if($youlian -> save()){
            return redirect('/youlian')->with('success','添加友情链接成功');
        }else{
            return back()->with('error','添加友情链接失败');
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
        $youlian = Youlian::findOrFail($id);
        return view('admin.youlian.edit',compact('youlian'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
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
        $youlian = Youlian::findOrFail($id);

        $youlian->name = $request ->name;     
        $youlian->url = $request ->url;     

        if($youlian -> save()){
            return redirect('/youlian')->with('success','修改友情链接成功');
        }else{
            return back()->with('error','修改友情链接失败');
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
        $youlian = Youlian::findOrFail($id);

        if($youlian->delete()){
            return back()->with('success','删除成功');
        }else{
            return back()->with('error','删除失败');
        }
    }
}
