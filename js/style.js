/**
 * Created by hg on 2016/5/17.
 */
$(function(){
    //下面全是样式设置,
    var color;
    $('.con').on('change','.color0',function(){
        color=$(this).val();
        $('#mobile').css('background',color);
    });
    $('.con').on('change','.color1',function(){
        color=$(this).val();
        $('.title').css('background',color);
    });
    $('.con').on('change','.color2',function(){
        color=$(this).val();
        $('.show').css('background',color);
        $('. fieldSure').css('background'.color);
    });
    $('.con').on('change','.color3',function(){
        color=$(this).val();
        $('.title').css('color',color);
    });
    $('.con').on('change','.color4',function(){
        color=$(this).val();
        $('.timu').css('color',color);
    });
    $('.con').on('change','.color5',function(){
        color=$(this).val();
        $('.speak').css('color',color);
    });
    $('.con').on('change','.color6',function(){
        color=$(this).val();
        $('.subBtn').css({'background':color,'border-color':color});
    });
    $('.con').on('change','.color7',function(){
        color=$(this).val();
        $('.subBtn').css('color',color);
    });


    $(document).on('dblclick','.timu', function () {
        $('.timu').css('color',$('.color4').val());
    });
    $(document).on('dblclick','.speak', function () {
        $('.speak').css('color',$('.color5').val());
    });

    $('.firstCon').click(function(e){
        $('.timu').trigger('dblclick');
        $('.speak').trigger('dblclick');
    });

});