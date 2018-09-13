<?php

namespace App\Http\Controllers;

use App\Cate;
use App\Duanzi;
use App\Tag;
use Illuminate\Http\Request;

class DuanZiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
         $duanzis = Duanzi::orderBy('id','desc')
            ->where('title','like','%'.request()->keywords.'%')
            ->paginate(10);
        //解析模板显示用户数据
        return view('admin.duanzi.index',compact('duanzis'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $cates = Cate::all();
         return view('admin.duanzi.create',compact('cates'));
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
        $duanzi = new Duanzi; 
        $duanzi -> title = $request->title;
        $duanzi -> content = $request->content;
        $duanzi -> cate_id = $request->cate_id;

        if($duanzi -> save()){
            return redirect('/duanzi')->with('success','添加成功');
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
        $duanzi = Duanzi::findOrFail($id);
        $cates = Cate::all();
        return view('admin.duanzi.edit', compact('duanzi','cates'));
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
        $duanzi = Duanzi::findOrFail($id);
        $duanzi -> title = $request->title;
        $duanzi -> content = $request->content;
        $duanzi -> cate_id = $request->cate_id;

        if($duanzi -> save()){
            return redirect('/duanzi')->with('success','添加成功');
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
        $duanzi = Duanzi::findOrFail($id);

        if($duanzi -> delete()){
            return back()->with('success','添加成功');
        }else{
            return back()->with('error','添加失败');
        }
    }
}
