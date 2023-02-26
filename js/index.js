$(function(){
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
        responsive: [ // 반응형 웹 구현 옵션
        {  
          breakpoint: 960, //화면 사이즈 960px
          settings: {
            slidesToShow: 3
          } 
        },
        { 
          breakpoint: 768, //화면 사이즈 768px
          settings: {    
            slidesToShow: 2
          } 
        },
        { 
            breakpoint: 668, //화면 사이즈 768px
            settings: {    
              slidesToShow: 1
            } 
          }

      ]

    });
})
$(function(){
    //토글메뉴 플러그인 실행 
    //일단 토글 변수 선언 
    var toggle = $('#toggle');
    var menu = $('nav ul');
    // 토글 누르면 nav 를 나왔다 사라졌다 해줄거임
    $(toggle).on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });
});
$(function(){
  // 스크롤 시 header fade-in
  $(document).on('scroll', function(){
      if($(window).scrollTop() > 710){
          $("header").removeClass("deactive");
          $("header").addClass("active");
      }else{
          $("header").removeClass("active");
          $("header").addClass("deactive");
      }
  })
});
