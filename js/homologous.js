
$(function(){
    //取消超链接默认行为
    $('.son').click(function(e){
        e.preventDefault();
    });
    //tab切换
    $('#tabs>ul>li').click(function(){
        var _index=$(this).index();
        $('.con').eq(_index).show().siblings('.con').hide();
        $(this).addClass('active').siblings().removeClass('active');
    });
    //js代码嵌入的控制按钮
    $('#hard').click(function(){
        $('.ca').toggleClass('glyphicon-chevron-down');
        $('.jsCode').toggle();
    });
    //分割线
    var share='<div class="element share">'+
                '<button class="close">&times;</button>'+
                '<p class="text-black shareTitleL timu">分割线</p>'+
                '<hr/>'+
                '<p class="text-muted shareWordL speak">这里添加你的描述</p>'+
            '</div>'
        ,
        //图片
        picture='<div class="form-group element img">'+
                '<button class="close">&times;</button>'+
                '<img src="http://www.mikecrm.com/images/icon/formDefaultPicture.png" style="width: 100%;">'+
                '<h6 class="picWordL speak">描述文字</h6>'+
            '</div>',
        //轮播
        banner='<div class="element banner">'+
                    '<button class="close" style="position: relative;">&times;</button>'+
                    '<div id="myCarousel" class="carousel slide">'+
                        '<ol class="carousel-indicators">'+
                            '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'+
                            '<li data-target="#myCarousel" data-slide-to="1"></li>'+
                            '<li data-target="#myCarousel" data-slide-to="2"></li>'+
                        '</ol>'+
                        '<div class="carousel-inner">'+
                            '<div class="item active">'+
                                '<img src="img/3.jpg" alt="第一张"/>'+
                            '</div>'+
                            '<div class="item">'+
                                '<img src="img/4.jpg" alt="第二张"/>'+
                            '</div>'+
                            '<div class="item">'+
                                '<img src="img/5.jpg" alt="第三张"/>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'
        ,
        //公告
        notice='<div class="element notice">'+

                '<button class="close marqueeClose">&times;</button>'+
            '   <marquee class="bg-info" style="color:#414141;font-size:12px;line-height:17px;" direction="left" height="18" scrollamount="5" behavior="scroll" scrolldelay="100"  width="100%">'+
                '<div align="">'+
                    '描述文字'+
                '</div>'+
                '</marquee>'+
                '</div>'
                ,
        list='<div class="listNotice">'+
                    '<div class="listScroll"></div>'+
                '</div>'

        ,
        marquee='   <marquee class="bg-info" style="color:#414141;font-size:12px;line-height:17px;" direction="left" height="18" scrollamount="5" behavior="scroll" scrolldelay="100"  width="100%">'+
            '<div align="">'+
            '描述文字'+
            '</div>'+
            '</marquee>'
    ;
        //副文本
        richArea='<div class="element richArea">'+
                    '<div class="closeLine2">'+
                    '<botton class="close3">&times;</botton>'+
                    '</div>'+
                    '<div class="richZone"></div>'+
            '</div>'

        ,
        //表单组件的移除按钮
        fieldSS='<div class="space element" id="fields" >'+
                    '<div>'+
                        '<button class="close3">&times;</button>'+
                    '<div>'+
                '</div>'



        ;

    //下面都是append 节点
    $('#share').click(function(e){

        $('.room').append(share);
        $('.share').trigger('click');
    });
    $('#picture').click(function(e){

        $('.room').append(picture);
        $('.img').trigger('click');
    });
    $('#banner').click(function(e){

        $('.room').append(banner);
        $('.banner').trigger('click');
    });

    $('#notice').click(function(e){

        $('.room').append(notice);
        $('.notice').trigger('click');
    });

    $('#rich').click(function(e){

        $('#content').append(richArea);
        $('.trees').html(textEdit);
        $('.richZone').trigger('click');
        ini('#edut');
    });

    $(document).on('click','.richArea',function(){
        $('.trees').html(textEdit);
        ini('#edut');
        $('#edut_ifr').contents().find('#tinymce').html($(this).find('.richZone').html());
    });


    var
        img='<div class="form-group">'+
                '<label>描述文字</label>'+
                '<input class="form-control picWordI" placeholder="描述文字">'+
            '</div>'+
            '<div class="form-group">'+
                '<h5>请选择描述文字对齐方式</h5>'+
                '<label class="checkbox-inline imgWLeft">'+
                '<input type="radio" name="lign" checked>左对齐'+
                '</label>'+
                '<label class="checkbox-inline imgWCenter">'+
                '<input type="radio" name="lign">居中对齐'+
                '</label>'+
                '<label class="checkbox-inline imgWRight">'+
                '<input type="radio" name="lign">右对齐'+
                '</label>'+
            '</div>'+
            '<div class="plusMinus"><i class="glyphicon glyphicon-plus plus"></i><i class="glyphicon glyphicon-minus minus"></i></div>'+
            '<div class="form-group upLoad">'+
                '<label>上传图片</label>'+
                '<input class="form-control" type="file" placeholder="">'+
            '</div>',
        scroll='<div class="form-group">'+
                '<h5>请选择上传的图片（最多五张）</h5>'+
                '<div class="plusMinus"><i class="glyphicon glyphicon-plus plus2"></i><i class="glyphicon glyphicon-minus minus2"></i></div>'+
                '<div class="form-group upLoad2">'+
                '<label>上传图片</label>'+
                '<input class="form-control" type="file" placeholder="">'+
                '</div>'+
                '<div class="form-group disc">'+
                    '<h4>是否显示轮播点</h4>'+
                    '<label class="checkbox-inline yesShow">'+
                        '<input type="radio" name="disc">显示'+
                    '</label>'+
                    '<label class="checkbox-inline noShow">'+
                        '<input type="radio" name="disc" checked>不显示'+
                    '</label>'+
                '</div>',
        word='<div class="form-group">'+
                '<h4>滚动效果选择</h4>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="dir" class="xr" checked>水平滚动'+
                '</label>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="dir" class="yr">垂直滚动'+
                '</label>'+
            '</div>'+
            '<div class="form-group">'+
                '<label>描述文字</label>'+
                '<input class="form-control noticeI textInput appe" placeholder="描述文字">'+
                '<div class="form-control noticeI textarea" contenteditable="true"></div>'+
            '</div>'+
            '<div class="form-group">'+
                '<label>字体颜色设置</label>'+
                '<input class="form-control marqueeFC" type="color">'+
            '</div>'+
            '<div class="form-group">'+
                '<label>背景颜色设置</label>'+
                '<input class="form-control marqueeBC" type="color">'+
            '</div>'
        ,

        line='<div class="form-group">'+
            '<label>标题</label>'+
            '<input class="form-control shareTitleI" placeholder="分割线">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>描述文字</label>'+
            '<input class="form-control shareWordI" placeholder="这里添加你的描述">'+
            '</div>'+
            '<div class="form-group">'+
                '<h4>标题对齐方式</h4>'+
            '<label class="checkbox-inline shareTLeft">'+
            '<input type="radio" name="align" checked>左对齐'+
            '</label>'+
            '<label class="checkbox-inline shareTCenter">'+
            '<input type="radio" name="align">居中对齐'+
            '</label>'+
            '<label class="checkbox-inline shareTRight">'+
            '<input type="radio" name="align">右对齐'+
            '</label>'+
            '</div>'+
            '<div class="form-group">'+
            '<h4>描述对齐方式</h4>'+
            '<label class="checkbox-inline shareWLeft">'+
            '<input type="radio" name="align2" checked>左对齐'+
            '</label>'+
            '<label class="checkbox-inline shareWCenter">'+
            '<input type="radio" name="align2">居中对齐'+
            '</label>'+
            '<label class="checkbox-inline shareWRight">'+
            '<input type="radio" name="align2">右对齐'+
            '</label>'+
            '</div>'
            ;



    //把dom添加进来

    $('#content').on('click','.img',function(){
        $('#edit').html(img);
    });
    $('#content').on('click','.banner',function(){
        $('#edit').html(scroll);
    });
    $('#content').on('click','.notice',function(){
        $('#edit').html(word);
    });
    $('#content').on('click','.share',function(){
        $('#edit').html(line);
    });




    //增加选项输入框
    $('#edit').on('click','.plus',function(){
        if($('.upLoad').length<5){
            $('#edit').append($('.upLoad').eq(0).clone());
        }
    });
    //减少选项输入框
    $('#edit').on('click','.minus',function(){
        if($('.upLoad').length>1){
            $('.upLoad').eq(0).remove();
        }
    });
    //增加选项输入框
    $('#edit').on('click','.plus2',function(){
        if($('.upLoad2').length<5){
            $('.disc').before($('.upLoad2').eq(0).clone());
        }
    });
    //减少选项输入框
    $('#edit').on('click','.minus2',function(){
        if($('.upLoad2').length>1){
            $('.upLoad2').eq(0).remove();
        }
    });

    $('.show').on('click','.close2',function(){
        $('.rich').remove();
        $('.trees').empty();

    });

    var temps='<div class="form-group temp" style="display: block;">'+
        '<label>请选择联系人模板</label>'+
        '<select class="form-control" id="tempSel">'+
        '<option class="firstOP">请新建模板</option>'+
        '</select>'+
        '<div class="btnWrap">'+
        '<button class="btn btn-primary pull-left" id="newModel" data-toggle="modal" data-target="#myModal">新增模板</button>'+
        '<a href="change.html" target="_blank" class="btn btn-primary pull-left" id="changeModel" style="margin-left:10px;">修改模板</a>'+
        '<button class="btn btn-primary pull-left" id="comeIn" style="margin-left:10px;">导入模板</button>'+
        '<button class="btn btn-success pull-right" id="update">更新</button>'+
        '</div>'+

        '</div>';


    //节点操作
    var sure=true;
    $('#handIn').on('click',function(){
        $('#content').append(ZONE);
        if($('.trees>div').length==0){
            $('.choose').show();
        }else{
            $('.choose').hide();
        }
        $('.trees').empty().append(temps);
    });
    //移除
    $('.closeLine button').click(function(){
        sure=true;
        $('.space').empty();
        $('.closeLine').hide();

    });
    //添加背景色
    $('.show').on('click','.element',function(){
        $(this).addClass('bg-warning').siblings('.element').removeClass('bg-warning');
        if($('.trees>div').length==0){
            $('.choose').show();
        }else{
            $('.choose').hide();
        }
    });
    //移除
    $('.show').on('click','.close',function(){
        if($('.trees>div').length==0){
            $('.choose').show();
        }else{
            $('.choose').hide();
        }
        $(this).parent().remove();
        $('#edit').empty();
    });

    //模板选项
    $('#subModel').click(function(){
        var modelName=$('#modelName').val();
        $('.firstOP').remove();
        $('#tempSel').append(
            '<option value="">'+
                modelName+
            '</option>'
        );
        //$('#fields').addClass('fieldSure');
        $('#content').append(fieldSS);
    });
    $(document).on('change','#tempsel',function(){
        alert($(this).find('option:selected').index());
    });





    //富文本区域移除
    $('.show').on('click','.close3',function(e){
        e.stopPropagation();
        $(this).parent().parent().remove();
    });


    //选择组件显示隐藏
    if($('.trees>div').length==0){
        $('.choose').show();
    }else{
        $('.choose').hide();
    }

    //联动
    $(document).on('keyup','.picWordI',function(){
        $('.bg-warning .picWordL').text($(this).val());
    });
    $(document).on('click','.imgWLeft',function(){
        $('.bg-warning .picWordL').addClass('text-left').removeClass('text-center').removeClass('text-right');
    });
    $(document).on('click','.imgWCenter',function(){
        $('.bg-warning .picWordL').addClass('text-center').removeClass('text-left').removeClass('text-right');
    });
    $(document).on('click','.imgWRight',function(){
        $('.bg-warning .picWordL').addClass('text-right').removeClass('text-left').removeClass('text-center');
    });

    $(document).on('click','.yesShow',function(){
        $('.bg-warning .carousel-indicators').show();
    });
    $(document).on('click','.noShow',function(){
        $('.bg-warning .carousel-indicators').hide();
    });

    $(document).on('keyup','.shareTitleI',function(){
        $('.bg-warning .shareTitleL').text($(this).val());
    });
    $(document).on('keyup','.shareWordI',function(){
        $('.bg-warning .shareWordL').text($(this).val());
    });
    $(document).on('click','.shareTLeft',function(){
        $('.bg-warning .shareTitleL').addClass('text-left').removeClass('text-center').removeClass('text-right');
    });
    $(document).on('click','.shareTCenter',function(){
        $('.bg-warning .shareTitleL').addClass('text-center').removeClass('text-left').removeClass('text-right');
    });
    $(document).on('click','.shareTRight',function(){
        $('.bg-warning .shareTitleL').addClass('text-right').removeClass('text-left').removeClass('text-center');
    });
    $(document).on('click','.shareWLeft',function(){
        $('.bg-warning .shareWordL').addClass('text-left').removeClass('text-center').removeClass('text-right');
    });
    $(document).on('click','.shareWCenter',function(){
        $('.bg-warning .shareWordL').addClass('text-center').removeClass('text-left').removeClass('text-right');
    });
    $(document).on('click','.shareWRight',function(){
        $('.bg-warning .shareWordL').addClass('text-right').removeClass('text-left').removeClass('text-center');
    });


    //公告方向
    $('.trees').on('click','.xr',function(){
        $('.marqueeClose').after(marquee);
        $('.notice.bg-warning .listNotice').remove();
        $('.bg-warning marquee').attr({
            'direction':'left',
            'scrollamount':'5',
            'scrolldelay':'100',
            'onmouseover':null,
            'onmouseout':null
        });
        $('marquee>div').attr('align','');
        $('.noticeI').eq(0).addClass('appe').siblings('.noticeI').removeClass('appe');
    });
    //切换成垂直滚动
    $('.trees').on('click','.yr',function(){
        $('.notice.bg-warning marquee').remove();
        $('.notice.bg-warning').append(list);

        $('.noticeI').eq(1).addClass('appe').siblings('.noticeI').removeClass('appe');

    });

    //

    //走马灯垂直文本框输入联动
    $(document).on('keyup','.textInput',function(){
        $('.bg-warning marquee>div').text($(this).val());
    });
    var timer=null;
    var timer2=null;
    var yy=0;
    //var divTh=$('.listScroll>div').length;
    $(document).on('keyup','.textarea',function(){
        $('.notice.bg-warning .listScroll').html(
            $('.textarea').html()
        );
        $('.listScroll').contents().filter(function(){ return this.nodeType != 1; }).wrap('<div></div>');
        clearInterval(timer2);
        //clearInterval(timer);

    });
    $(document).on('mouseleave','.textarea',function(){
        autoPlay();
        autoPlay2();
        $(this).blur();
    });

    function autoPlay2(){
        timer2=setInterval(function(){
            yy++;
            if(yy>$('.listScroll>div').length){
                yy=0;
            }
            $('.listScroll').animate({top:-20},1000);
            //*yy

        },2000);
    }

    function autoPlay(){
        timer= setInterval(function(){
            var scDiv=$('.listScroll>div').first();
            $('.listScroll').animate({top:0},0).append(scDiv);
        },1000*$('.listScroll>div').length);
        //
    }

    //走马灯颜色配置
    $(document).on('change','.marqueeFC',function(){
        var FC=$(this).val();
        $('.bg-warning marquee>div').css('color',FC);
        $('.listScroll>div').css('color',FC);
    });
    $(document).on('change','.marqueeBC',function(){
        var BC=$(this).val();
        $('.bg-warning marquee').css('background',BC);
        $('.listScroll>div').css('background',BC);
    });


    //预留区域
    var ZONE='<div class="ZONE">' +
                '<button class="close close3">&times;</button>' +
        '</div>';
    $(document).on('click','.ZONE',function(){
        $('.trees').html(temps);
        $(this).addClass('bg-warning').siblings().removeClass('bg-warning');
    });

    var mi=-1;
    $(document).on('click','#comeIn',function(){
        mi++;
        $('.shut').show();
        $('.space').eq(mi).append(localStorage.getItem("fresh")).append(subBtn);//模板导入
        $('.ZONE').remove();
    });


    //模板导入

    $(document).on('click','#fields',function(){
          $('.trees').html(temps);
    });


    $('.shut .close4').click(function(){
        $(this).parent().append();
        $('.shut').hide();
        $('#fields').empty();
    });

    var subBtn='<button class="btn btn-danger subBtn" disabled>提交</button>';//表单的提交按钮
    //表单提交成功后显示文字
    var toolW='<p class="toolW alert alert-success">' +
        '<a href="#" class="close" data-dismiss="alert">&times;</a>'+
            '<strong class="handOut">恭喜！表单提交成功</strong>'+
        '</p>';
    //文字联动
    $('.subI').keyup(function(){
        $('.subBtn').text($(this).val());
    });
    $('.toolI').keyup(function(){
        $('.handOut').text($(this).val());
    });

    //副文本
    var textEdit='<textarea id="edut"></textarea>';
    //富文本联动
    $('.chosen').on('mousemove',function(){

        $('.bg-warning .richZone').html(($('#edut_ifr').contents().find('#tinymce').html()));
    });

    $('#content').on('click','.richZone',function(){
        $('#edut_ifr').contents().find('#tinymce').html($(this).html());
    });


});

