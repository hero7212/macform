/**
 * Created by hg on 2016/5/10.
 */
$(function(){
    var c0='<div class="form-group field nameS">'+
            '<button class="close">&times;</button>'+
            '<label>姓名</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请输入标题" disabled>'+
            '</div>',
        c1='<div class="form-group field telS">'+
            '<button class="close">&times;</button>'+
            '<label>手机号码</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="tel" placeholder="请输入手机号码" disabled>'+
            '</div>',
        c2='<div class="form-group field companyS">'+
            '<button class="close">&times;</button>'+
            '<label>公司</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请填写您的公司地址" disabled>'+
            '</div>',
        c3='<div class="form-group field sexS">'+
            '<button class="close">&times;</button>'+
            '<h5>性别选择</h5>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="sex" disabled> 男'+
            '</label>'+
            '<label class="checkbox-inline disabled">'+
            '<input type="radio" name="sex" disabled> 女'+
            '</label>'+
            '</div>',
        c4='<div class="form-group field emailS">'+
            '<button class="close">&times;</button>'+
            '<label>电子邮件</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="email" placeholder="请输入电子邮件" disabled>'+
            '</div>',
        c5='<div class="form-group field qqS">'+
            '<button class="close">&times;</button>'+
            '<label>QQ</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请填写您的qq" disabled>'+
            '</div>',
        c6='<div class="form-group field wechatS">'+
            '<button class="close">&times;</button>'+
            '<label>微信</label>'+
            '<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请填写您的qq" disabled>'+
            '</div>',
        c7='<div class="form-group field marryS">'+
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
            '</div>';


    var c=[c0,c1,c2,c3,c4,c5,c6,c7];
    $('.trees').on('click','.checkbox',function(e){
        var _index=$(this).index();
        if(_index>1){
            _index=_index/2;
        }
        $(this).next('.theCon').toggle();
        $('.space').append(c[_index]);
    });

    var Html=$('#edit').html();

    $('#handIn').click(function(){
        $('#edit').html(Html);
    })





});



