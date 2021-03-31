$(document).ready(function() {
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
  // else{
  //     ("#cu-overlay").removeClass("overlay-visible");
  // }
 
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

 if ($('#home-slider .carousel-item  p').is(':empty')) { 
        $('#home-slider .carousel-item  .uni-banner-heading').css("margin","0");
    }



});