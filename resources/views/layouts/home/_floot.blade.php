

    <footer class="main-footer ">
        <div class="container ">
            <div class="row ">
                <div class="col-sm-4 ">
                    <div class="widget ">
                        <h4 class="title ">最新段子</h4>
                        <div class="content recent-post ">
                                @foreach($xinduan as $v)
                                <div class="recent-single-post ">
                                    <a href="/xq/{{$v['id']}}" class="post-title ">
                                    {{$v['title']}}</a>
                                </div>
                                @endforeach
                        </div>
                    </div>
                </div>

                <div class="col-sm-4 "><div class="widget ">                        
                    <h4 class="title ">最新修改</h4>                        
                    <div class="content recent-post ">                                         
                           @foreach($xiugai as $v)                                     
                            <div class="recent-single-post ">                                    
                                <a href="/xq/{{$v['id']}}" class="post-title ">                                    {{$v['title']}}</a>                                    
                                <div class="date ">{{$v['updated_at']}} # {{$v->cate['name']}}</div>                                
                            </div>                                             
                    @endforeach                                       
                        </div>                    
                    </div>
                </div>

                <div class="col-sm-4 ">
                    <div class="widget ">
                        <h4 class="title ">友情链接</h4>
                        <div class="content tag-cloud friend-links ">

                            @foreach($youlian as $v)
                            <a href="{{$v[ 'url']}} " title="我爱冷笑话 "  target="_blank ">{{$v['name']}}</a>
                            @endforeach
                        </div>
                </div></div>
            </div>
        </div>
    </footer>

    <div class="copyright ">
        <div class="container ">
            <div class="row ">
                <div class="col-sm-12 ">
                    <span>Copyright &copy; 段子网<span class="btime ">&emsp; 运行时间：8年254天15小时23分</span>&nbsp;&nbsp;<a href="http://www.miibeian.gov.cn/ " target="_blank " rel="external nofollow ">鲁ICP备15016951号-1</a></span></div>
            </div>
        </div>
    </div>

    <a href="# " id="back-to-top "><i class="fa fa-angle-up "></i></a>
    <script src="static/js/jquery.min.js "></script>
    <script src="static/js/bootstrap.min.js "></script>
    <script src="static/js/js.js "></script>

<link rel="stylesheet " type="text/css " href="/static/css/style.css " />
<script type="text/javascript " src="/static/js/jquery.js "></script>
<script type="text/javascript " src="/static/js/jquery.fs.macaroon.js "></script>
<script>
     $(".post-like ").on("click ", function(){
        var th = $(this);
        var id = th.attr('data-pid');
        $.ajax({
            url:'/zan',
            type:'get',
            data:{id:id},
            success:function(data){
                zan = th.find('.asd').text();
                th.find('.asd').html(parseInt(zan) + 1);
                alert('点赞成功');
            }
        })
    });
</script>
</body>
</html>