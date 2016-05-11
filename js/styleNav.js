/**
 * Created by hg on 2016/5/11.
 */
$(function(){


    $('.styleNav>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.style1').click(function(){
        $('.title1').show().siblings('.title').hide();
    });
    $('.style2').click(function(){
        $('.title2').show().siblings('.title').hide();
    });
    $('.style3').click(function(){
        $('.title3').show().siblings('.title').hide();
    });
});

