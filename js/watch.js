/**
 * Created by hg on 2016/5/13.
 */

$(function(){
      $('#watch').click(function(){
            var phone=$('#need').html();
            //alert(phone);
            localStorage.setItem("pop-up-button",phone);
      });
      $('#save').click(function(){
            var formH=$('#fields').html();
            localStorage.setItem("pop-up-button",formH);
      });

});


