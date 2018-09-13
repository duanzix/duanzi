<div class="collapse navbar-collapse " id="main-menu ">
    <ul class="menu ">
        <li class="nav-current "><a href="/">首页</a></li>
        <!--<li><a href="http://duanziwang.com/goodluck "><i class="fa fa-plane "></i>&ensp;手气不错</a></li>-->
        @foreach($cate as $v)
        <li><a href="/lei/{{$v['id']}}" >{{$v['name']}}</a></li>
        @endforeach
        <li><a href="/paihang" title="排行榜 ">排行榜</a></li>
        <li><a href="/bq" title="标签 ">标签</a></li>
        <li><a href="/wom" title="关于 ">关于</a></li>
    </ul>
</div>