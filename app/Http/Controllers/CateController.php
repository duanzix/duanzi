<?php

namespace App\Http\Controllers;

use App\Cate;
use Illuminate\Http\Request;

class CateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //读取数据库 获取用户数据
        $cate = Cate::orderBy('id','desc')
            ->where('name','like', '%'.request()->keywords.'%')
            ->paginate(10);
        //解析模板显示用户数据
        return view('admin.cate.index', ['cate'=>$cate]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.cate.create');
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
        $cate = new Cate;
        $cate -> name = $request->name;

        if($cate->save()){
            return redirect('/fenlei')->with('success','添加分类成功');
        }else{
            return back()->with('error','添加分类失败');
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
        //获取用户的信息
        $cate = Cate::findOrFail($id);
        //解析模板显示数据
        return view('admin.cate.edit', ['cate'=>$cate]);
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
        //获取用户的信息
        $cate = Cate::findOrFail($id);
        //更新
        $cate ->name = $request->name;

        if($cate->save()){
            return redirect('/fenlei')->with('success','更新成功');
        }else{
            return back()->with('error','更新失败');
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
        $cate = Cate::findOrFail($id);

        if($cate->delete()){
            return back()->with('success','删除成功');
        }else{
            return back()->with('error','删除失败');
        }
    }
}
