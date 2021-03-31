$(document).ready(function() {
//Menu script
"use strict";
$('.menus > ul > li:has( > ul)').addClass('menu-dropdown-icon');
$('.menus > ul > li > ul:not(:has(ul))').addClass('normal-sub');
// $(".menus > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");
$(".menus > ul > li").hover(function(e) {
    if ($(window).width() > 959) {
      
        $(this).children("ul").stop().fadeToggle(200);
        e.preventDefault();
    }
});
$(".menus > ul > li").click(function() {
    if ($(window).width() <= 959) {
        $(this).children("ul").fadeToggle(200);
        $(this).toggleClass("act");
        $(this).find('a').toggleClass("arw");
        $(this).siblings().find('a').removeClass("arw");
        $(this).siblings().removeClass("act");
        $(this).siblings().children("ul").hide();
    }
    else{
        ("#cu-overlay").removeClass("overlay-visible");
    }
   
});
$(".menu-mobile").click(function(e) {
    $(".menus > ul").toggleClass('show-on-mobile');
     $("body").toggleClass("overflow_hide");
     $("#cu-overlay").toggleClass("overlay-visible");

    e.preventDefault();
});

$("#cu-overlay").click(function() {
    $("body").removeClass("overflow_hide");
    $(".mainmenu ").removeClass("show-on-mobile");
    $(this).removeClass("overlay-visible");
});
   

$(window).resize(function() {
    
    $(".megamenu .menus > ul > li").children("ul").hide();
    $(".megamenu .menus > ul > li").removeClass('show-on-mobile');
});


//Plus minus working properly
// $(".megamenu .menus > ul > li").click(function(){
//     $(this).toggleClass("act");
//     $(this).find('a').toggleClass("arw");
//     $(this).siblings().find('a').removeClass("arw");
//     $(this).siblings().removeClass("act");
//     $(this).siblings().children("ul").hide();
// });



$(".more-links").click(function () {
    $(".more-links").toggleClass("open")
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
	
	
	$("#balance1 .carousel-control-next").click(function(){
    $("#balance2 .carousel-control-next").click(); 
  
});
    
//hover tab menu

//    $('.tab_menu .nav-tabs > li > a').hover(function() {
//   $(this).tab('show');

// });
//   $(window).load(function(){
//     $('.tab_menu a[href="#home"]').tab('show');
// });


}); //Document ready End