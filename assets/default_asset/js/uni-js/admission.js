$(document).ready(function() {

//Admission scripts
$("#admsn-verticaltabs li.vertical-link").click(function() {
    $("#admsn-verticaltabs").toggleClass("admmns-open");
  });
                  
  //For admission tabs active
  var header = document.getElementById("admsn-verticaltabs");
  var btns = header.getElementsByClassName("vertical-link");

  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("sksactive");
          current[0].className = current[0].className.replace(" sksactive", "");
          this.className += " sksactive";
      });
  }
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
});

// TO make admission tabs active on windown onload
$(window).on('load', function(){
    // $(".admission_menu").removeClass("highlight");

var hashstring = localStorage.getItem("hashstring");

var tabclassname = "."+hashstring;
var tabidname = ".admission-mainsection .tab-content #"+hashstring;

var hashtag  = "#"+hashstring;
if (hashtag == '#overview' || hashtag == '#setimpdates' || hashtag == '#nri' || hashtag == '#eligibility' || hashtag == '#set' || hashtag == '#cancellationpolicy' || hashtag == '#admissionprocess' || hashtag == '#admissionguidelines' || hashtag == '#seatdistribution' || hashtag == '#feesstructure' || hashtag == '#documentsrequired' || hashtag == '#importantinstruction' || hashtag == '#importantdates' || hashtag == '#academicbreak' || hashtag == '#scholarships' )
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
   $(".admission_menu").addClass("highlight");

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