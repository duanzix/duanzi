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

    <article id="2" class="post">

    <header class="post-head">
        <h1 class="post-title">关于</h1>
    </header>


       <section class="post-content">
            
		{!!$women['text']!!}
       </section>

    </article>


                </main>

            </div class="row">
        </div class="container">
</section>

 @include('layouts.home._floot');