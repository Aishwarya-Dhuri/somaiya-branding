$(document).ready(function() {
    $('.carousel').carousel({
        //interval:true
    });
    new WOW().init();

    //Menu script
"use strict";
$('.menus > ul > li:has( > ul)').addClass('menu-dropdown-icon');
$('.menus > ul > li > ul:not(:has(ul))').addClass('normal-sub');
// $(".menus > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");
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
    $(".admission_menu").removeClass("highlight");

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
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active-acc');
        $("card").addClass('active-acc');
       
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active-acc');
        $("card").removeClass('active-acc');
     
    });

    $(".card a").click(function() {
    $(this).closest('.card').addClass('selected').siblings().removeClass('selected');

    });
    
$(".faq section.tab_sidebar .quick_links .nav").click(function() {
    $(".faq section.tab_sidebar .quick_links .nav").toggleClass("opens");
});
$(".faq section.tab_sidebar .links .nav").click(function() {
  $(".faq section.tab_sidebar .links .nav").toggleClass("opens");
});
$(".faq section.tab_sidebar .quick_links p ").click(function() {
  $(".faq section.tab_sidebar .quick_links .nav").toggleClass("opens");
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


$('.admission-topmain #impdatebtn').click(function(e) {
  e.preventDefault();
   
   var url = $(this).attr('href');
       
   var hashstring = url.split('#')[1];
   
   localStorage.setItem("hashstring", hashstring);
   location.reload(false);
   window.location.replace(url.split('#')[0]);
    
    });

$('.admission-topmain #impinstructionbtn').click(function(e) {
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

//Script of hover for both child and parent	
 $(".normal-sub").hover(
	function() {
		$(this).parent().addClass("hover");
	},
	function() {
		$(this).parent().removeClass("hover");
	});	
	

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


$(function () {
    var loc = window.location.href; // returns the full URL
    if (/examination-structure/.test(loc)) {
        $('.exam-top-main .exambanner').addClass('overview-banner');
        $('.overviews').addClass('actives');
    }
    else if(/exam-promotion-rule/.test(loc)){
        $('.ordrules').addClass('actives');
    }
    else if(/exam-code-of-conduct/.test(loc)){
        $('.resultanalys').addClass('actives');
    }
    else if(/convocation/.test(loc)){
        $('.exam-top-main .exambanner').addClass('convocation-banner');
        $('.convocation').addClass('actives');
    }
    else if(/examination-forms/.test(loc)){
        $('.exam-top-main .exambanner').addClass('forms-banner');
        $('.forms').addClass('actives');
    }
    else if(/unfair-means-action/.test(loc)){
        $('.quick-links').addClass('actives');
    } 
    else if(/online-resources/.test(loc)){
        $('.online-resources').addClass('actives');
    }
    else if(/overview/.test(loc)) {
        $('.overviews').addClass('actives');
    }
    else if(/collection/.test(loc)) {
        $('.overviews').addClass('actives');
    }
    else if(/committee-members/.test(loc)) {
        $('.overviews').addClass('actives');
    }
    else if(/print-resources/.test(loc)) {
        $('.print-resources').addClass('actives');
    }
    else if(/services/.test(loc)) {
        $('.services').addClass('actives');
    }
    else if(/facilities/.test(loc)) {
        $('.facilities').addClass('actives');
    }
});

 $(".library .toggle").click(function(){
    $(".library ul.nav").toggleClass("togglethis");
});
}); //Document ready End




// TO make admission tabs active on windown onload
$(window).on('load', function(){
 

var hashstring = localStorage.getItem("hashstring");

var tabclassname = "."+hashstring;
var tabidname = ".admission-mainsection .tab-content #"+hashstring;

var hashtag  = "#"+hashstring;
if (hashtag == '#overview'  || hashtag == '#eligibility'   || hashtag == '#admissionprocess' || hashtag == '#admissionguidelines' || hashtag == '#feesstructure' || hashtag == '#documentsrequired' || hashtag == '#importantinstruction' || hashtag == '#importantdates'  )
{
    $(".admission_menu").addClass("highlight");
    // If else condition for buttons onclick in top section
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


    $('.admnsn-wrapper .bggrey ul li').removeClass("sksactive");
    $('.admnsn-wrapper .tab-content .tab-pane').removeClass("active");
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


  