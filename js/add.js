/**
 * Created by hg on 2016/5/16.
 */
$(function(){

    var c0='<div class="form-group field nameS">'+
            '<div class="closeLine">'+
            '<button class="close close3">&times;</button>'+
            '</div>'+
            '<label class="nameL timu ne0">姓名</label>'+
            '<input class="form-control" type="text" readonly="readonly">'+
            '</div>',
        c1='<div class="form-group field telS">'+
            '<div class="closeLine">'+
            '<button class="close close3">&times;</button>'+
            '</div>'+
            '<label class="telL timu ne1">电话号码</label>'+
            '<input class="form-control" type="tel" readonly="readonly">'+
            '</div>',
        c2='<div class="form-group field companyS">'+
            '<div class="closeLine">'+
            '<button class="close close3">&times;</button>'+
            '</div>'+
            '<label class="companyL timu ne2">公司名称</label>'+
            '<input class="form-control" type="text" readonly="readonly">'+
            '</div>',
        c3='<div class="form-group field sexS">'+
            '<div class="closeLine">'+
            '<button class="close close3">&times;</button>'+
            '</div>'+
            '<h5 class="sexL timu ne3">性别选择</h5>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="sex" readonly="readonly"> 男'+
            '</label>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="sex" readonly="readonly"> 女'+
            '</label>'+
            '</div>',
        c4='<div class="form-group field emailS">'+
            '<div class="closeLine">'+
            '<button class="close close3">&times;</button>'+
            '</div>'+
            '<label class="emailL timu ne4">E-mail</label>'+
            '<input class="form-control" type="email" readonly="readonly">'+
            '</div>',
        c5='<div class="form-group field qqS">'+
            '<div class="closeLine">'+
            '<button class="close close3">&times;</button>'+
            '</div>'+
            '<label class="qqL timu ne5">QQ号码</label>'+
            '<input class="form-control" type="text" readonly="readonly">'+
            '</div>',
        c6='<div class="form-group field wechatS">'+
            '<div class="closeLine">'+
            '<button class="close close3">&times;</button>'+
            '</div>'+
            '<label class="wechatL timu ne6">微信号码</label>'+
            '<input class="form-control" type="text" readonly="readonly">'+
            '</div>',
        c7='<div class="form-group field marryS">'+
             '<div class="closeLine">'+
                '<button class="close close3">&times;</button>'+
                '</div>'+
            '<h5 class="marryL timu ne7">单选设置</h5>'+
            '<div class="wrap">'+
            '<div class="col-md-6 text-left mard mar4">'+
            '<label class="checkbox-inline ">'+
            '<input type="radio" name="marry" class="" readonly="readonly"><span>选项</span>'+
            '</label>'+
            '</div>'+
            '<div class="col-md-6 text-left mard mar4">'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="marry" class="" readonly="readonly"><span>选项</span>'+
            '</label>'+
            '</div>'+
            '<div class="col-md-6 text-left mard mar4">'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="marry" class="" readonly="readonly"><span>选项</span>'+
            '</label>'+
            '</div>'+
            '<div class="col-md-6 text-left mard mar4">'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="marry" class="" readonly="readonly"><span>选项</span>'+
            '</label>'+
            '</div>'+
            '</div>'+
            '</div>';
    var c=[c0,c1,c2,c3,c4,c5,c6,c7];
    var s0='<div class="checkbox nameE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>姓名</label>'+
            '<input class="form-control nameI" value="姓名">'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>必填设置</h5>'+
            '<label class="checkbox-inline re0">'+
            '<input type="radio" name="nameT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline un0">'+
            '<input type="radio" name="nameT" checked> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        s1='<div class="checkbox telE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>电话号码</label>'+
            '<input class="form-control telI" value="电话号码">'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>必填设置</h5>'+
            '<label class="checkbox-inline re1">'+
            '<input type="radio" name="telT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline un1">'+
            '<input type="radio" name="telT" checked> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        s2='<div class="checkbox companyE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>公司名称</label>'+
            '<input class="form-control companyI" value="公司名称">'+
            '</div>'+

            '<div class="form-group">'+
            '<h5>必填设置</h5>'+
            '<label class="checkbox-inline re2">'+
            '<input type="radio" name="companyT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline un2">'+
            '<input type="radio" name="companyT" checked> 非必填'+
            '</label>'+
            '</div>'+

            '</div>',
        s3='<div class="checkbox sexE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>性别选择</label>'+
            '<input class="form-control sexI" value="性别选择">'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>必填设置</h5>'+
            '<label class="checkbox-inline re3">'+
            '<input type="radio" name="sexT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline un3">'+
            '<input type="radio" name="sexT" checked> 非必填'+
            '</label>'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>排列方式</h5>'+
            '<label class="checkbox-inline clu1">'+
            '<input type="radio" name="sexT2" checked> 二列'+
            '</label>'+
            '<label class="checkbox-inline clu2">'+
            '<input type="radio" name="sexT2"> 一列'+
            '</label>'+
            '</div>'+
            '</div>',
        s4='<div class="checkbox emailE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>E-mail</label>'+
            '<input class="form-control emailI" value="E-mail">'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>必填设置</h5>'+
            '<label class="checkbox-inline re4">'+
            '<input type="radio" name="emailT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline un4">'+
            '<input type="radio" name="emailT" checked> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        s5='<div class="checkbox qqE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>QQ号码</label>'+
            '<input class="form-control qqI" value="QQ号码">'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>必填设置</h5>'+
            '<label class="checkbox-inline re5">'+
            '<input type="radio" name="qqT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline un5">'+
            '<input type="radio" name="qqT" checked> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        s6='<div class="checkbox wechatE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>微信号码</label>'+
            '<input class="form-control wechatI" value="微信号码">'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>必填设置</h5>'+
            '<label class="checkbox-inline re6">'+
            '<input type="radio" name="wxT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline un6">'+
            '<input type="radio" name="wxT" checked> 非必填'+
            '</label>'+
            '</div>'+
            '</div>',
        s7='<div class="checkbox marryE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>单选设置</label>'+
            '<input class="form-control marryI" value="单选设置">'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>必填设置</h5>'+
            '<label class="checkbox-inline re7">'+
            '<input type="radio" name="marryT"> 必填'+
            '</label>'+
            '<label class="checkbox-inline un7">'+
            '<input type="radio" name="marryT" checked> 非必填'+
            '</label>'+
            '</div>'+
            '<div class="form-group cloneWrap">'+
            '<h5>选项设置</h5>'+
            '<p class="mustClone">'+

            '<input type="text" class="form-inline" maxlength="10" value="选项"/>'+
            '<i class="glyphicon glyphicon-plus plus3"></i>'+
            '<i class="glyphicon glyphicon-minus minus3"></i>'+
            '</p>'+
            '<p class="mustClone">'+

            '<input type="text" class="form-inline" maxlength="10" value="选项"/>'+
            '<i class="glyphicon glyphicon-plus plus3"></i>'+
            '<i class="glyphicon glyphicon-minus minus3"></i>'+
            '</p>'+
            '<p class="mustClone">'+

            '<input type="text" class="form-inline" maxlength="10" value="选项"/>'+
            '<i class="glyphicon glyphicon-plus plus3"></i>'+
            '<i class="glyphicon glyphicon-minus minus3"></i>'+
            '</p>'+
            '<p class="mustClone">'+

            '<input type="text" class="form-inline" maxlength="10" value="选项"/>'+
            '<i class="glyphicon glyphicon-plus plus3"></i>'+
            '<i class="glyphicon glyphicon-minus minus3"></i>'+
            '</p>'+
            '</div>'+
            '<div class="form-group">'+
            '<h5>排列方式</h5>'+
            '<label class="checkbox-inline dum2">'+
            '<input type="radio" name="marryT2" checked> 两列'+
            '</label>'+
            '<label class="checkbox-inline dum3">'+
            '<input type="radio" name="marryT2"> 三列'+
            '</label>'+
            '<label class="checkbox-inline dum4">'+
            '<input type="radio" name="marryT2"> 四列'+
            '</label>'+
            '</div>'+
            '</div>';
    var s=[s0,s1,s2,s3,s4,s5,s6,s7];
    $('.subForm .btn').click(function(){
        var _index=$(this).index();//获得索引
        $(this).attr('disabled','disabled');//不让按钮点击
        $('.subShow .panel-body').append(c[_index]);//添加dom
        $('#edits').empty().append(s[_index]);//添加dom
    });

    $('.subShow').on('click','.close',function(){
        $(this).parent().parent().detach();//移除父元素
    });

    //使按钮可以点击
    $('.subShow').on('click','.nameS .close',function(){
        $('.subForm .btn').eq(0).attr('disabled',null);
    });
    $('.subShow').on('click','.telS .close',function(){
        $('.subForm .btn').eq(1).attr('disabled',null);
    });
    $('.subShow').on('click','.companyS .close',function(){
        $('.subForm .btn').eq(2).attr('disabled',null);
    });
    $('.subShow').on('click','.sexS .close',function(){
        $('.subForm .btn').eq(3).attr('disabled',null);
    });
    $('.subShow').on('click','.emailS .close',function(){
        $('.subForm .btn').eq(4).attr('disabled',null);
    });
    $('.subShow').on('click','.qqS .close',function(){
        $('.subForm .btn').eq(5).attr('disabled',null);
    });
    $('.subShow').on('click','.wechatS .close',function(){
        $('.subForm .btn').eq(6).attr('disabled',null);
    });
    $('.subShow').on('click','.marryS .close',function(){
        $('.subForm .btn').eq(7).attr('disabled',null);
    });

    //联动
    $(document).on('keyup','.nameI',function(){
        $('.nameL').text($(this).val());
    });
    $(document).on('keyup','.telI',function(){
        $('.telL').text($(this).val());
    });
    $(document).on('keyup','.companyI',function(){
        $('.companyL').text($(this).val());
    });
    $(document).on('keyup','.sexI',function(){
        $('.sexL').text($(this).val());
    });
    $(document).on('keyup','.emailI',function(){
        $('.emailL').text($(this).val());
    });
    $(document).on('keyup','.qqI',function(){
        $('.qqL').text($(this).val());
    });
    $(document).on('keyup','.wechatI',function(){
        $('.wechatL').text($(this).val());
    });
    $(document).on('keyup','.marryI',function(){
        $('.marryL').text($(this).val());
    });

    //改变输入框排列方式
    $(document).on('click','.clu1',function(){
        $('.sexS label').removeClass('block').addClass('checkbox-inline');
    });
    $(document).on('click','.clu2',function(){
        $('.sexS label').addClass('block').removeClass('checkbox-inline');
    });

    //输入框数量控制
    var mustClone='<p class="mustClone">' +
            '<input type="text" class="form-inline" maxlength="10" value="选项">' +
            '<i class="glyphicon glyphicon-plus plus3"></i>' +
            '<i class="glyphicon glyphicon-minus minus3"></i>' +
        '</p>';
    var mard='<div class="col-md-6 text-left mard mar4">' +
                '<label class="checkbox-inline ">' +
                    '<input type="radio" name="marry" class="" readonly="readonly">' +
                '<span>选项</span>' +
            '</label>' +
        '</div>';

    $(document).on('click','.minus3',function(){//减少输入框

        if($('.mustClone').length>1){
            $(this).parent().remove();
            $('.mard').eq(0).remove();
        }
        if($('.mustClone').length<2){
            $('.dum4').hide();
            $('.dum3').hide();
            $('.dum2').hide();
        }
        if($('.mustClone').length<3){
            $('.dum4').hide();
            $('.dum3').hide();
        }
        if($('.mustClone').length<4){
            $('.dum4').hide();
        }

        $('.mard').eq(0).find('span').text($('.mustClone').eq(0).find('input').val());
        $('.mard').eq(1).find('span').text($('.mustClone').eq(1).find('input').val());
        $('.mard').eq(2).find('span').text($('.mustClone').eq(2).find('input').val());
        $('.mard').eq(3).find('span').text($('.mustClone').eq(3).find('input').val());

    });
    $(document).on('click','.plus3',function(){//增加输入框

        if($('.mustClone').length<4){
            $('.cloneWrap').append(mustClone);
            $('.wrap').append(mard);
        }
        if($('.mustClone').length>3){
            $('.dum4').show();
        }
        if($('.mustClone').length>2){
            $('.dum3').show();
        }
        if($('.mustClone').length>1){
            $('.dum2').show();
        }
    });

    //输入框联动
    $(document).on('mouseenter','.mustClone',function(){
        $('.mustClone').eq(0).find('input').keyup(function(){
            $('.mard').eq(0).find('span').text($('.mustClone').eq(0).find('input').val());
        });
        $('.mustClone').eq(1).find('input').keyup(function(){
            $('.mard').eq(1).find('span').text($('.mustClone').eq(1).find('input').val());
        });
        $('.mustClone').eq(2).find('input').keyup(function(){
            $('.mard').eq(2).find('span').text($('.mustClone').eq(2).find('input').val());
        });
        $('.mustClone').eq(3).find('input').keyup(function(){
            $('.mard').eq(3).find('span').text($('.mustClone').eq(3).find('input').val());
        });
    });
    //单选按钮排列方式
    $(document).on('click','.dum2',function(){
        $('.wrap>.text-left').addClass('col-md-6').removeClass('col-md-3').removeClass('col-md-4');
        $('.wrap>.text-left label').addClass('checkbox-inline').removeClass('likeH');
    });
    $(document).on('click','.dum3',function(){
        $('.wrap>.text-left').addClass('col-md-4').removeClass('col-md-3').removeClass('col-md-6');
        $('.wrap>.text-left label').addClass('checkbox-inline').removeClass('likeH');
    });
    $(document).on('click','.dum4',function(){
        $('.wrap>.text-left').addClass('col-md-3').removeClass('col-md-6').removeClass('col-md-4');
        $('.wrap>.text-left label').removeClass('checkbox-inline').addClass('likeH');
    });

    //点击表单预览内容进行编辑
    $(document).on('click','.nameS',function(){
        $('#edits').empty().append(s0);
    });
    $(document).on('click','.telS',function(){
        $('#edits').empty().append(s1);
    });
    $(document).on('click','.companyS',function(){
        $('#edits').empty().append(s2);
    });
    $(document).on('click','.sexS',function(){
        $('#edits').empty().append(s3);
    });
    $(document).on('click','.emailS',function(){
        $('#edits').empty().append(s4);
    });
    $(document).on('click','.qqS',function(){
        $('#edits').empty().append(s5);
    });
    $(document).on('click','.wechatS',function(){
        $('#edits').empty().append(s6);
    });
    $(document).on('click','.marryS',function(){
        $('#edits').empty().append(s7);
    });

    $(document).on('click','.close',function(e){
        e.stopPropagation();
        $('#edits').empty();
    });

    //选项加*号
    var quire='<span class=error>&nbsp;*</span>';

    $(document).on('click','.re0',function(){
        $('.ne0').append(quire);
    });
    $(document).on('click','.re1',function(){
        $('.ne1').append(quire);
    });
    $(document).on('click','.re2',function(){
        $('.ne2').append(quire);
    });
    $(document).on('click','.re3',function(){
        $('.ne3').append(quire);
    });
    $(document).on('click','.re4',function(){
        $('.ne4').append(quire);
    });
    $(document).on('click','.re5',function(){
        $('.ne5').append(quire);
    });
    $(document).on('click','.re6',function(){
        $('.ne6').append(quire);
    });
    $(document).on('click','.re7',function(){
        $('.ne7').append(quire);
    });
    $(document).on('click','.un0',function(){
        $('.ne0 span').remove();
    });
    $(document).on('click','.un1',function(){
        $('.ne1 span').remove();
    });
    $(document).on('click','.un2',function(){
        $('.ne2 span').remove();
    });
    $(document).on('click','.un3',function(){
        $('.ne3 span').remove();
    });
    $(document).on('click','.un4',function(){
        $('.ne4 span').remove();
    });
    $(document).on('click','.un5',function(){
        $('.ne5 span').remove();
    });
    $(document).on('click','.un6',function(){
        $('.ne6 span').remove();
    });
    $(document).on('click','.un7',function(){
        $('.ne7 span').remove();
    });




});


