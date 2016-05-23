/**
 * Created by hg on 2016/5/13.
 */

$(function(){//保存页面
      $('#watch').click(function(){
            var phone=$('#need').html();

            localStorage.setItem("pop-up-button",phone);

            var ground=$('#need').css('background-color');
            //alert(ground);
      });

      $('#save').click(function(){
            alert('保存成功！点击导入模板，可以导入你设置的表单界面');
            var f=$('#fields').html();
            localStorage.setItem("fresh",f);
            var sH=$('#sC').html();
            localStorage.setItem("bh",sH);

            var moS=$('.moveS').html();
            localStorage.setItem("ms",moS);

      });

});


