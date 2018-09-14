@include('layouts.home._top');

    <!-- end header -->

    <!-- start navigation -->
    <nav class="main-navigation ">
	    <div class="container ">
	        <div class="row ">
	            <div class="col-sm-12 ">
	                <div class="navbar-header ">
		                <span class="nav-toggle-button collapsed " data-toggle="collapse " data-target="#main-menu ">
			                <span class="sr-only ">Toggle navigation</span>
			                <i class="fa fa-bars "></i>
		                </span>
	                </div>
	                @include('layouts.home._menu')
	            </div>
	        </div>
	    </div>
    </nav>
    <!-- end navigation -->  
 

<!-- 所有标签  start-->
<section class="content-wrap ">
    <div class="container ">
	    <div class="row ">
	        <main>
				<article id="107 " class="post ">
					<header class="post-head "><h1 class="post-title ">标签</h1></header>
					<section class="post-content ">          
						<p style="text-align:center "><img src="{{$women['logo']}}" height="100 " width="100 " alt="t.duanziwang.jpg " title="t.duanziwang.jpg "></p>

						@foreach($bq as $v)
						<a style="font-size:286%; color: rgb(126, 2, 115) " 
					href="/cate?tag_id={{$v['id']}} rel="tag " title="{{count($v->duanzis)}}个话题 ">{{$v['name']}}<small>{{count($v->duanzis)}}</small></a>

						@endforeach
					</section>
				</article>
	        </main>
	    </div class="row ">
    </div class="container ">
</section>
<!-- 所有标签  end-->



<!-- 尾部 start -->
 @include('layouts.home._floot');