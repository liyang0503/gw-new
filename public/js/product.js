/**
 * Created by QXT on 2017/6/1.
 */
var w = $(window).width();
$(function () {
   //指纹扫描
   ini();

   //天时产销
   tscx();

   //天道融贷
   tds();
   tds1();

   //天才培训
   tcs();
});
function ini() {
   if (w > 992) {
      $('.tw-img4').animate({top: "344px"}, 1000).animate({top: "214px"}, 1000, ini);
   } else {
      $('.tw-img4').animate({top: "284px"}, 1000).animate({top: "154px"}, 1000, ini);
   }
}

function tscx() {
   var arr = ['.ts-img1', '.ts-img2', '.ts-img3', '.ts-img4', '.ts-img5', '.ts-img6', '.ts-img7', '.ts-img8', '.ts-img9'];
   var num = Math.round(Math.random() * 8);
   var num1 = Math.round(Math.random() * 8);
   $(arr[num]).animate({opacity: '1'}, 0);
   $(arr[num1]).animate({opacity: '0.3'}, 0);
   setTimeout(tscx, 120);
}

function tcs() {
   $('.opa').css({opacity: '0.3'});
   $('.tc-img4').animate({opacity: '1'}, 400);
   setTimeout(function () {
      $('.tc-img3').animate({opacity: '1'}, 400);
   }, 300);
   setTimeout(function () {
      $('.tc-img2').animate({opacity: '1'}, 400);
   }, 600);
   setTimeout(function () {
      $('.tc-img1').animate({opacity: '1'}, 400);
   }, 900);
   $('div.ttt').animate({bottom: "150px"}, 800).animate({bottom: "142px"}, 800, tcs)
}

function tds() {
   $('.opd').css({opacity: '0.3'});
   $('.opd-6').animate({opacity: '1'}, 1000);
   $('.opd-8').animate({opacity: '1'}, 1000);
   setTimeout(function () {
      $('.opd-5').animate({opacity: '1'}, 800);
      $('.opd-7').animate({opacity: '1'}, 800, tds);
   }, 500);
}
function tds1() {
   $('.opd1').css({opacity: '0.3'});
   $('.opd6').animate({opacity: '1'}, 1000);
   $('.opd8').animate({opacity: '1'}, 1000);
   setTimeout(function () {
      $('.opd5').animate({opacity: '1'}, 800);
      $('.opd7').animate({opacity: '1'}, 800, tds1);
   }, 500);
}