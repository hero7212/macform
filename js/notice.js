/**
 * Created by hg on 2016/5/25.
 */
$(function(){
    var timer=null;
    var timer2=null;
    var yy=0;
    autoPlay();
    autoPlay2();

    function autoPlay2(){
        timer2=setInterval(function(){
            yy++;
            if(yy>$('.listScroll>div').length){
                yy=0;
            }
            $('.listScroll').animate({top:-20},1000);
        },2000);
    }

    function autoPlay(){
        timer= setInterval(function(){
            var scDiv=$('.listScroll>div').first();
            $('.listScroll').animate({top:0},0).append(scDiv);
        },1000*$('.listScroll>div').length);
    }
});
