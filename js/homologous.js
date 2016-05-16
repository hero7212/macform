
$(function(){
    $('.son').click(function(e){
        e.preventDefault();
    });
    $('#tabs>ul>li').click(function(){
        var _index=$(this).index();
        $('.con').eq(_index).show().siblings('.con').hide();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('#hard').click(function(){
        $('.jsCode').toggle();
    });

    var share='<div class="element share">'+
                '<button class="close">&times;</button>'+
                '<p class="text-black">分割线</p>'+
                '<hr/>'+
                '<p class="text-muted">这里添加你的描述</p>'+
            '</div>'
        ,

        file='<div class="form-group element">'+
                '<button class="close">&times;</button>'+
                '<label>文件上传</label>'+
                '<input class="form-control" type="file" placeholder="请选择文件" disabled>'+
            '</div>',
        picture='<div class="form-group element img">'+
                '<button class="close">&times;</button>'+
                '<label>图片</label>'+
                '<img src="http://www.mikecrm.com/images/icon/formDefaultPicture.png" style="width: 100%;">'+
                '<h6>描述文字</h6>'+
            '</div>',
        banner='<div class="element banner">'+
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

        notice='<div class="element notice">'+

            '<button class="close">&times;</button>'+
            '<marquee class="bg-warning" style="color:#414141;font-size:12px;line-height:17px;" direction="left" height="18" scrollamount="5"   behavior="scroll"       scrolldelay="100" onMouseOver="this.scrollDelay=500" onMouseOut="this.scrollDelay=1" width="100%">'+
        '模板无忧（mb5u.com）专业提供各类编程源代码、电子视频教程、JavaScript/CSS特效代码以及常用软件下载等，做有质量的学习型源码下载站'+
                '</marquee>'+
                '</div>'
                ,
        rich='<div class="element rich">'+
                '<div class="closeLine2">'+
                    '<botton class="close close2">&times;</botton>'+
                '</div>'+
                '<div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor">'+
                    '<div class="btn-group">'+
                        '<a class="btn dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Font"><i class="icon-font"></i><b class="caret"></b></a>'+
                        '<ul class="dropdown-menu">'+
                            '<li><a data-edit="fontName Serif">Serif</a></li>' +
                            '<li><a data-edit="fontName Sans">Sans</a></li>' +
                            '<li><a data-edit="fontName Arial">Arial</a></li>' +
                            '<li><a data-edit="fontName Arial Black">Arial Black</a></li>' +
                            '<li><a data-edit="fontName Courier">Courier</a></li>' +
                            '<li><a data-edit="fontName Courier New">Courier New</a></li>' +
                            '<li><a data-edit="fontName Comic Sans MS">Comic Sans MS</a></li>' +
                            '<li><a data-edit="fontName Helvetica">Helvetica</a></li>' +
                            '<li><a data-edit="fontName Impact">Impact</a></li>' +
                            '<li><a data-edit="fontName Lucida Grande">Lucida Grande</a></li>' +
                            '<li><a data-edit="fontName Lucida Sans">Lucida Sans</a></li>' +
                            '<li><a data-edit="fontName Tahoma">Tahoma</a></li>' +
                            '<li><a data-edit="fontName Times">Times</a></li>' +
                            '<li><a data-edit="fontName Times New Roman">Times New Roman</a></li>' +
                            '<li><a data-edit="fontName Verdana">Verdana</a></li>' +
                        '</ul>'+
                    '</div>'+
                    '<div class="btn-group">'+
                        '<a class="btn dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Font Size"><i class="icon-text-height"></i>&nbsp;<b class="caret"></b></a>'+
                        '<ul class="dropdown-menu">'+
                            '<li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li>'+
                            '<li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li>'+
                            '<li><a data-edit="fontSize 1"><font size="1">Small</font></a></li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="btn-group">'+
                        '<a class="btn" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="icon-bold"></i></a>'+
                        '<a class="btn" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="icon-italic"></i></a>'+
                        '<a class="btn" data-edit="strikethrough" title="" data-original-title="Strikethrough"><i class="icon-strikethrough"></i></a>'+
                        '<a class="btn" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="icon-underline"></i></a>'+
                    '</div>'+
                    '<div class="btn-group">'+
                        '<a class="btn" data-edit="insertunorderedlist" title="" data-original-title="Bullet list"><i class="icon-list-ul"></i></a>'+
                        '<a class="btn" data-edit="insertorderedlist" title="" data-original-title="Number list"><i class="icon-list-ol"></i></a>'+
                        '<a class="btn" data-edit="outdent" title="" data-original-title="Reduce indent (Shift+Tab)"><i class="icon-indent-left"></i></a>'+
                        '<a class="btn" data-edit="indent" title="" data-original-title="Indent (Tab)"><i class="icon-indent-right"></i></a>'+
                    '</div>'+
                    '<div class="btn-group">'+
                        '<a class="btn" data-edit="justifyleft" title="" data-original-title="Align Left (Ctrl/Cmd+L)"><i class="icon-align-left"></i></a>'+
                        '<a class="btn" data-edit="justifycenter" title="" data-original-title="Center (Ctrl/Cmd+E)"><i class="icon-align-center"></i></a>'+
                        '<a class="btn" data-edit="justifyright" title="" data-original-title="Align Right (Ctrl/Cmd+R)"><i class="icon-align-right"></i></a>'+
                        '<a class="btn" data-edit="justifyfull" title="" data-original-title="Justify (Ctrl/Cmd+J)"><i class="icon-align-justify"></i></a>'+
                    '</div>'+
                    '<div class="btn-group">'+
                        '<a class="btn dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="icon-link"></i></a>'+
                        '<div class="dropdown-menu input-append">'+
                            '<input class="span2" placeholder="URL" type="text" data-edit="createLink">'+
                            '<button class="btn" type="button">Add</button>'+
                        '</div>'+
                        '<a class="btn" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="icon-cut"></i></a>'+

                    '</div>'+

                    '<div class="btn-group">'+
                        '<a class="btn" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="icon-picture"></i></a>'+
                            '<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 41px; height: 30px;">'+
                    '</div>'+
                    '<div class="btn-group">'+
                        '<a class="btn" data-edit="undo" title="" data-original-title="Undo (Ctrl/Cmd+Z)"><i class="icon-undo"></i></a>'+
                        '<a class="btn" data-edit="redo" title="" data-original-title="Redo (Ctrl/Cmd+Y)"><i class="icon-repeat"></i></a>'+
                    '</div>'+
                    '<input type="text" data-edit="inserttext" id="voiceBtn" x-webkit-speech="" style="display: none;">'+
                '</div>'+
                '<div id="editor"></div>'+
            '</div>',

        user='<div class="form-group field nameS">'+
                '<button class="close">&times;</button>'+
                '<label>姓名</label>'+
                '<h6>描述文字</h6>'+
                '<input class="form-control" type="text" placeholder="请输入标题" disabled>'+
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


    $('#share').click(function(){
        $('.room').append(share);
    });


    $('#file').click(function(){
        $('.room').append(file);
    });
    $('#picture').click(function(){
        $('.room').append(picture);
    });
    $('#banner').click(function(){
        $('.room').append(banner);
    });

    $('#notice').click(function(){
        $('.room').append(notice);
    });

    $('#user').click(function(){
        $('.room').append(user);
    });
    $('#sex').click(function(){
        $('.room').append(sex);
    });
    $('#email').click(function(){
        $('.room').append(email);
    });


    $('#tel').click(function(){
        $('.room').append(tel);
    });
    $('#company').click(function(){
        $('.room').append(company);
    });
    $('#qq').click(function(){
        $('.room').append(qq);
    });
    $('#wechat').click(function(){
        $('.room').append(wechat);
    });
    $('#marry').click(function(){
        $('.room').append(marry);
    });

    $('#rich').click(function(){
        $('.show').append(rich);
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
                    '<h4>必填设置</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT"> 非必填'+
                    '</label>'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>输入框大小</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 小尺寸'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 标准尺寸'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 大尺寸'+
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
                    '<h4>必填设置</h4>'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="telT"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="telT"> 非必填'+
                    '</label>'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>输入框大小</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 小尺寸'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 标准尺寸'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 大尺寸'+
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
                        '<h4>必填设置</h4>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="companyT"> 必填'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="companyT"> 非必填'+
                        '</label>'+
                    '</div>'+
                    '<div class="form-group">'+
                        '<h4>输入框大小</h4>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="nameT2"> 小尺寸'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="nameT2"> 标准尺寸'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="nameT2"> 大尺寸'+
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
                        '<h4>必填设置</h4>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="emailT"> 必填'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="emailT"> 非必填'+
                        '</label>'+
                    '</div>'+
                    '<div class="form-group">'+
                        '<h4>输入框大小</h4>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="nameT2"> 小尺寸'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="nameT2"> 标准尺寸'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="nameT2"> 大尺寸'+
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
                    '<h4>必填设置</h4>'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="QQT"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="QQT"> 非必填'+
                    '</label>'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>输入框大小</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 小尺寸'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 标准尺寸'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="nameT2"> 大尺寸'+
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
                        '<h4>必填设置</h4>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="wechatT"> 必填'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="wechatT"> 非必填'+
                        '</label>'+
                    '</div>'+
            '</div>',



        sexT='<div class="sexT">'+
                '<div class="form-group">'+
                    '<label>性别</label>'+
                    '<input class="form-control" placeholder="请输入标题">'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>必填设置</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="sex"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="sex"> 非必填'+
                    '</label>'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>排列方式</h4>'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="sex"> 一列'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                    '<input type="radio" name="sex"> 二列'+
                    '</label>'+
                '</div>'+
            '</div>',
        marryT='<div class="marryT">'+
                    '<div class="form-group">'+
                        '<label>婚期</label>'+
                        '<input class="form-control" placeholder="请输入标题">'+
                        '</div>'+
                        '<div class="form-group">'+
                        '<h4>必填设置</h4>'+
                        '<label class="checkbox-inline">'+
                        '<input type="radio" name="sex"> 必填'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                        '<input type="radio" name="sex"> 非必填'+
                        '</label>'+
                    '</div>'+
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
                    '</div>'+
            '</div>',
        img='<div class="form-group">'+
                '<label>描述文字</label>'+
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
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="disc">显示'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="disc">不显示'+
                    '</label>'+
                '</div>'+
            '<div class="form-group dection">'+
                '<h4>轮播方向</h4>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="dection">水平'+
                '</label>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="dection">垂直'+
                '</label>'+
                '</div>'+
            '</div>',
        word='<div class="form-group">'+
                '<h4>效果选择</h4>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="dir">显示'+
                '</label>'+
                '<label class="checkbox-inline">'+
                '<input type="radio" name="dir">不显示'+
                '</label>'+
            '</div>'+
            '<div class="form-group">'+
                '<label>描述文字</label>'+
                '<input class="form-control" placeholder="请输入描述文字">'+
            '</div>'+
            '<div class="form-group">'+
                '<label>字体颜色设置</label>'+
                '<input class="form-control" type="color">'+
            '</div>'+
            '<div class="form-group">'+
                '<label>背景颜色设置</label>'+
                '<input class="form-control" type="color">'+
            '</div>'
        ,

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



    $('#content').on('click','.text',function(){
        $('#edit').html(text);
    });
    $('#content').on('click','.sexT',function(){
        $('#edit').html(sexT);
    });
    $('#content').on('click','.marryT',function(){
        $('#edit').html(marryT);
    });
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
    /*
    var nameTel='<div class="groupT bg-danger">'+
                    nameT+telT+
                '</div>'
        ;
    $('#edit').one('click','.companyT',function(){
        //$(this).remove();
        $('.groupT').append(companyT);
        $('.handIn').append(company);
    });
    $('#edit').one('click','.emailT',function(){
        //$(this).remove();
        $('.groupT').append(emailT);
        $('.handIn').append(email);
    });
    $('#edit').one('click','.qqT',function(){
        $('.groupT').append(qqT);
        $('.handIn').append(qq);
    });
    $('#edit').one('click','.wechatT',function(){
        //$(this).remove();
        $('.groupT').append(wechatT);
        $('.handIn').append(wechat);
    });
    $('#edit').one('click','.sexT',function(){
        $('.groupT').append(sexT);
        $('.handIn').append(sex);
    });
    $('#edit').one('click','.marryT',function(){
        $('.groupT').append(marryT);
        $('.handIn').append(marry);
    });
    */









    $('#edit').on('click','.plus',function(){
        if($('.upLoad').length<5){
            $('#edit').append($('.upLoad').eq(0).clone());
        }
    });
    $('#edit').on('click','.minus',function(){
        if($('.upLoad').length>1){
            $('.upLoad').eq(0).remove();
        }
    });

    $('#edit').on('click','.plus2',function(){
        if($('.upLoad2').length<5){
            $('#edit').append($('.upLoad2').eq(0).clone());
        }
    });
    $('#edit').on('click','.minus2',function(){
        if($('.upLoad2').length>1){
            $('.upLoad2').eq(0).remove();
        }
    });

    $('.show').on('click','.close2',function(){
        $('.rich').remove();
        $('.trees').empty();

    });


    var Html='<div class="checkbox nameE">'+
                '<label>'+
                    '<input type="checkbox"> 姓名'+
                '</label>'+
             '</div>'+
             '<div class="theCon">'+
                '<div class="form-group">'+
                    '<label>姓名</label>'+
                    '<input class="form-control" placeholder="请输入标题">'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>必填设置</h4>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="nameT"> 必填'+
                        '</label>'+
                        '<label class="checkbox-inline">'+
                            '<input type="radio" name="nameT"> 非必填'+
                        '</label>'+
                '</div>'+
             '</div>'+
             '<div class="checkbox telE">'+
                '<label>'+
                    '<input type="checkbox"> 电话号码'+
                '</label>'+
             '</div>'+
             '<div class="theCon">'+
                '<div class="form-group">'+
                    '<label>电话号码</label>'+
                    '<input class="form-control" placeholder="请输入标题">'+
                '</div>'+
                 '<div class="form-group">'+
                    '<h4>必填设置</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="telT"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="telT"> 非必填'+
                    '</label>'+
                 '</div>'+
             '</div>'+
            '<div class="checkbox companyE">'+
                '<label>'+
                    '<input type="checkbox"> 公司名称'+
                '</label>'+
            '</div>'+
            '<div class="theCon">'+
                '<div class="form-group">'+
                '<label>公司名称</label>'+
                '<input class="form-control" placeholder="请输入标题">'+
                '</div>'+

                '<div class="form-group">'+
                    '<h4>必填设置</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="companyT"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="companyT"> 非必填'+
                    '</label>'+
                '</div>'+

            '</div>'+
            '<div class="checkbox sexE">'+
                '<label>'+
                    '<input type="checkbox"> 性别'+
                '</label>'+
            '</div>'+
            '<div class="theCon">'+
                '<div class="form-group">'+
                    '<label>性别</label>'+
                '<input class="form-control" placeholder="请输入标题">'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>必填设置</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="sexT"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="sexT"> 非必填'+
                    '</label>'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>排列方式</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="sexT2"> 一列'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="sexT2"> 二列'+
                    '</label>'+
                '</div>'+
            '</div>'+
            '<div class="checkbox emailE">'+
                '<label>'+
                    '<input type="checkbox"> E-mail'+
                '</label>'+
            '</div>'+
            '<div class="theCon">'+
                '<div class="form-group">;'+
                    '<label>E-mail</label>'+
                    '<input class="form-control" placeholder="请输入标题">'+
                '</div>'+

                '<div class="form-group">'+
                    '<h4>必填设置</h4>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="emailT"> 必填'+
                    '</label>'+
                    '<label class="checkbox-inline">'+
                        '<input type="radio" name="emailT"> 非必填'+
                    '</label>'+
                '</div>'+

            '</div>'+
        '<div class="checkbox qqE">'+
        '<label>'+
        '<input type="checkbox"> qq号'+
        '</label>'+
        '</div>'+
        '<div class="theCon">'+
        '<div class="form-group">'+
        '<label>qq号</label>'+
        '<input class="form-control" placeholder="请输入标题">'+
        '</div>'+
        '<div class="form-group">'+
        '<h4>必填设置</h4>'+
        '<label class="checkbox-inline">'+
        '<input type="radio" name="qqT"> 必填'+
        '</label>'+
        '<label class="checkbox-inline">'+
        '<input type="radio" name="qqT"> 非必填'+
        '</label>'+
        '</div>'+
        '</div>'+
        '<div class="checkbox wechatE">'+
        '<label>'+
        '<input type="checkbox"> 微信号'+
        '</label>'+
        '</div>'+
        '<div class="theCon">'+
        '<div class="form-group">'+
        '<label>微信号</label>'+
        '<input class="form-control" placeholder="请输入标题">'+
        '</div>'+
        '<div class="form-group">'+
        '<h4>必填设置</h4>'+
        '<label class="checkbox-inline">'+
        '<input type="radio" name="wxT"> 必填'+
        '</label>'+
        '<label class="checkbox-inline">'+
        '<input type="radio" name="wxT"> 非必填'+
        '</label>'+
        '</div>'+
        '</div>'+
        '<div class="checkbox marryE">'+
        '<label>'+
        '<input type="checkbox"> 婚期'+
        '</label>'+
        '</div>'+
        '<div class="theCon">'+
        '<div class="form-group">'+
        '<label>婚期</label>'+
        '<input class="form-control" placeholder="请输入标题">'+
        '</div>'+
        '<div class="form-group">'+
        '<h4>必填设置</h4>'+
        '<label class="checkbox-inline">'+
        '<input type="radio" name="marryT"> 必填'+
        '</label>'+
        '<label class="checkbox-inline">'+
        '<input type="radio" name="marryT"> 非必填'+
        '</label>'+
        '</div>'+
        '<div class="form-group cloneWrap">'+
        '<h4>选项设置</h4>'+
        '<p class="mustClone">'+
        '<input type="radio"/>'+
        '<input type="text" class="form-inline"/>'+
        '<i class="glyphicon glyphicon-plus plus3"></i>'+
        '<i class="glyphicon glyphicon-minus minus3"></i>'+
        '</p>'+
        '</div>'+
        '<div class="form-group">'+
        '<h4>排列方式</h4>'+
        '<label class="checkbox-inline">'+
        '<input type="radio" name="marryT2"> 两列'+
        '</label>'+
        '<label class="checkbox-inline dum3">'+
        '<input type="radio" name="marryT2"> 三列'+
        '</label>'+
        '<label class="checkbox-inline dum4">'+
        '<input type="radio" name="marryT2"> 四列'+
        '</label>'+
        '</div>'+
        '</div>'
    ;

    var hand=0;
    var hands=2;
    var sure=true;


    $('#handIn').on('click',function(){
        $('.shut').show();
        $('.temp').show();
        /*$('.trees').empty();
        $('#edit').html(Html);
        $('.nameE input').trigger('click');
        $('.telE input').trigger('click');*/
        /*
        if(sure==true){
            $('.trees').empty();
            $('#edit').html(Html);
            $('.nameE input').trigger('click');
            $('.telE input').trigger('click');
            $('.trees').on('trigger','.nameE input','click');
            $('.trees').on('trigger','.telE input','click');
            sure=false;
            console.log(sure);

        }
        */

    });

    $('.closeLine button').click(function(){
        sure=true;
        console.log(sure);
        $('.space').empty();
        $('.closeLine').hide();
        $('#edit').empty();
    });

    $('.show').on('click','.close',function(){

        $(this).parent().remove();
        $('#edit').empty();

    });

    $('#subModel').click(function(){
        var modelName=$('#modelName').val();
        $('.firstOP').detach();
        $('#tempSel').append(
            '<option>'+
                modelName+
            '</option>'
        );

    });

    $('#save').click(function(){
        alert('保存成功');
    });





});

