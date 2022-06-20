

$(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
       $('.header-area').addClass('sticky-bg');
    } else {
       $('.header-area').removeClass('sticky-bg');
    }
});


$(document).ready(function(){

    $('.nav li a').click(function(){
     $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
       }, 500);
       return false;
    });

    $('#menu').click(function(){
         $('.nav-area .nav').slideToggle(1000);
    });

   $('.cm-link').owlCarousel({
       center: true,
        items:1,
       loop:true,
     responsive:{
        0:{
           items:1,
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.single-client').owlCarousel({
  items:1,
  loop:true,
  dots:false,
  nav:true,
  navText:['<i class="fas fa-long-arrow-alt-right" id=right-arrow></i>','<i class="fas fa-long-arrow-alt-left" id="left-arrow"></i>'],
});

$('.video').magnificPopup({
  items: {
       src: 'https://player.vimeo.com/video/174251571'
     },
  type: 'iframe',
   
  iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 
        patterns: {
            youtube: {
                index: 'vimeo.com/', 
                id: 'v=', 
                src: 'https://player.vimeo.com/video/174251571' 
            }
         },
         srcAction: 'iframe_src', 
     }
});


 });

  $('.nav li a').click(function(){
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top
        },1000);

        return false;
    });










 