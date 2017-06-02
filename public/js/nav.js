/**
 * Created by QXT on 2017/5/16.
 * 作者：李阳
 * 作用域：nav
 */

"use strict";
var w = $(window).outerWidth();
$(function () {
   $('.nav-item').hover(function () {
      $(this).siblings().find('a').css({opacity: "0.4"});
   }, function () {
      $(this).siblings().find('a').css({opacity: "1"});
   });
   navs();
   $(window).scroll(function () {
      navs();
   });
});

function navs() {
   var top = $(window).scrollTop();
   if (w > 767) {
      if (top > 60 && top < $(".banner").outerHeight() - 60) {
         $('nav').css({background: '#3a5487', boxShadow: 'none'}).removeClass('scroll').find('img.logo2').hide();
         $('nav').find('img.logo1').show();
      } else if (top > $(".banner").outerHeight() - 60) {
         $('nav').css({background: '#fff'}).addClass('scroll').find("img.logo2").show();
         $('nav').find('img.logo1').hide();
      } else {
         $('nav').css({
            background: 'transparent',
            boxShadow: "0 -1px 0 0 rgba(255, 255, 255, .1) inset"
         }).removeClass('scroll').find("img.logo2").hide();
         $('nav').find('img.logo1').show();
      }
   }
}
