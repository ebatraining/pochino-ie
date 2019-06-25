jQuery(document).ready(function($) {

  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  if ($(window).width() >= 768) {
    $('.fade_in00-1').hide().fadeIn(1500);
    $('.fade_in00-2').hide().fadeIn(3000);
    $(window).scroll(function (){
      $('.fade_in01').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 150){
          $(this).addClass('scroll');
        }
      });
      $('.fade_in02').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > windowHeight){
          $(this).addClass('scroll');
        }
        if (scroll < windowHeight){
          $(this).removeClass('scroll');
        }
      });
    });
    $(function(){
  　　$('.matchHeight').matchHeight();
    });
  }

  if ($(window).width() <= 767) {
  	$('.trigger').on("click", function(){
  		$('.toggle').stop().fadeToggle(500);
  		$(this).parent('nav').toggleClass('toggleOpen');
  	});
  }
});
