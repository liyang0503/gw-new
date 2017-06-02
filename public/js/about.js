/**
 * Created by QXT on 2017/5/18.
 */

$(function () {
   setTimeout(function () {
      $('section').css({height: $('.about .container').outerHeight() - 245});
   }, 100);
   //使用相册
   $('.photos').find('div.d2').click(function () {
      $(this).siblings('img').click();
   });
   layer.ready(function () {
      //使用相册
      layer.photos({
         photos: '#photos1'
      });
      layer.photos({
         photos: '#photos2'
      });
      layer.photos({
         photos: '#photos3'
      });
   });
});
