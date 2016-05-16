/**
 * Created by hg on 2016/5/16.
 */
$(function(){

    var c0='<div class="form-group field nameS">'+
            '<div class="closeLine">'+
            '<button class="close">&times;</button>'+
            '</div>'+
            '<label>姓名</label>'+
            '<input class="form-control" type="text" placeholder="请输入标题" disabled>'+
            '</div>',
        c1='<div class="form-group field telS">'+
            '<div class="closeLine">'+
            '<button class="close">&times;</button>'+
            '</div>'+
            '<label>手机号码</label>'+
            '<input class="form-control" type="tel" placeholder="请输入手机号码" disabled>'+
            '</div>',
        c2='<div class="form-group field companyS">'+
            '<div class="closeLine">'+
            '<button class="close">&times;</button>'+
            '</div>'+
            '<label>公司</label>'+
            '<input class="form-control" type="text" placeholder="请填写您的公司地址" disabled>'+
            '</div>',
        c3='<div class="form-group field sexS">'+
            '<div class="closeLine">'+
            '<button class="close">&times;</button>'+
            '</div>'+
            '<h5>性别选择</h5>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="sex" disabled> 男'+
            '</label>'+
            '<label class="checkbox-inline disabled">'+
            '<input type="radio" name="sex" disabled> 女'+
            '</label>'+
            '</div>',
        c4='<div class="form-group field emailS">'+
            '<div class="closeLine">'+
            '<button class="close">&times;</button>'+
            '</div>'+
            '<label>电子邮件</label>'+
            '<input class="form-control" type="email" placeholder="请输入电子邮件" disabled>'+
            '</div>',
        c5='<div class="form-group field qqS">'+
            '<div class="closeLine">'+
            '<button class="close">&times;</button>'+
            '</div>'+
            '<label>QQ</label>'+
            '<input class="form-control" type="text" placeholder="请填写您的qq" disabled>'+
            '</div>',
        c6='<div class="form-group field wechatS">'+
            '<div class="closeLine">'+
            '<button class="close">&times;</button>'+
            '</div>'+
            '<label>微信</label>'+
            '<input class="form-control" type="text" placeholder="请填写您的qq" disabled>'+
            '</div>',
        c7='<div class="form-group field marryS">'+
             '<div class="closeLine">'+
                '<button class="close">&times;</button>'+
                '</div>'+
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
            '</div>';
    var c=[c0,c1,c2,c3,c4,c5,c6,c7];
    var s0='<div class="checkbox nameE">'+

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
            '</div>',
        s1='<div class="checkbox telE">'+

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
            '</div>',
        s2='<div class="checkbox companyE">'+

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

            '</div>',
        s3='<div class="checkbox sexE">'+

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
            '</div>',
        s4='<div class="checkbox emailE">'+

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
            '</div>',
        s5='<div class="checkbox qqE">'+

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
            '</div>',
        s6='<div class="checkbox wechatE">'+

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
            '</div>',
        s7='<div class="checkbox marryE">'+

            '</div>'+
            '<div class="theCon">'+
            '<div class="form-group">'+
            '<label>单选设置</label>'+
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
            '</div>';
    var s=[s0,s1,s2,s3,s4,s5,s6,s7];
    $('.subForm .btn').click(function(){
        var _index=$(this).index();
        $('.subShow .panel-body').append(c[_index]);
        $('#edits').empty().append(s[_index]);
    });

    $('.subShow').on('click','.close',function(){
        $(this).parent().parent().detach();
    });


});


