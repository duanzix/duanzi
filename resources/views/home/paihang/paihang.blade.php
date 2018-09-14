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
                    @include('layouts.home._menu')
                </div>
            </div>
        </div>
    </nav>
    <!-- end navigation -->  
 
<section class="content-wrap">
        <div class="container">
            <div class="row">


                <main>

    <article id="421" class="post">
    <header class="post-head">
        <h1 class="post-title">排行榜</h1>
    </header>


       <section class="post-content">
          <h3 class="post-title">浏览最多：</h3>
          @foreach($duanzi as $v)
		  <li><a href="/xq/{{$v['id']}}" title="说得好有道理的样子！">{{$v['title']}}</a><small>【热度: {{$v['views']}}°C】</small></li>
          @endforeach

          <h3 class="post-title">点赞最多：</h3>
          @foreach($duan as $v)
		  <li><a href='http://duanziwang.com/778.html' title='吃鸡最讨厌挂了，那个决赛圈三个人，有一个人无限子弹，有一个跑的比车还快，我TM在天上看的一清二楚。'>{{$v['title']}}</a><span style='font-size:70%'>&ensp;( 点赞:  {{$v['zans']}}  次 ) </span></li>
          @endforeach
       </section>
    </article>


                </main>

            </div class="row">
        </div class="container">
</section>

 @include('layouts.home._floot');