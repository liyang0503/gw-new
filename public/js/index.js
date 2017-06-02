/**
 * Created by QXT on 2017/5/17.
 * 作用域：首页
 */

$(function () {
   $('.ind-item input').focus(function () {
      $(this).css({borderWidth: "2px"}).siblings('label').css({fontSize: "14px", top: "-3px", color: "#fff"});
      $(this).parent().siblings().find('input').css({borderWidth: "1px"});
      // $(this).parent().siblings().find('label').css({fontSize: "16px", top: "10px", color: "#999"});
   }).blur(function () {
      $('.ind-item').find('input').css({borderWidth: "1px"});
      if ($(this).val() == "") {
         $(this).siblings('label').css({fontSize: "16px", top: "10px", color: "#999"});
      }
   });
   $('.ind-item textarea').focus(function () {
      $(this).css({borderWidth: "2px", padding: '7px'});
   }).blur(function () {
      $(this).css({borderWidth: "1px", padding: '8px'});
   });

   //表单
   $('#submit').click(function () {
      $('.int').each(function () {
         if ($(this).val() == "") {
            $('#yz').show();
            return false;
         } else {
            $('.mod').fadeIn();
         }
      });
   });
   $('#yz-close').click(function () {
      $('.mod').fadeOut();
      window.location.reload();
   });

   //智库动效调用
   zk();

   //智网动效调用
   zw();

   //智诚动效调用
   zc();
});


//智库动效
function zk() {
   $('.zk-01').animate({top: "50px"}, 950).animate({top: "-50px"}, 800, zk);
}

//智网动效
function zw() {
   $('.zw-img1').animate({top: "90px"}, 950).animate({top: "78px"}, 950);
   $('.zw-img2').animate({top: "160px"}, 1000).animate({top: "146px"}, 1000);
   $('.zw-img3').animate({top: "153px"}, 950).animate({top: "139px"}, 950);
   $('.zw-img4').animate({top: "196px"}, 1000).animate({top: "184px"}, 1000);
   $('.zw-img5').animate({top: "215px"}, 950).animate({top: "200px"}, 950);
   $('.zw-img6').animate({top: "200px"}, 1100).animate({top: "185px"}, 1100);
   $('.zw-img7').animate({top: "247px"}, 950).animate({top: "235px"}, 950, zw);
}

//智诚动效
function zc() {
   $('.opc').css({opacity: '0.15'});
   $('.img-zc-2').animate({opacity: '1'}, 500);
   setTimeout(function () {
      $('.img-zc-3').animate({opacity: "1"}, 500);
   }, 300);
   setTimeout(function () {
      $('.img-zc-4').animate({opacity: "1"}, 500);
   }, 600);
   setTimeout(function () {
      $('.img-zc-5').animate({opacity: "1"}, 500);
   }, 900);
   setTimeout(function () {
      $('.img-zc-6').animate({opacity: "1"}, 500);
   }, 1200);
   setTimeout(function () {
      $('.img-zc-7').animate({opacity: "1"}, 500);
   }, 1500);
   setTimeout(function () {
      $('.img-zc-8').animate({opacity: "1"}, 500, zc);
   }, 1800);
}
