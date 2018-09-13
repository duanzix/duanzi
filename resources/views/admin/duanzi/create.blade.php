@extends('layouts.admin') 
@section('title') 段子添加 @endsection 
@section('title','段子添加') 

@section('content')
<hr>

<script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.all.min.js"> </script>
<script type="text/javascript" charset="utf-8" src="/ueditor/lang/zh-cn/zh-cn.js"></script>

<div class="tpl-portlet-components" >
    <div class="portlet-title">
        <div class="caption font-green bold">
            <span class="am-icon-code">段子添加</span> 
        </div>
    </div>
    
    <div class="tpl-block" style="height:700px">
        <div class="am-g">
            <div class="tpl-form-body tpl-form-line">
                <form class="am-form tpl-form-line-form" method="post" action="/duanzi">
                    <div class="am-form-group">
                        <label for="user-name" class="am-u-sm-3 am-form-label">标题 <span class="tpl-form-line-small-title"></span></label>
                        <div class="am-u-sm-9">
                            <input type="text" name="title" class="tpl-form-input" id="user-name" placeholder="">
                        </div>
                    </div>
                   
                   <div class="am-form-group">
                         <label for="user-phone" class="am-u-sm-3 am-form-label">选择分类<span class="tpl-form-line-small-title"></span></label>
                            <div class="am-u-sm-9">
                                <select data-am-selected="{searchBox: 1}" style="display: none;" name="cate_id"  >
                                    @foreach($cates as $v)
                                        <option value="{{$v['id']}}">{{$v['name']}}</option>
                                    @endforeach
                                  </select>
                             </div>
                     </div>

                     <div class="am-form-group">
                         <label for="user-phone" class="am-u-sm-3 am-form-label">选择标签<span class="tpl-form-line-small-title"></span></label>
                            <div class="am-u-sm-9">
                                    @foreach($tags as $v)
                                        <input type="checkbox" name="tag_id[]" value="{{$v['id']}}" tpl-form-input" id="user-name" placeholder="">{{$v['name']}}
                                      @endforeach
                               </div>
                     </div>
                    
                    <div class="am-form-group">
                        <label class="am-u-sm-3 am-form-label">内容</label>
                        <div class="am-u-sm-9">
                            <script id="editor" type="text/plain" name="content" style="width:100%;height:350px;"></script>
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