<?php

namespace App\Http\Controllers;

use App\Wm;
use Illuminate\Http\Request;

class WmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
    }


      //关于我们 
    public function gy()
    {
            //读取表中的数据
       
        $women = Wm::first();
        return view('admin.wo.gy',compact('women'));
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
