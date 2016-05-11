/**
 * Created by hg on 2016/5/10.
 */
$(function(){

    var c0='<div class="form-group field nameS">'+
            //'<button class="close">&times;</button>'+
            '<label>姓名</label>'+
            //'<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请输入标题" disabled>'+
            '</div>',
        c1='<div class="form-group field telS">'+
            //'<button class="close">&times;</button>'+
            '<label>手机号码</label>'+
            //'<h6>描述文字</h6>'+
            '<input class="form-control" type="tel" placeholder="请输入手机号码" disabled>'+
            '</div>',
        c2='<div class="form-group field companyS">'+
            //'<button class="close">&times;</button>'+
            '<label>公司</label>'+
            //'<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请填写您的公司地址" disabled>'+
            '</div>',
        c3='<div class="form-group field sexS">'+
            //'<button class="close">&times;</button>'+
            '<h5>性别选择</h5>'+
            '<label class="checkbox-inline">'+
            '<input type="radio" name="sex" disabled> 男'+
            '</label>'+
            '<label class="checkbox-inline disabled">'+
            '<input type="radio" name="sex" disabled> 女'+
            '</label>'+
            '</div>',
        c4='<div class="form-group field emailS">'+
            //'<button class="close">&times;</button>'+
            '<label>电子邮件</label>'+
            //'<h6>描述文字</h6>'+
            '<input class="form-control" type="email" placeholder="请输入电子邮件" disabled>'+
            '</div>',
        c5='<div class="form-group field qqS">'+
            //'<button class="close">&times;</button>'+
            '<label>QQ</label>'+
            //'<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请填写您的qq" disabled>'+
            '</div>',
        c6='<div class="form-group field wechatS">'+
            //'<button class="close">&times;</button>'+
            '<label>微信</label>'+
            //'<h6>描述文字</h6>'+
            '<input class="form-control" type="text" placeholder="请填写您的qq" disabled>'+
            '</div>',
        c7='<div class="form-group field marryS">'+
            //'<button class="close">&times;</button>'+
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

    /*
    var c=[c0,c1,c2,c3,c4,c5,c6,c7];
    */

    $('.trees').on('click','.checkbox',function(e){
        $('.closeLine').show();
        $(this).next('.theCon').toggle();
        /*
        var _index=$(this).index();
        if(_index>1){
            _index=_index/2;
        }

        $(this).find('input[type=checkbox]:checked').click(function(){
            $('.space').remove(c[_index]);
        });
        $('.space').append(c[_index]);
        */
    });
    $('.closeLine button').click(function(){
        $('.space').empty();
        $('.closeLine').hide();
        $('#edit').html(Html);
    });

    var n0=2;
    $('.trees').on('click','.nameE',function(){
        n0++;
        if(n0%2!=0){
            $('.space').append(c0);
        }else{
            $('.nameS').remove();
        }
    });
    var n1=2;
    $('.trees').on('click','.telE',function(){
        n1++;
        if(n1%2!=0){
            $('.space').append(c1);
        }else{
            $('.telS').remove();
        }
    });
    var n2=2;
    $('.trees').on('click','.companyE',function(){
        n2++;
        if(n2%2!=0){
            $('.space').append(c2);
        }else{
            $('.companyS').remove();
        }
    });
    var n3=2;
    $('.trees').on('click','.sexE',function(){
        n3++;
        if(n3%2!=0){
            $('.space').append(c3);
        }else{
            $('.sexS').remove();
        }
    });
    var n4=2;
    $('.trees').on('click','.emailE',function(){
        n4++;
        if(n4%2!=0){
            $('.space').append(c4);
        }else{
            $('.emailS').remove();
        }
    });
    var n5=2;
    $('.trees').on('click','.qqE',function(){
        n5++;
        if(n5%2!=0){
            $('.space').append(c5);
        }else{
            $('.qqS').remove();
        }
    });
    var n6=2;
    $('.trees').on('click','.wechatE',function(){
        n6++;
        if(n6%2!=0){
            $('.space').append(c6);
        }else{
            $('.wechatS').remove();
        }
    });
    var n7=2;
    $('.trees').on('click','.marryE',function(){
        n7++;
        if(n7%2!=0){
            $('.space').append(c7);
        }else{
            $('.marryS').remove();
        }
    });



    var cLength=1;
    var dum=1;
    $('.cloneWrap').on('click','.plus3',function(){
        cLength++;
        dum++;
        if(cLength>5){
            cLength=5;
        }
        if(cLength<5){
            $('.cloneWrap').append($(this).parent().clone());
        }
        if(dum>4){
            dum=4;
        }
        if(dum==3){
            $('.dum3').show();
        }
        if(dum==4){
            $('.dum4').show();
        }
        console.log(dum);
    });

    $('.cloneWrap').on('click','.minus3',function(){
        cLength--;
        dum--;
        if(cLength<1){
            cLength=1;
        }
        if(cLength>1){
            $(this).parent().remove();
        }
        if(dum<1){
            dum=1;
        }
        if(dum<4){
            $('.dum4').hide();
        }
        if(dum<3){
            $('.dum3').hide();
        }
        console.warn(dum);
    });







    var Html=$('#edit').html();

    $('#handIn').click(function(){
        $('#edit').html(Html);
    })





});



