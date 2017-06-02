/**
 * Created by QXT on 2017/5/17.
 * 作用域：动画特效页
 */
$(function () {
   // 执行动画
   if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
      new WOW().init();
   }


});
