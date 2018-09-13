@include('layouts.home._top');

    <!-- end header -->

    <!-- start navigation -->
    <nav class="main-navigation">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="navbar-header">
                        <span class="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">
                        <span class="sr-only">Toggle navigation</span>
                        <i class="fa fa-bars"></i>
                        </span>
                    </div>
                    @include('layouts.home._menu');
                </div>
            </div>
        </div>
    </nav>
    <!-- end navigation --><section class="content-wrap">
        <div class="container">
            <div class="row">
                <main class="main-content">
    
    <!--             
    <article id="993" class="post">   
    <script async src="/static/js/adsbygoogle_1.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-gw-3+1f-3d+2z"
     data-ad-client="ca-pub-0830628158749802"
     data-ad-slot="8484941328"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </article>
    -->           
                
    <article id="993" class="post">
    <header class="post-head">
        <h1 class="post-title">{{$duanzi['title']}}</h1>
        <section class="post-meta">
            <time class="post-date" datetime="2018-09-13T00:38:34+08:00">2018-09-13</time>&ensp;
            <time class="post-date">{{$duanzi['views']}}°C</time>&ensp;
            <time class="post-date"><a href="javascript:;" class="post-like" data-pid="993"><i class="fa-thumbs-ups"></i>赞 (<span>{{$duanzi['zans']}}</span>)</a></time>
        </section>
        
    </header>
        
    <section class="post-content">
    	{!!$duanzi['content']!!}
    </section>
    <p>

<script async src="/static/js/adsbygoogle_1.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-gw-3+1f-3d+2z"
     data-ad-client="ca-pub-0830628158749802"
     data-ad-slot="8484941328"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>    
    
<script async src="/static/js/adsbygoogle_1.js"></script>
<!-- AutoSize2018-2 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-0830628158749802"
     data-ad-slot="7953358243"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </p>
    <p>
    
    <!-- JiaThis Button BEGIN -->
<div class="jiathis_style">
	<a class="jiathis_button_qzone"></a>
	<a class="jiathis_button_tsina"></a>
	<a class="jiathis_button_tqq"></a>
	<a class="jiathis_button_weixin"></a>
	<a class="jiathis_button_renren"></a>
	<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
	<a class="jiathis_counter_style"></a>
</div>
<script type="text/javascript" src="/static/js/jia.js" charset="utf-8"></script>
<!-- JiaThis Button END -->
        
    </p>
    <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
        <i class="fa fa-folder-open-o"></i><a href="http://duanziwang.com/category/%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%AE%B5%E5%AD%90/">一句话段子</a>&nbsp;&nbsp;
            <i class="fa fa-tags"></i><a href="http://duanziwang.com/tag/%E6%96%B0%E6%89%8B/">新手</a>        </div>
    </footer>
    </article>

<!--
<div class="about-author clearfix">
Adsense
</div>
-->

<div class="about-author clearfix">
@if($prev)
<li>上一篇：<a href="/xq/{{$prev->id}}">{{$prev->title}}</a></li>
@endif

 @if($next)
<li>下一篇：&ensp;<a href="/xq/{{$next->id}}">{{$next->title}}</a></li>
@endif

</div>

<div class="about-author clearfix">
<h5><i class="fa fa-random"></i>&ensp;随便看看：</h5>
@foreach($duan as $v)
<li><a href="/xq/{{$v['id']}}">{{$v['title']}}</a></li>
@endforeach


<h5><i class="fa fa-fire"></i>&ensp;看的最多：</h5>
@foreach($zi as $v)
<li><a href="/xq/{{$v['id']}}">{{$v['title']}}</a><small>【热度: {{$v['views']}}°C】</small></li>
@endforeach
</div>

<div class="about-author clearfix">
    <div id="comments">
        
        <div id="respond-post-993" class="respond">
        <div class="cancel-comment-reply">
        <a id="cancel-comment-reply-link" href="http://duanziwang.com/993.html#respond-post-993" rel="nofollow" style="display:none" onclick="return TypechoComment.cancelReply();">取消回复</a>        </div>
    
        <div class="news_pl">
            <h2>文章评论</h2>
            <div class="gbko">
                <script src="/e/pl/more/?classid=77&amp;id=106&amp;num=20"></script>
                
                <div class="fb">
                    @foreach($ping as $v)
                    @if($v['duanzi_id'] == $duanzi['id'])
                    <ul style="background:url(https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1536846806&di=eed6a7c0713a5607e9f235eb2a0aaf63&src=http://img3.duitang.com/uploads/item/201410/18/20141018235057_4Wmsh.jpeg) no-repeat top -15px left 10px;background-size:50px 50px;">
                        <p class="fbtime">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>用户：{{$v['name']}}</span></p>
                        <p class="fbinfo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{$v['content']}}</span></p>
                    </ul>
                    @endif
                    @endforeach
                </div>
                
                <script>
                function CheckPl(obj) {
                    if (obj.saytext.value == "") {
                        alert("您没什么话要说吗？");
                        obj.saytext.focus();
                        return false;
                    }
                    return true;
                }
                </script>
                <form action="/comment" method="post" name="saypl" id="saypl" onsubmit="return CheckPl(document.saypl)">
                    <div id="plpost">
                        <p class="saying"><span><a href="/e/pl/?classid=77&amp;id=106">共有<script type="text/javascript" src="/e/public/ViewClick/?classid=77&amp;id=106&amp;down=2"></script>条评论</a></span>来说两句吧...</p>

                        <p class="yname"><span>用 户名:</span>
                            <input name="name" type="text" class="inputText" id="username" value="" size="16">
                        </p>
                       
                        评论内容：<textarea name="content" rows="6" id="saytext"></textarea>
                        {{csrf_field()}}
                        <input type="hidden" name="duanzi_id" value="{{$duanzi['id']}}">
                        <input name="imageField" type="submit" value="提交">
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</div>
                </main>

            </div class="row">
        </div class="container">
</section>
 @include('layouts.home._floot');
