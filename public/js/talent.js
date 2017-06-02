/**
 * Created by QXT on 2017/5/17.
 * 作用域：人才招聘
 */

$(function () {
   $('.tal-li').click(function () {
      var span = $(this).find('span');
      $(this).siblings().find('ul').slideUp();
      $(this).siblings().find('span').html("+");
      $(this).find('ul').slideToggle();
      span.html(span.html() == "-" ? "+" : "-");
   });
   $('.tal-s-li').click(function () {
      event.stopPropagation();
   });

   tab('.tal-s-li', '.tal-r');
});


function tab(cli, sec) {
   function se() {
      $(sec).each(function () {
         $(this).hide();
         if ($(this).hasClass('active')) {
            $(this).show();
         }
      });
      setTimeout(se);
   }

   se();

   $(cli).each(function (index) {
      $(this).click(function () {
         $(sec).removeClass('active');
         $(cli).removeClass('active');
         $(this).addClass('active');
         $($(sec)[index]).addClass('active');
      });
   });
}
