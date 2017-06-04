/**
 * Created by QXT on 2017/5/16.
 * 作用域：banner
 */
var w = $(window).width(), wh = $(window).height();
$(function () {
   //banner动效调用
   init();
   init1();
   is();

   //文字滚动调用
   setInterval('autoScroll(".slogan-animation-box")', 5000);

   //页面滚动调用
   sTop(".drop-down");
});

//首页视频
function playVideo() {
   $(".screen-video").fadeIn(100);
   var t = $(".screen-video-wrap");
   t.fadeIn(200), t.html().trim() || (t.html('<video id="screen_video" class="video-js vjs-default-skin" poster="/static/images/new_home/main_top_bg.jpg" preload="auto" autoplay="autoplay" controls><source src="../font/media/homeVideoFull.mp4" type="video/mp4"></video>')), setTimeout(function () {
      $("html,body").css({position: "fixed", top: 0, left: 0, right: 0})
   }, 200)
}
function closeScreenVideo() {
   $(".screen-video").fadeOut(100);
   $('#screen_video').remove();
   $('html,body').css({position: 'relative'});
}

// 文字滚动
function autoScroll(obj) {
   $(obj).find("ul").animate({
      marginTop: "-25px"
   }, 500, function () {
      $(this).css({marginTop: "0px"}).find("li:first").appendTo(this);
   })
}

//点击箭头页面滚动
function sTop(ele) {
   $(ele).click(function () {
      $('html,body').animate({scrollTop: $('.banner').outerHeight() - $('nav').outerHeight()}, 800);
   });
}

//banner动效
function init() {
   $('.drop-down').animate({bottom: "25px"}, 800).animate({bottom: "32px"}, 800, init);
}
function init1() {
   $('.fea-img1').animate({top: "60px"}, 700).animate({top: "55px"}, 700);
   $('.fea-img2').animate({top: "110px"}, 700).animate({top: "105px"}, 700);
   $('.fea-img3').animate({top: "90px"}, 800).animate({top: "85px"}, 800);
   $('.fea-img4').animate({top: "123px"}, 700).animate({top: "118px"}, 700);
   $('.fea-img5').animate({top: "155px"}, 800).animate({top: "150px"}, 800);
   $('.fea-img6').animate({top: "160px"}, 700).animate({top: "155px"}, 700, init1);
}

function is() {
   $('.jt').animate({left: '265px'}, 1500).animate({left: '255px'}, 0);
   $('.fea-i1').animate({opacity: '1'}, 600).animate({opacity: '0'}, 600);
   setTimeout(function () {
      $('.fea-i2').animate({opacity: "1"}, 600).animate({opacity: "0"}, 600);
   }, 300);
   setTimeout(function () {
      $('.fea-i3').animate({opacity: "1"}, 600).animate({opacity: "0"}, 600, is);
   }, 600);
}
