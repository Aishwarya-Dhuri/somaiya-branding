$(document).ready(function() {
    $('.carousel').carousel({
        //interval:false
    });
    new WOW().init();

    //Menu script
"use strict";
$('.menus > ul > li:has( > ul)').addClass('menu-dropdown-icon');
$('.menus > ul > li > ul:not(:has(ul))').addClass('normal-sub');
// $(".menus > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");
$(".menus > ul > li").hover(function(e) {
    if ($(window).width() > 959) {
      // $(".menus > ul > li > .normal-sub").css("display","none");
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
 if (screen.width < 980) {
  $(".option-heading").click(function() {
    $(".option-content").slideUp(500);
    $(".arrow-up").addClass('is-hidden');
    $(".arrow-down").removeClass('is-hidden');
    $(this).next(".option-content").stop().slideToggle(500);
    $(this).find(".arrow-up, .arrow-down").toggle();
    });
}





$("#demo1 .carousel-control-next").click(function(){
    $("#demo2 .carousel-control-next").click(); 
  
});
$("#demo1 .carousel-control-prev").click(function(){
    $("#demo2 .carousel-control-prev").click(); 
  
});

$('#demo1').carousel({
  interval: 3000,
  cycle: true
}); $('#demo2').carousel({
  interval: 3000,
  cycle: true
}); 




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
            		
		 $("#admsn-verticaltabs li.vertical-link").click(function() {
        $("#admsn-verticaltabs").toggleClass("admmns-open");
    });
	
     //Academic programme page 
    $(".acprgrm-tabs .pagenav").click(function(){
        $(".acprgrm-tabs .pagenav").removeClass('list-active');        
        $(".acprgrm-tabs li.page_item").removeClass('innerlist-active');
        $(this).addClass('list-active');        
    });
  

     $(".acprgrm-tabs .pagenav  a").click(function(){
        $(".acprgrm-tabs .pagenav  a").removeClass('active');
     
    });

     $(".acprgrm-tabs .pagenav.pg-listitem").click(function(){
        $(".ug-bannersec").css("display","none");
        $(".minors-bannersec").css("display","none");
        $(".certificate-bannersec").css("display","none");
        $(".pg-bannersec").css("display","block");     
    });

    $(".acprgrm-tabs .pagenav.ug-listitem").click(function(){    
        $(".pg-bannersec").css("display","none");    
        $(".minors-bannersec").css("display","none"); 
        $(".certificate-bannersec").css("display","none");
        $(".ug-bannersec").css("display","block");
    });

    $(".acprgrm-tabs .pagenav.certificate-listitem").click(function(){    
        $(".pg-bannersec").css("display","none");    
        $(".minors-bannersec").css("display","none"); 
        $(".ug-bannersec").css("display","none");
        $(".certificate-bannersec").css("display","block");
    });

    $(".acprgrm-tabs .pagenav ul li.page_item.minors-listitem").click(function(){
       $(".pg-bannersec").css("display","none");   
       $(".ug-bannersec").css("display","none");
      $(".certificate-bannersec").css("display","none");
       $(".minors-bannersec").css("display","block"); 
       $(".acprgrm-tabs .pagenav").removeClass('list-active');
       $(".acd-prgm-right .tab-content .tab-pane").removeClass('active');
       $(".acd-prgm-right .tab-content #minors-tab").addClass('active');
       return false;
   });

   $(".acprgrm-tabs .pagenav ul li.page_item.honours-listitem").click(function(){      
        $(".pg-bannersec").css("display","none");    
        $(".minors-bannersec").css("display","none"); 
         $(".certificate-bannersec").css("display","none");
        $(".ug-bannersec").css("display","block");
        $(".acprgrm-tabs .pagenav").removeClass('list-active');
        $(".acd-prgm-right .tab-content .tab-pane").removeClass('active');
       $(".acd-prgm-right .tab-content #honours-tab").addClass('active');
      return false;
  });

     $(".acprgrm-tabs li.page_item").click(function(){
        $(".acprgrm-tabs li.page_item").removeClass('innerlist-active');
        $(this).addClass('innerlist-active');    
       
        $(".acprgrm-tabs .pagenav.hassubmenu").removeClass('list-active');
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

//    $('.tab_menu .nav-tabs > li > a').hover(function() {
//   $(this).tab('show');

// });
//   $(window).load(function(){
//     $('.tab_menu a[href="#home"]').tab('show');
// });

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

//academic programme js
 $(".acprgrm-tabs .pagenav  a").click(function(){
        $(".acprgrm-tabs .pagenav  a").removeClass('active');
 });
	
 if ($('#home-slider .carousel-item  p').is(':empty')) { 
        $('#home-slider .carousel-item  .uni-banner-heading').css("margin","0");
    }

    $(".academics_megamenu .child-menu  a").click(function(e) {
      e.preventDefault();
     
      var url = $(this).attr('href');
          
      var hashstring1 = url.split('#')[1];
      
      localStorage.setItem("hashstring1", hashstring1);
      
      location.reload(true);
      window.location.replace(url.split('#')[0]);
    });


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


var jump=function(e)
        {
        if (e){
            e.preventDefault();
            var hashstring = $(this).attr("href");
        }else{
            // var target = location.hash;
            var hashstring = url.split('#')[1];
        }

        $('html,body').animate(
        {
            scrollTop: $(hashstring).offset().top
        },2000,function()
        {
            // location.hash = target;
            localStorage.setItem("hashstring", hashstring);
        });

        }

    //var url = document.location.toString();
    var url = window.location.href.toString();
    if (url.match('#')) {
        $('.admission-mainsection .nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
        $('.admission-mainsection .nav-tabs .vertical-link').removeClass('sksactive');
        $('.admission-mainsection .nav-tabs a[href="#' + url.split('#')[1] + '"]').parent().addClass('sksactive');
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
      
    } 

    // Change hash for page-reload
    $('.admission-mainsection .nav-tabs a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    });

}); //Document ready End


// TO make admission tabs active on windown onload
$(window).on('load', function(){

var hashstring = localStorage.getItem("hashstring");

var tabclassname = "."+hashstring;
var tabidname = ".admission-mainsection .tab-content #"+hashstring;

var hashtag  = "#"+hashstring;
if (hashtag == '#overview' || hashtag == '#nri' || hashtag == '#eligibility' || hashtag == '#set' || hashtag == '#cancellationpolicy' || hashtag == '#admissionprocess' || hashtag == '#admissionguidelines' || hashtag == '#seatdistribution' || hashtag == '#feesstructure' || hashtag == '#documentsrequired' || hashtag == '#importantinstruction' || hashtag == '#importantdates' || hashtag == '#academicbreak')
{

  $(".menus .mainmenu li").removeClass("highlight");
   $(".admission_menu").addClass("highlight");

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


var hashstring1 = localStorage.getItem("hashstring1");

var tabclassname = "."+hashstring1;
var tabidname = ".acd-prgm-right .tab-content #"+hashstring1;

var hashtag  = "#"+hashstring1; 

        if (hashtag == '#undergraduate-tab' || hashtag == '#minors-tab' || hashtag == '#honours-tab' || hashtag == '#postgraduate-tab' || hashtag == '#certificate-tab'){
           
            $(".menus .mainmenu li").removeClass("highlight");
            $(".academics_megamenu ").addClass("highlight");

            $('.acprgrm-tabs  li').removeClass("list-active");
             $('.acprgrm-tabs  li a').removeClass("active");

            $('.tab-content .tab-pane').removeClass("active");
            $(tabclassname).addClass('active');

            if( $('.acprgrm-tabs  li').hasClass("hassubmenu")){
                $('.acprgrm-tabs  li').removeClass("list-active");
                $(tabclassname).parent().addClass('innerlist-active');
            }
           

            $(tabclassname).parent().addClass('list-active');
            $(tabidname).addClass('active');

            var position = $(hashtag).offset().top;
            console.log("position : "+ position);

            $('html, body').animate({
                scrollTop: position
            }, 2000);
        }
        else if(hashtag == '#minors-tab' || hashtag == '#honours-tab'){
            $('.acprgrm-tabs  li').removeClass("list-active");
             $('.acprgrm-tabs  li a').removeClass("active");
             $('.acprgrm-tabs  li ul li').addClass('list-active');
        }

        if (hashtag == '#undergraduate-tab'){
            $(".pg-bannersec").css("display","none");    
            $(".minors-bannersec").css("display","none"); 
            $(".certificate-bannersec").css("display","none");
            $(".ug-bannersec").css("display","block");
        }
        else if(hashtag == '#minors-tab'){
            $(".pg-bannersec").css("display","none");   
            $(".ug-bannersec").css("display","none");
            $(".certificate-bannersec").css("display","none");
            $(".certificate-bannersec").css("display","none");
            $(".minors-bannersec").css("display","block"); 
        }
        else if(hashtag == '#honours-tab'){
            $(".pg-bannersec").css("display","none");    
            $(".minors-bannersec").css("display","none"); 
            $(".certificate-bannersec").css("display","none");
            $(".ug-bannersec").css("display","block");
        }
        else if(hashtag == '#postgraduate-tab'){
            $(".ug-bannersec").css("display","none");
            $(".minors-bannersec").css("display","none");
            $(".certificate-bannersec").css("display","none");
            $(".pg-bannersec").css("display","block"); 
        }
        else{
            $(".pg-bannersec").css("display","none");    
            $(".minors-bannersec").css("display","none"); 
            $(".ug-bannersec").css("display","none");
            $(".certificate-bannersec").css("display","block");
        }

        localStorage.removeItem("hashstring1");

});


