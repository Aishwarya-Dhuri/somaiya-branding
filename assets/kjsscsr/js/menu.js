(function() {
    var $body, CU;

    CU = {};

    $body = $('body');

    window.visible = false;

    window.sub_visible = false;

    window.menudropdown = false;

    window.searching = false;

    CU.menu = {
        mobile_reset: function() {
            $('body').removeClass('blue');
            this.reset();
            window.visible = false;
            return window.sub_visible = false;
        },
        reset: function() {
            $('body').removeClass('blue');
            $('.menudropdown').removeClass('active');
            return window.menudropdown = false;
        },
        expose: function(target) {
            this.reset();
            $('body').addClass('blue');
            target.addClass('active');
            return window.menudropdown = true;
        },
        mouseover_timer: function() {},
        mouseout_timer: function() {},
        init: function() {
            var self;
            self = this;
            var windowwidth = $(window).width();
            // console.log(windowwidth);
            if(windowwidth > 767)
            {
                $('.eduhover').on('mouseover', function() {
                    var $this;
                    $this = $(this);
                    clearTimeout(self.mouseout_timer);
                    if (window.menudropdown) {
                        //return self.expose($this);
                        return self.mouseover_timer = setTimeout(function() {
                            return self.expose($this);
                        }, 50);
                    } else {
                        return self.mouseover_timer = setTimeout(function() {
                            return self.expose($this);
                        }, 50);
                    }
                }).on('mouseout', function() {
                    clearTimeout(self.mouseover_timer);
                    return self.mouseout_timer = setTimeout(function() {
                        return self.reset();
                    }, 1000);
                });
            }
            else
            {
                console.log('mobile');
               
                $('.eduhover').on('click', function() {
                   
                    if($(this).hasClass('active'))
                    {
                        $('body').removeClass('blue');
                        $(this).removeClass('active');
                        $(this).closest('.eduhover').find(".arrow-down").removeClass('is-hidden');
                        $(this).closest('.eduhover').find(".arrow-up").addClass('is-hidden');
                    }
                    else
                    {
                        $('.menudropdown').removeClass('active');
                        $('body').addClass('blue');
                        $(this).addClass('active');
                        $(this).closest('.eduhover').find(".arrow-down").addClass('is-hidden');
                        $(this).closest('.eduhover').find(".arrow-up").removeClass('is-hidden');
                        $([document.documentElement, document.body]).animate({
                        scrollTop: $(this).offset().top
                        }, 500);
                    }
                });

            }
            // $('.eduhover').on('focus', function() {
            //     if (!window.menudropdown) {
            //         self.reset();
            //         $('body').addClass('blue');
            //         $('.menudropdown').removeClass('active');
            //         return $(this).parent().addClass('active');
            //     }
            // });
        }
    };

    $(document).ready(function() {
        CU.menu.init();
    });
}).call(this);