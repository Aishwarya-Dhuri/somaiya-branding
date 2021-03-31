$(".brandmenu .menu-leaf").on("mouseenter", function () {
    if ($(window).width() > 976) {
        $(this).children("ul").css("display","block");
        $(this).siblings().children("ul").css("display","none");
    }
});

$(".brandmenu .menu-leaf").on("mouseleave", function () {
      $(this).children("ul").css("display","none");
      $(this).siblings().children("ul").css("display","none");
});
$(document).ready(function() {
    $('.carousel').carousel({
        //interval:false
    });
    new WOW().init();
    $('[data-toggle="tooltip"]').tooltip();

//Menu script
"use strict";

//Script of hover for both child and parent 

$("header .dropdown-menu").hover(
  function() {
    $(this).parent().addClass("hover");
  },
  function() {
    $(this).parent().removeClass("hover");
  }); 
  

$(".brandmenu-btn").click(function(e) {
  $(".brandmenu").toggleClass('show-on-mobile');
  $("header").toggleClass('header-noshadow');
   $("body").toggleClass("overflow_hide");
   $("#cu-overlay").toggleClass("overlay-visible");

  e.preventDefault();
});


$("#cu-overlay").click(function() {
  $("body").removeClass("overflow_hide");
  $(".brandmenu").removeClass("show-on-mobile");
  $(this).removeClass("overlay-visible");

});

$(".brandmenu .menu-leaf").click(function() {
  if ($(window).width() <= 976) {
     
       $(this).children("ul").toggleClass("childrenshow");
        $(this).find('a').toggleClass("menuminus");
      $(this).siblings().find('a').removeClass("menuminus");
   
      $(this).siblings().children("ul").removeClass("childrenshow");
      $(".tab_menu .nav-tabs .nav-item").removeClass("highlight");
  }
  
 
});

const menuBtn = document.querySelector('.brandmenu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

 //active for menu
 $(function()
 {
   $('ul.brandmenu li a').filter(function(){return this.href==location.href}).parent().addClass('highlight').siblings().removeClass('highlight')
   $('ul.brandmenu li a').click(function(){
     $(this).parent().addClass('highlight').siblings().removeClass('highlight')  
   })
   $('ul.brandmenu li.menu-leaf ul li.highlight a').parents().each(function(){
     if ($(this).is('li.menu-leaf'))
     {
       $(this).addClass("highlight");
     }                            
   });
 });

/** Script for emergency notices on header **/
$('.notice-msg').click(function(){ 
    var id = $( this ). closest( ".fruit" ).children(). attr( "id" )
    $('#'+id).remove();  
});


$(".more-links").click(function () {
    $(".more-links").toggleClass("open")
});
	  


//Footer Script
 if (screen.width < 980) {
  $(".option-heading").click(function() {
    $(".option-content").slideUp(500);
    $(".arrow-up").addClass('is-hidden');
    $(".arrow-down").removeClass('is-hidden');
    $(this).next(".option-content").stop().slideToggle(500);
    $(this).find(".arrow-up, .arrow-down").toggle();
    });
}


 
    var showChar = 100;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    $(".social_responsibility .btncollapse").click(function(){
  $(".social_responsibility .btncollapse").toggleClass("click");
});
$(".dropdown_tab ul.nav.nav-tabs li").click(function() {
            $(".dropdown_tab ul.nav.nav-tabs").toggleClass("opens");
        });

var selector = '.dropdown_tab ul li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});


    $('.academics .collapse').on('shown.bs.collapse', function () {
        $(this).parent().addClass('active');
    });

    $('.academics .collapse').on('hidden.bs.collapse', function () {
        $(this).parent().removeClass('active');
    });

 //switch button
    function switchVisible() {
               if (document.getElementById('Div1')) {
        
                   if (document.getElementById('Div1').style.display == 'none') {
                       document.getElementById('Div1').style.display = 'block';
                       document.getElementById('Div2').style.display = 'none';
                     $(".one").addClass("active");
                     $(".two").removeClass("active");
                   }
                   else {
                       document.getElementById('Div1').style.display = 'none';
                       document.getElementById('Div2').style.display = 'block';
                          $(".two").addClass("active");
                     $(".one").removeClass("active");
                   }
               }
        }
    //switch button end

 if ($('#home-slider .carousel-item  p').is(':empty')) { 
        $('#home-slider .carousel-item  .uni-banner-heading').css("margin","0");
    }


var backtopbtn = $('#backtopbtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    backtopbtn.addClass('show');
  } else {
    backtopbtn.removeClass('show');
  }
});

backtopbtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//View faculty detail page script for tab active in BS4
$(".view_faculty .responsivetabs li").click(function(){
    $(".view_faculty .responsivetabs li.active").removeClass("active");
    $(this).addClass("active");
});

  $(".lazyloadimg").removeAttr("src");
  const targets = document.querySelectorAll('.lazyloadimg');
  

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        //console.log(entries)
        entries.forEach(entry => {
            

            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('fade');

                observer.disconnect();
            }
        });
    });

    io.observe(target)
};

targets.forEach(lazyLoad);

 if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
    $(".lazyloadimg").attr("src");
 }
    
$(function() {
    $('.carousel.lazy-loadslider').bind('slide.bs.carousel', function (e) {
        var image = $(e.relatedTarget).find('img[data-src]');
        image.attr('src', image.data('src'));
        image.removeAttr('data-src');
    });
});

//Academic council and governing body script
// $('.acdgov-tabswrapper .nav-tabs li a').on('click', function(event) {
//    $('.acdgov-tabswrapper .tab-pane').removeClass("active");
//     event.preventDefault();
//     $('html, body').animate({scrollTop:150}, 'slow'); 
//     $(this).tab('show');    
// });

$('.autoplay').slick({
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]
    });
    $('.autoplays').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });



}); //Document ready End




