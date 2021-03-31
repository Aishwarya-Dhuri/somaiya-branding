$(document).ready(function() {
    $('.carousel').carousel({
        //interval:false
    });
    new WOW().init();

    //Menu script
"use strict";
$('.menus > ul > li:has( > ul)').addClass('menu-dropdown-icon');
$('.menus > ul > li > ul:not(:has(ul))').addClass('normal-sub');
$(".menus > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");
$(".menus > ul > li").hover(function(e) {
  
    if ($(window).width() > 959) {
        $(this).children("ul").stop(true, false).fadeToggle(200);
        e.preventDefault();
    }
});
$(".menus > ul > li").click(function() {
    if ($(window).width() <= 959) {
        $(this).children("ul").fadeToggle(200);
    }
});
$(".menu-mobile").click(function(e) {
    $(".menus > ul").toggleClass('show-on-mobile');
     $("body").toggleClass("overflow_hide");
    e.preventDefault();
});
$(window).resize(function() {
    $(".megamenu .menus > ul > li").children("ul").hide();
    $(".megamenu .menus > ul > li").removeClass('show-on-mobile');
});


$('.megamenu .menus ul li').click(function(){
$('.megamenu .menus ul li').removeClass("act");
$(this).addClass("act");

});

$(".megamenu .menus > ul > li").click(function () {
    $(".megamenu .menus > ul > li").toggleClass("acts")
});

  $(".more-links").click(function () {
    $(".more-links").toggleClass("open")
});


$(".megamenu .menus ul li").click(function() {
    //$(".megamenu .menus ul li").removeClass("act");
    $(".megamenu .menus ul li .megasub ").hide();
    $(this).addClass("act");
    $(this).find('.megasub').show();
    if($(".megamenu .menus ul li").hasClass('act')){
        $(this).toggleClass("act");
    }else{
        $(".megamenu .menus ul li").removeClass("act");
        $(".megamenu .menus ul li .megasub ").hide();
        $(this).addClass("act");
        $(this).find('.megasub').show();
    }
    if($(".menus-dropdown-icon a").hasClass('arw')){
        $(this).toggleClass("arw");
    }else{
        $(".menus-dropdown-icon a").removeClass("arw");
        
    }
});

 $(".megamenu .menus ul li").click(function() {
    //$(".megamenu .menus ul li").removeClass("act");
 
  
    $(this).find('a').toggleClass('arw');
    if($(".megamenu .menus ul li a").hasClass('arw')){
        $(this).toggleClass("arw");
    }else{
        
       $(this).find('a').removeClass('arw');
    }
});
	  
//active for menu
 $(function()
     {
       $('ul.mainmenu li a').filter(function(){return this.href==location.href}).parent().addClass('highlight').siblings().removeClass('highlight')
       $('ul.mainmenu li a').click(function(){
         $(this).parent().addClass('highlight').siblings().removeClass('highlight')  
       })
       $('ul.mainmenu li.megamenu-fw ul li.highlight a').parents().each(function(){
         if ($(this).is('li.menus-dropdown-icon'))
         {
           $(this).addClass("highlight");
         }                            
       });
     })


//Script of hover for both child and parent	
 $(".normal-sub").hover(
	function() {
		$(this).parent().addClass("hover");
	},
	function() {
		$(this).parent().removeClass("hover");
	});	

//Footer Script
  // $(".option-heading").click(function() {
  //   $(".option-content").slideUp(500);
  //   $(".arrow-up").addClass('is-hidden');
  //   $(".arrow-down").removeClass('is-hidden');
  //   $(this).next(".option-content").stop().slideToggle(500);
  //   $(this).find(".arrow-up, .arrow-down").toggle();
  //   });


 
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
//     $('.acdgov-tabswrapper .tab-pane').removeClass("active");
   
//     event.preventDefault();
//     $('html, body').animate({scrollTop:150}, 'slow'); 
//     $(this).tab('show');   
   
// });
$(".scrolllist .acd-councilmains .nav li a").click(function() {
    $('html').css('scroll-behavior', 'smooth');
});

var selector = '.scrolllist .acd-councilmains .nav-link';

$(selector).on('click', function() {
    $(selector).removeClass('active');
    $(this).addClass('active');
});

$(".scrolllist .acd-councilmains .nav").click(function() {
    $(".nav").toggleClass("open");
});

// $(function()
// {
//  if (screen.width <= 767) {
//         var fixmeTop = $('.mobfixed').offset().top;
//          $(window).scroll(function() {
//              var currentScroll = $(window).scrollTop();
//              if (currentScroll >= fixmeTop) {
//                  $('.mobfixed').addClass('afix');
//                  $('.mobfixed').css({
//                      position: 'fixed',
//                      margin: '-20px',
//                      top: '30px'            
//                  });
//              } else {
//                  $('.mobfixed').removeClass('afix');
//                   $('.mobfixed').css({
//                       position: 'static',
//                       margin: '0',
//               });
//           }
//          });
//      }
// })



var fixmeTop = $('.acd-councilmains .fixme').offset().top;

$(window).scroll(function() {
   var currentScroll = $(window).scrollTop();
   if (currentScroll >= fixmeTop) {
     $('.acd-councilmains .fixme').addClass('fix');
     $('.acd-councilmains .mobfixed').addClass('afix');
    //    $('.fixme').css({
    //        position: 'fixed',
    //        margin: '-20px',
    //        top: '30px'            
    //    });
   } else {
      $('.acd-councilmains .fixme').removeClass('fix');
      $('.acd-councilmains .mobfixed').removeClass('afix');
    //    $('.acd-councilmains .fixme').css({
    //        position: 'static'
    //    });
    //    $('.acd-councilmains .mobfixed').css({
    //     position: 'static'
    // });
   }
});






}); //Document ready End




 