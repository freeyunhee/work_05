$(function(){


  var swiper = new Swiper(".notice_swiper", {
    loop: true,
    autoplay:true,
    pagination: {
      el: ".pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".btn_box .next",
      prevEl: ".btn_box .prev"
    }
  });



  $('.content .btn_category').click(function(e){
    e.preventDefault();
      // $('.content').toggleClass('active');
      $('.content').removeClass('active');
      $(this).parent('.content').addClass('active');
  })

  

  var swiper = new Swiper(".slide_banner", {
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
})
