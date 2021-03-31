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
   
    //Menu script
"use strict";
$('.notice-msg').click(function(){ 
    var id = $( this ). closest( ".fruit" ).children(). attr( "id" )
    $('#'+id).remove();
});

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
  else{
      ("#cu-overlay").removeClass("overlay-visible");
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

 //FAQ Scripts
$('.faq .collapse').on('shown.bs.collapse', function () {
    $(this).prev().addClass('active-acc');
    $("card").addClass('active-acc');
});

$('.faq .collapse').on('hidden.bs.collapse', function () {
    $(this).prev().removeClass('active-acc');
    $("card").removeClass('active-acc');
});

$(".faq .card a").click(function() {
    $(this).closest('.card').addClass('selected').siblings().removeClass('selected');
});
    
			
				
//Admission scripts
 $("#admsn-verticaltabs li.vertical-link").click(function() {
    $("#admsn-verticaltabs").toggleClass("admmns-open");
});
                

//save url to local storage 
$(".admission_menu .child-menu a").click(function(e) {
   e.preventDefault();
   var url = $(this).attr('href');
       
   var hashstring = url.split('#')[1];
   
   localStorage.setItem("hashstring", hashstring);
   location.reload(true);
   window.location.replace(url.split('#')[0]);
});


$('.admission-topmain .grey-btn').click(function(e) {
  e.preventDefault();
   
   var url = $(this).attr('href');
       
   var hashstring = url.split('#')[1];
   
   localStorage.setItem("hashstring", hashstring);
   location.reload(false);
   window.location.replace(url.split('#')[0]);
    
    });

	
// resp tabs  
  
$.fn.responsiveTabs = function() {
    this.addClass('responsives-tab');
    this.append($('<span class="glyphicon glyphicon-triangle-bottom"></span>'));
    this.append($('<span class="glyphicon glyphicon-triangle-top"></span>'));

    this.on('click', 'li.active, span.glyphicon', function() {
        this.toggleClass('open');
    }.bind(this));

    this.on('click', 'li:not(.active)', function() {
        this.removeClass('open');
    }.bind(this));
};

$('.admission-tabs').responsiveTabs();



 if ($('#home-slider .carousel-item  p').is(':empty')) { 
        $('#home-slider .carousel-item  .uni-banner-heading').css("margin","0");
}
    
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


initSlickSlider();
function initSlickSlider() {

  $(".noticeboardlist").slick({
    vertical: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    speed: 1000,
    prevArrow: '<button class="notice-prev" aria-label="Previous" type="button" ></button>',
    nextArrow: '<button class="notice-next" aria-label="Next" type="button"></button>',
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 1
        }
    }]
});

}



          


}); //Document ready End




// TO make admission tabs active on windown onload
$(window).on('load', function(){

var hashstring = localStorage.getItem("hashstring");

var tabclassname = "."+hashstring;
var tabidname = ".admission-mainsection .tab-content #"+hashstring;

var hashtag  = "#"+hashstring;
if (hashtag == '#overview'  || hashtag == '#eligibility'   || hashtag == '#admissionprocess' || hashtag == '#admissionguidelines' || hashtag == '#feesstructure' || hashtag == '#documentsrequired' || hashtag == '#importantinstruction' || hashtag == '#importantdates')
{
  $(".brandmenu .admission_menu").addClass("highlight");
	
  if(tabclassname == '.importantdates')
   {
       var tabclassname = ".overview";
       var tabidname = ".tab-content #overview";
   }

   
   else if(tabclassname == '.importantinstruction'){
    var tabclassname = ".importantinstruction";
       var tabidname = ".tab-content #importantinstruction";
   }
   else if(tabclassname == '.admissionguidelines'){
    var tabclassname = ".admissionguidelines";
       var tabidname = ".tab-content #admissionguidelines";
   }

    $('.admission-mainsection .bggrey ul li').removeClass("sksactive");
    $('.admission-mainsection .tab-content .tab-pane').removeClass("active");
    $(tabclassname).parent().addClass('sksactive');
    $(tabidname).addClass('active');

    var position = $(hashtag).offset().top;
    console.log("position : "+ position);

    $('html, body').animate({
        scrollTop: position
    }, 2000);
}

localStorage.removeItem("hashstring");

});
