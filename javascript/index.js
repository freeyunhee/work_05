$(function(){

  var swiper_news = new Swiper(".content.news .notice_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".content.news .pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".content.news .btn.next",
      prevEl: ".content.news .btn.prev",
    },
  });

  $('.content.news .pause').on('click',function(){
    swiper_news.autoplay.stop();
    return false;
 });

  $('.content.news .play').on('click',function(){
    swiper_news.autoplay.start();
    return false;
 });



  var swiper_citizen = new Swiper(".content.citizen .notice_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".content.citizen .pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".content.citizen .btn.next",
      prevEl: ".content.citizen .btn.prev",
    },
  });

  $('.content.citizen .pause').on('click',function(){
    swiper_citizen.autoplay.stop();
    return false;
 });

  $('.content.citizen .play').on('click',function(){
    swiper_citizen.autoplay.start();
    return false;
 });


  $('.content .btn_category').click(function(e){
    e.preventDefault();
      $('.content').removeClass('active');
      $(this).parent('.content').addClass('active');
  })

  

  var swiper_banner = new Swiper(".slide_banner", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".sc_slide_banner .pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".sc_slide_banner .btn.next",
      prevEl: ".sc_slide_banner .btn.prev",
    },
  });

  $('.sc_slide_banner .pause').on('click',function(){
      swiper_banner.autoplay.stop();
      return false;
   });


  $('.sc_slide_banner .play').on('click',function(){
    swiper_banner.autoplay.start();
    return false;
   });
   


   $('.site_nav > li > a').click(function(e){
    e.preventDefault();

    h = $(this).siblings('.container').children('.depth1').outerHeight();

    if($(this).siblings('.container').height() > 0){
      $('.site_nav .container').stop().animate({height:0},300);
    }else{
      $('.site_nav .container').stop().animate({height:0},300)
      $(this).siblings('.container').stop().animate({height:h},300);
    }

    $(this).parents('.site_nav > li').toggleClass('active');

    });

})
