$(document).ready(function() {
    $('.carousel').carousel({
        //interval:false
    });
    new WOW().init();

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


 $(".menu-mobile").click(function(e) {
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
      // $(this).children("ul").fadeToggle(200);
       $(this).children("ul").toggleClass("childrenshow");
      $(this).toggleClass("act");
      $(this).find('a').toggleClass("menuminus");
      $(this).siblings().find('a').removeClass("menuminus");
      $(this).siblings().removeClass("act");
      $(this).siblings().children("ul").removeClass("childrenshow");
  }
  else{
      ("#cu-overlay").removeClass("overlay-visible");
  }
 
});
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

$(".more-links").click(function () {
    $(".more-links").toggleClass("open")
});

// $('ul.brandmenu li.menu-leaf ul.dropdown-menu li a').click(function(){
//     $(this).parent().find("menu-leaf").addClass("highlight").siblings().removeClass("highlight");
//     $(this).parent().addClass('highlight');
// });

$('ul.brandmenu li.menu-leaf ul.dropdown-menu li a').click(function () {
    $('ul.brandmenu li.menu-leaf.highlight').removeClass('highlight');
    $(this).addClass('linkactive');
    $(this).parent().closest('li.menu-leaf').addClass('highlight');
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


//FAQ Scripts
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

 $('.admission-topmain #systemsetbtn').click(function(e) {
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
	
	
	$("#balance1 .carousel-control-next").click(function(){
    $("#balance2 .carousel-control-next").click(); 
  
});
$("#balance1 .carousel-control-prev").click(function(){
    $("#balance2 .carousel-control-prev").click(); 
  
});

$('#balance1').carousel({
  interval: 3000,
  cycle: true
}); 
$('#balance2').carousel({
  interval: 3000,
  cycle: true
}); 
	
 if ($('#home-slider .carousel-item  p').is(':empty')) { 
        $('#home-slider .carousel-item  .uni-banner-heading').css("margin","0");
    }
    
//View faculty detail page script for tab active in BS4
$(".view_faculty .responsivetabs li").click(function(){
    $(".view_faculty .responsivetabs li.active").removeClass("active");
    $(this).addClass("active");
});


var selector = '.placements .tabs .nav-tabs .nav-item';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
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
    
    
     (function() {

var youtube = document.querySelectorAll( ".youtube" );

for (var i = 0; i < youtube.length; i++) {
    
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    
    var image = new Image();
            image.src = source;
            image.addEventListener( "load", function() {
                youtube[ i ].appendChild( image );
            }( i ) );
    
    youtube[i].addEventListener( "click", function() {

        var iframe = document.createElement( "iframe" );

        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "" );
        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

        this.innerHTML = "";
        this.appendChild( iframe );
    } );    
};

} )();


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

//academic Programme 
$(".acprgrm-tabs .pagenav").click(function () {
    $(".acprgrm-tabs .pagenav").removeClass('list-active');
    $(".acprgrm-tabs li.page_item").removeClass('innerlist-active');
    $(this).addClass('list-active');
});


$(".acprgrm-tabs .pagenav  a").click(function () {
    $(".acprgrm-tabs .pagenav  a").removeClass('active');

});

$(".acprgrm-tabs .pagenav.pg-listitem").click(function () {
    $(".acd-progrm").css("display","none");    
    $(".pg-bannersec").css("display", "block");
});

$(".acprgrm-tabs .pagenav.ug-listitem").click(function () {
   $(".acd-progrm").css("display","none");  
    $(".ug-bannersec").css("display", "block");
});

$(".acprgrm-tabs .pagenav.certificate-listitem").click(function () {
   $(".acd-progrm").css("display","none");  
    $(".certificate-bannersec").css("display", "block");
});



$(".acprgrm-tabs .pagenav.pgdiploma-listitem").click(function () {
    $(".acd-progrm").css("display","none");  
    $(".pgdiploma-bannersec").css("display", "block");
});


$(".acprgrm-tabs .pagenav.doctoral-listitem").click(function () {
    $(".acd-progrm").css("display","none");  
    $(".doctoral-bannersec").css("display", "block");
});

$(".acprgrm-tabs .pagenav ul li.page_item.minors-listitem").click(function () {
    $(".acd-progrm").css("display","none");  
    $(".minors-bannersec").css("display", "block");
    $(".acprgrm-tabs .pagenav").removeClass('list-active');
    $(".acd-prgm-right .tab-content .tab-pane").removeClass('active');
    $(".acd-prgm-right .tab-content #minors-tab").addClass('active');
    return false;
});

$(".acprgrm-tabs .pagenav ul li.page_item.dual-listitem").click(function () {
    $(".acd-progrm").css("display","none");  
    $(".dual-bannersec").css("display", "block");
    $(".acprgrm-tabs .pagenav").removeClass('list-active');
    $(".acd-prgm-right .tab-content .tab-pane").removeClass('active');
    $(".acd-prgm-right .tab-content #dual-tab").addClass('active');
    return false;
});


$(".acprgrm-tabs .pagenav ul li.page_item.honours-listitem").click(function () {
    $(".acd-progrm").css("display","none");  
    $(".honours-bannersec").css("display", "block");
    $(".acprgrm-tabs .pagenav").removeClass('list-active');
    $(".acd-prgm-right .tab-content .tab-pane").removeClass('active');
    $(".acd-prgm-right .tab-content #honours-tab").addClass('active');
    return false;
});


$(".acprgrm-tabs li.page_item").click(function () {
    $(".acprgrm-tabs li.page_item").removeClass('innerlist-active');
    $(this).addClass('innerlist-active');
    //$(this).parent().parent().addClass('mmmmmmmmmmmm');
    $(".acprgrm-tabs .pagenav.hassubmenu").removeClass('list-active');
});

$(".one").change(function() {
      
      $(this).find("option:selected").each(function() {
      
      var optionValue = $(this).attr("value");
      if (optionValue) {
      $(".box1").not("." + optionValue).hide();
      $("." + optionValue).show();
      } else {
      $(".box1").hide();
      }
      });
      }).change();


}); //Document ready End




// TO make admission tabs active on windown onload
$(window).on('load', function(){
    // $(".admission_menu").removeClass("highlight");

var hashstring = localStorage.getItem("hashstring");

var tabclassname = "."+hashstring;
var tabidname = ".admission-mainsection .tab-content #"+hashstring;

var hashtag  = "#"+hashstring;
if (hashtag == '#overview' || hashtag == '#setimpdates' || hashtag == '#nri' || hashtag == '#eligibility' || hashtag == '#set' || hashtag == '#cancellationpolicy' || hashtag == '#admissionprocess' || hashtag == '#admissionguidelines' || hashtag == '#seatdistribution' || hashtag == '#feesstructure' || hashtag == '#documentsrequired' || hashtag == '#importantinstruction' || hashtag == '#importantdates' || hashtag == '#academicbreak' || hashtag == '#scholarships')
{
  
$(".menus .mainmenu li").removeClass("highlight");

	if(tabclassname == '.importantdates')
   {
       var tabclassname = ".importantdates";
       var tabidname = ".tab-content #importantdates";
   }
   else if(tabclassname == '.importantinstruction'){
    var tabclassname = ".importantinstruction";
       var tabidname = ".tab-content #importantinstruction";
   }
   else if(tabclassname == '.admissionguidelines'){
    var tabclassname = ".admissionguidelines";
       var tabidname = ".tab-content #admissionguidelines";
   }
    else if(tabclassname == '.setimpdates')
   {
       var tabclassname = ".set";
       var tabidname = ".tab-content #set";
   }
//    $(".admission_menu").addClass("highlight");

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


  