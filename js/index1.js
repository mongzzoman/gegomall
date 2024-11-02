$(document).ready(function () {

  $('#header .depth1').on('mouseover focusin',function(){
    hig = 0;
    $('#header .depth1 > li > div > .depth2').each(function(){
      temp = parseInt($(this).outerHeight());
      if(hig <= temp){
        hig = temp;
      }
    })
    $('#header .depth1 > li > div > .depth2').show().css('height', hig);
    $('.bg_snb').show().css('height',hig);
  })
  $('#header .depth1').on('mouseleave',function(){
    $('.depth1 > li > div > .depth2').hide().removeAttr('style');
    $('.bg_snb').hide().removeAttr('style');
  })

  $('.hamburger-menu').on('click',function(){
    $('.hamburger-popup').toggleClass('active');
    // $('.hamburger-popup').stop().animate({
    //   top : 60 + 'px'
    // },800)
    $('#header .nav').addClass('active')
    $('#header .icon .hamburger-menu').toggleClass('active')
  })


  $('.box .image-box .heart').click(function(){
    $(this).toggleClass('active')
  })
  $('.best-slider .slider .icon-heart').click(function(){
    $(this).toggleClass('active')
  })


  
    $(".main-banner .slider").bxSlider({
      mode: 'horizontal',
      speed: 500,
      auto: 'true'
    });
    $(".best-slider .first-slider .slider").bxSlider({
      mode: 'horizontal',
      speed: 500,
      minSlides:2,
      maxSlides:4,
      slideMargin: 30,
      auto: 'true'
    });
    $(".best-slider .second-slider .slider").bxSlider({
      mode: 'horizontal',
      speed: 500,
      minSlides:2,
      maxSlides:4,
      slideMargin: 30,
      auto: 'true'
    });
  

  $(".swiper-slide").css({
    width: "450px",
    height: "600px",
    margin: "0 20px 0 0",
  });

   
    $("#toggle").click(function () {
      $(location).attr("href", "CAT.html");
      $("html, body").fadeIn(1000);
    });

  // top버튼
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $(".go-top").fadeIn();
    } else {
      $(".go-top").fadeOut();
    }
  });
  $(".go-top").click(function (e) {
    e.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
