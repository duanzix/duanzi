@extends('layouts.admin') 
@section('title') 关于我们设置 @endsection 
@section('title','关于我们设置') 

@section('content')
<hr>
<script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.all.min.js"> </script>
<script type="text/javascript" charset="utf-8" src="/ueditor/lang/zh-cn/zh-cn.js"></script>
<div class="tpl-portlet-components">
    <div class="portlet-title">
        <div class="caption font-green bold">
            <span class="am-icon-code"></span> 关于我们设置
        </div>
    </div>
    <div class="tpl-block">
        <div class="am-g">
            <div class="tpl-form-body tpl-form-line">
                <form class="am-form tpl-form-line-form" method="post" action="/admin/gy" enctype="multipart/form-data">
                    <div class="am-form-group">
                        <label for="user-name" class="am-u-sm-3 am-form-label">logo <span class="tpl-form-line-small-title"></span></label>
                        <div class="am-u-sm-9">
                            <input type="file" name="logo" class="tpl-form-input" value="{{$women ? $women->logo : ''}}" id="user-name" placeholder="">
                            <img src="{{$women ? $women->logo : ''}}">
                        </div>
                    </div>
                   
                     <div class="am-form-group">
                        <label class="am-u-sm-3 am-form-label">文本</label>
                        <div class="am-u-sm-9">
                            <script id="editor" type="text/plain" name="text" value="{{$women ? $women->text : ''}}" style="width:100%;height:500px;">{!!$women ? $women->text : ''!!}</script>
                        </div>
                    </div>
                    <div class="am-form-group">
                        <label for="user-name" class="am-u-sm-3 am-form-label">标题 <span class="tpl-form-line-small-title"></span></label>
                        <div class="am-u-sm-9">
                            <input type="text" name="title" value="{{$women ? $women->title : ''}}" class="tpl-form-input" id="user-name" placeholder="">
                        </div>
                    </div>
                    <div class="am-form-group">
                        <label for="user-name" class="am-u-sm-3 am-form-label">url <span class="tpl-form-line-small-title"></span></label>
                        <div class="am-u-sm-9">
                            <input type="text" name="url" value="{{$women ? $women->url : ''}}" class="tpl-form-input" id="user-name" placeholder="">
                        </div>
                    </div> 

                    
					{{csrf_field()}}
                    <div class="am-form-group">
                        <div class="am-u-sm-9 am-u-sm-push-3">
                            <button class="am-btn am-btn-primary tpl-btn-bg-color-success ">提交</button>
                        </div>
                    </div>
                </form>
                 <script>
                    var ue = UE.getEditor('editor');
                </script>
            </div>
        </div>
    </div>
</div>
@endsection