@extends('layouts.admin') 
@section('title') 友情链接修改 @endsection 
@section('title','友情链接修改') 

@section('content')
<hr>
<div class="tpl-portlet-components">
    <div class="portlet-title">
        <div class="caption font-green bold">
            <span class="am-icon-code"></span> 友情链接修改
        </div>
    </div>
    <div class="tpl-block">
        <div class="am-g">
            <div class="tpl-form-body tpl-form-line">
                <form class="am-form tpl-form-line-form" method="post" action="/youlian/{{$youlian['id']}}">
                    <div class="am-form-group">
                        <label for="user-name" class="am-u-sm-3 am-form-label">友情链接名 <span class="tpl-form-line-small-title">name</span></label>
                        <div class="am-u-sm-9">
                            <input type="text" name="name" class="tpl-form-input" id="user-name" placeholder="" value="{{$youlian['name']}}">
                            <small></small>
                        </div>
                    </div>
                    <div class="am-form-group">
                        <label for="user-name" class="am-u-sm-3 am-form-label">友情链接url <span class="tpl-form-line-small-title">url</span></label>
                        <div class="am-u-sm-9">
                            <input type="text" name="url" class="tpl-form-input" id="user-name" placeholder="请填写标题文字6-20位字母数字下划线" value="{{$youlian['url']}}">
                            <small></small>
                        </div>
                    </div>
                 
					{{csrf_field('post')}}
                    {{method_field('put')}}
                    <div class="am-form-group">
                        <div class="am-u-sm-9 am-u-sm-push-3">
                            <button class="am-btn am-btn-primary tpl-btn-bg-color-success ">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection