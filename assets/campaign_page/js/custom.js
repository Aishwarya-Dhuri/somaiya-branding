 $(document).ready(function(){
            $('#lightgallery').lightGallery();
            });
            
$(".Count").each(function() {
    $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2e3,
        easing: "swing",
        step: function(i) {
            $(this).text(Math.ceil(i))
        }
    })
});

new WOW().init();