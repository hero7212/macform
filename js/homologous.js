/**
 * Created by hg on 2016/5/5.
 */
$(function(){

    var
        checkbox='<div class="form-group field">'+
                    '<button class="close">&times;</button>'+
                    '<h5>多选框</h5>'+
                    '<label class="checkbox-inline">'+
                    '<input type="checkbox" disabled> 体育'+
                    '</label>'+
                    '<label class="checkbox-inline disabled">'+
                    '<input type="checkbox" disabled> 音乐'+
                    '</label>'+
                '</div>',
        radio='<div class="form-group field">'+
                    '<button class="close">&times;</button>'+
                    '<h5>单选框</h5>'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="only" disabled> 男'+
                    '</label>'+
                    '<label class="checkbox-inline disabled">'+
                    '<input type="radio" name="only" disabled> 女'+
                    '</label>'+
            '</div>',
        select='<div class="form-group field">'+
                    '<button class="close">&times;</button>'+
                    '<label>下拉框</label>'+
                    '<select class="form-control" disabled></select>'+
            '</div>',
        date='<div class="form-group field">'+
                '<button class="close">&times;</button>'+
                '<label>日期</label>'+
                '<input class="form-control" type="date" placeholder="请选择日期" disabled>'+
            '</div>',
        time='<div class="form-group field">'+
                '<button class="close">&times;</button>'+
                '<label>时间</label>'+
                '<input class="form-control" type="time" placeholder="请选择时间" disabled>'+
            '</div>',

        share='<div class="field share">'+
                '<button class="close">&times;</button>'+
                '<p class="text-black">分割线</p>'+
                '<hr/>'+
                '<p class="text-muted">这里添加你的描述</p>'+
            '</div>'
        ,



        file='<div class="form-group field">'+
                '<button class="close">&times;</button>'+
                '<label>文件上传</label>'+
                '<input class="form-control" type="file" placeholder="请选择文件" disabled>'+
            '</div>',
        picture='<div class="form-group field img">'+
                '<button class="close">&times;</button>'+
                '<label>图片</label>'+
                '<img src="http://www.mikecrm.com/images/icon/formDefaultPicture.png" style="width: 100%;">'+
                '<h6>描述文字</h6>'+
            '</div>',
        banner='<div class="field banner">'+
                    '<button class="close" style="position: relative;z-index: 999999">&times;</button>'+
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

        notice='<div class="field notice">'+
                '<i class="glyphicon glyphicon-volume-up"></i>'+
            '<button class="close">&times;</button>'+
            '<marquee class="bg-warning" style="color:#414141;font-size:12px;line-height:17px;" direction="left" height="18" scrollamount="5"   behavior="scroll"       scrolldelay="100" onMouseOver="this.scrollDelay=500" onMouseOut="this.scrollDelay=1" width="100%">'+
        '模板无忧（mb5u.com）专业提供各类编程源代码、电子视频教程、JavaScript/CSS特效代码以及常用软件下载等，做有质量的学习型源码下载站'+
                '</marquee>'+
                '</div>'
                ,

        user='<div class="form-group field nameS">'+
                '<button class="close">&times;</button>'+
                '<label>姓名</label>'+
                '<h6>描述文字</h6>'+
                '<input class="form-control" type="text" placeholder="请输入姓名" disabled>'+
            '</div>',
        email='<div class="form-group field emailS">'+
                '<button class="close">&times;</button>'+
                '<label>电子邮件</label>'+
                '<h6>描述文字</h6>'+
                '<input class="form-control" type="email" placeholder="请输入电子邮件" disabled>'+
            '</div>',

        tel='<div class="form-group field telS">'+
            '<button class="close">&times;</button>'+
            '<label>手机号码</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="tel" placeholder="请输入手机号码" disabled>'+
            '</div>',
        company='<div class="form-group field companyS">'+
                '<button class="close">&times;</button>'+
                '<label>公司</label>'+
                '<h6>描述文字</h6>'+
                '<input class="form-control" type="text" placeholder="请填写您的公司地址" disabled>'+
            '</div>',
        sex='<div class="form-group field sexS">'+
            '<button class="close">&times;</button>'+
            '<h5>性别选择</h5>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="sex" disabled> 男'+
            '</label>'+
            '<label class="checkbox-inline disabled">'+
            '<input type="radio" name="sex" disabled> 女'+
            '</label>'+
            '</div>',
        qq='<div class="form-group field qqS">'+
            '<button class="close">&times;</button>'+
            '<label>QQ</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请填写您的qq" disabled>'+
            '</div>',
        wechat='<div class="form-group field wechatS">'+
            '<button class="close">&times;</button>'+
            '<label>微信</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请填写您的qq" disabled>'+
            '</div>',
        marry='<div class="form-group field marryS">'+
                '<button class="close">&times;</button>'+
                '<h5>婚期选择</h5>'+
                '<div class="wrap">'+
                    '<div class="col-md-6 text-center">'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="marry" disabled>1个月内'+
                        '</label>'+
                    '</div>'+
                    '<div class="col-md-6 text-center">'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="marry" disabled>1个月内'+
                        '</label>'+
                    '</div>'+
                    '<div class="col-md-6 text-center">'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="marry" disabled>1个月内'+
                        '</label>'+
                    '</div>'+
                    '<div class="col-md-6 text-center">'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="marry" disabled>1个月内'+
                        '</label>'+
                    '</div>'+
                '</div>'+
            '</div>'

        ;

    //var summit='<button class="btn btn-success">提交</button>';
    var handIn='<div class="handIn field bg-warning">'+
        user+tel+
        '</div>'
        ;

    $('#handIn').click(function(){
        $('#fields').append(handIn);
        $('.con .hide').removeClass('hide');
        $('#edit').html(nameTel+companyT+sexT+emailT+qqT+wechatT+marryT);

    });


    $('#checkbox').click(function(){
        $('#fields').append(checkbox);
    });
    $('#radio').click(function(){
        $('#fields').append(radio);
    });
    $('#select').click(function(){
        $('#fields').append(select);
    });
    $('#date').click(function(){
        $('#fields').append(date);
    });
    $('#time').click(function(){
        $('#fields').append(time);
    });

    $('#share').click(function(){
        $('#fields').append(share);
    });


    $('#file').click(function(){
        $('#fields').append(file);
    });
    $('#picture').click(function(){
        $('#fields').append(picture);
    });
    $('#banner').click(function(){
        $('#fields').append(banner);
    });

    $('#notice').click(function(){
        $('#fields').append(notice);
    });

    $('#user').click(function(){
        $('#fields').append(user);
    });
    $('#sex').click(function(){
        $('#fields').append(sex);
    });
    $('#email').click(function(){
        $('#fields').append(email);
    });


    $('#tel').click(function(){
        $('#fields').append(tel);
    });
    $('#company').click(function(){
        $('#fields').append(company);
    });
    $('#qq').click(function(){
        $('#fields').append(qq);
    });
    $('#wechat').click(function(){
        $('#fields').append(wechat);
    });
    $('#marry').click(function(){
        $('#fields').append(marry);
    });

    $('.son').click(function(e){
        e.preventDefault();
    });
    $('#tabs>ul>li').click(function(){
        var _index=$(this).index();
        $('.con').eq(_index).show().siblings('.con').hide();
        $(this).addClass('active').siblings().removeClass('active');
    });


    $('#fields').on('click','.form-group',function(){
        $(this).addClass('bg-warning').siblings('.form-group').removeClass('bg-warning');
        $('.con').eq(3).show().siblings('.con').hide();
        $('#tabs>ul>li').eq(3).addClass('active').siblings().removeClass('active');
        $('.choose').hide();
    });

    $('#fields').on('mouseenter','.form-group',function() {
        $(this).find('.close').toggle();

    });
    $('#fields').on('click','.close',function(){
        $(this).parent().remove();
        return false;
    });



    var nameT='<div class="nameT">'+
                '<div class="form-group">'+
                    '<label>姓名</label>'+
                    '<input class="form-control" placeholder="请输入姓名">'+
                '</div>'+
                '<div class="form-group">'+
                    '<label>描述文字</label>'+
                    '<input class="form-control" placeholder="请输入描述文字">'+
                '</div>'+
                '<div class="form-group">'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT"> 非必填'+
                    '</label>'+
                '</div>'+
            '</div>',
        telT='<div class="telT">'+
            '<div class="form-group">'+
            '<label>手机号码</label>'+
            '<input class="form-control" placeholder="请输入标题">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>描述文字</label>'+
            '<input class="form-control" placeholder="请输入描述文字">'+
            '</div>'+
            '<div class="form-group">'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="telT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="telT"> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        companyT='<div class="companyT">'+
            '<div class="form-group">'+
            '<label>公司</label>'+
            '<input class="form-control" placeholder="请输入标题">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>描述文字</label>'+
            '<input class="form-control" placeholder="请输入描述文字">'+
            '</div>'+
            '<div class="form-group">'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="companyT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="companyT"> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        emailT='<div class="emailT">'+
            '<div class="form-group">'+
            '<label>电子邮件</label>'+
            '<input class="form-control" placeholder="请输入标题">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>描述文字</label>'+
            '<input class="form-control" placeholder="请输入描述文字">'+
            '</div>'+
            '<div class="form-group">'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="emailT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="emailT"> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        qqT='<div class="qqT">'+
            '<div class="form-group">'+
            '<label>QQ</label>'+
            '<input class="form-control" placeholder="请输入标题">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>描述文字</label>'+
            '<input class="form-control" placeholder="请输入描述文字">'+
            '</div>'+
            '<div class="form-group">'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="QQT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="QQT"> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        wechatT='<div class="wechatT">'+
            '<div class="form-group">'+
            '<label>微信</label>'+
            '<input class="form-control" placeholder="请输入标题">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>描述文字</label>'+
            '<input class="form-control" placeholder="请输入描述文字">'+
            '</div>'+
            '<div class="form-group">'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="wechatT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="wechatT"> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',



        sexT='<div class="sexT">'+
                '<h5 style="font-weight: bolder">性别</h5>'+
                '<div class="form-group">'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="sex"> 男'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="sex"> 女'+
                    '</label>'+
                '</div>'+
            '</div>',
        marryT='<div class="marryT">'+
                '<h5 style="font-weight: bolder">婚期</h5>'+
            '<div class="form-group">'+
                '<h4>排列方式</h4>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="marry"> 一列'+
                '</label>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="marry"> 两列'+
                '</label>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="marry"> 三列'+
                '</label>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="marry"> 四列'+
                '</label>'+
                '<h4 style="margin-top: 40px;">添加选项（最多添加4个）</h4>'+
                '<input class="form-control" placeholder="请输入选项名称">'+
            '</div>'+
            '</div>',
        img='<div class="form-group">'+
                '<label>图片描述</label>'+
                '<input class="form-control" placeholder="请输入对图片的描述">'+
            '</div>'+
            '<div class="form-group">'+
                '<h5>请选择描述文字对齐方式</h5>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="lign">左对齐'+
                '</label>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="lign">居中对齐'+
                '</label>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="lign">右对齐'+
                '</label>'+
            '</div>'+
            '<div class="form-group">'+
                '<label>上传图片</label>'+
                '<input class="form-control" type="file" placeholder="">'+
            '</div>',
        scroll='<div class="form-group">'+
                '<h5>请选择上传的图片（最多五张）</h5>'+
                '<label>上传图片</label>'+
                '<input class="form-control" type="file" placeholder="">'+

            '</div>',
        word='<div class="form-group">'+
            '<label>描述文字</label>'+
            '<input class="form-control" placeholder="请输入描述文字">'+
            '</div>',
        line='<div class="form-group">'+
            '<label>标题</label>'+
            '<input class="form-control" placeholder="请输入标题">'+
            '</div>'+
            '<div class="form-group">'+
            '<label>描述文字</label>'+
            '<input class="form-control" placeholder="请输入描述文字">'+
            '</div>'+
            '<div class="form-group">'+
                '<h4>标题对齐方式</h4>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="align">左对齐'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="align">居中对齐'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="align">右对齐'+
            '</label>'+
            '</div>'+
            '<div class="form-group">'+
            '<h4>描述对齐方式</h4>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="align2">左对齐'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="align2">居中对齐'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="align2">右对齐'+
            '</label>'+
            '</div>'
        ;
    



    $('#fields').on('click','.text',function(){
        $('#edit').html(text);
    });
    $('#fields').on('click','.sexT',function(){
        $('#edit').html(sexT);
    });
    $('#fields').on('click','.marryT',function(){
        $('#edit').html(marryT);
    });
    $('#fields').on('click','.img',function(){
        $('#edit').html(img);
    });
    $('#fields').on('click','.banner',function(){
        $('#edit').html(scroll);
    });
    $('#fields').on('click','.notice',function(){
        $('#edit').html(word);
    });
    $('#fields').on('click','.share',function(){
        $('#edit').html(line);
    });

    var nameTel='<div class="groupT bg-danger">'+
                    nameT+telT+
                '</div>'
        ;
    $('#edit').on('click','.companyT',function(){
        $(this).remove();
        $('.groupT').append(companyT);
        $('.handIn').append(company);
    });
    $('#edit').on('click','.emailT',function(){
        $(this).remove();
        $('.groupT').append(emailT);
        $('.handIn').append(email);
    });
    $('#edit').on('click','.qqT',function(){
        $(this).remove();
        $('.groupT').append(qqT);
        $('.handIn').append(qq);
    });
    $('#edit').on('click','.wechatT',function(){
        $(this).remove();
        $('.groupT').append(wechatT);
        $('.handIn').append(wechat);
    });
    $('#edit').on('click','.sexT',function(){
        $(this).remove();
        $('.groupT').append(sexT);
        $('.handIn').append(sex);
    });


    $('.show').on('mouseenter','.nameS',function(){
        $(this).find('.close').click(function(){
            $('.groupT .nameT').remove();
            //$('#edit').append(nameT);
        });
    });
    $('.show').on('mouseenter','.telS',function(){
        $(this).find('.close').click(function(){
            $('.groupT .telT').remove();
            //$('#edit').append(telT);
        });
    });
    $('.show').on('mouseenter','.companyS',function(){
        $(this).find('.close').click(function(){
            $('.groupT .companyT').remove();
            //$('#edit').append(companyT);
        });
    });
    $('.show').on('mouseenter','.emailS',function(){
        $(this).find('.close').click(function(e){
            $('.groupT .emailT').remove();
            //$('#edit').append(emailT);
        });
    });
    $('.show').on('mouseenter','.qqS',function(){
        $(this).find('.close').click(function(){
            $('.groupT .qqT').remove();
            //$('#edit').append(qqT);
        });
    });
    $('.show').on('mouseenter','.wechatS',function(){
        $(this).find('.close').click(function(){
            $('.groupT .wechatT').remove();
            //$('#edit').append(wechatT);
        });
    });
    $('.show').on('mouseenter','.sexS',function(){
        $(this).find('.close').click(function(){
            $('.groupT .sexT').remove();
            //$('#edit').append(wechatT);
        });
    });






});

