function join_newsletter_list(type) {
    var req_email           = 'Please enter your email';
    var length_email        = 'Only 100 characters allowed';
    var valid_email         = 'Please enter valid email';

    var email_regex         = /^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i;

    var join_email          = $('#join_email').val();
    var check_join_result   = true;
    var join_form_state     = true;

    $('.joinemailstatus').html('');

    if(join_email == '')
    {
        $('.joinemailstatus').html('<span class="error">'+req_email+'</span>');
        join_form_state = false;
    }
    else
    {
        if(!join_email.match(email_regex)) {
            $('.joinemailstatus').html('<span class="error">'+valid_email+'</span>');
            join_form_state = false;
        }
    }

    if(join_form_state == true)
    {
        $.ajax({
            type: "POST",
            url: "/arigel_general/join_newsletter_list",
            async: false,
            data: {join_email : join_email, type : type},
            success: function(response){
                if(response == 1)
                {
                    if(type == 'media_coverages')
                    {
                        var msg = 'You are already signed up for media coverages.';
                    }
                    else if(type == 'media_list')
                    {
                        var msg = 'You are already subscribed to media list.';
                    }
                    else if(type == 'press_release')
                    {
                        var msg = 'You are already signed up for press releases.';
                    }
                    else if(type == 'alumni_overview')
                    {
                        var msg = 'You are already signed up for alumni overview.';
                    }

                    $('.joinemailstatus').html('<span class="error">'+msg+'</span>');
                }
                else if(response == 2)
                {
                    if(type == 'media_coverages')
                    {
                        var msg = 'You are successfully sign up for media coverages.';
                    }
                    else if(type == 'media_list')
                    {
                        var msg = 'You are successfully subscribed to media list.';
                    }
                    else if(type == 'press_release')
                    {
                        var msg = 'You are successfully sign up for press releases.';
                    }
                    else if(type == 'alumni_overview')
                    {
                        var msg = 'You are successfully subscribe for alumni newsletter.';
                    }

                    $('.joinemailstatus').html('<span class="success">'+msg+'</span>');
                }
                else if(response == 0)
                {
                    if(type == 'media_coverages')
                    {
                        var msg = 'Unable to sign up for media coverages.';
                    }
                    else if(type == 'media_list')
                    {
                        var msg = 'Unable to subscribe to media list.';
                    }
                    else if(type == 'press_release')
                    {
                        var msg = 'Unable to sign up for press release.';
                    }
                    else if(type == 'alumni_overview')
                    {
                        var msg = 'Unable to sign up for alumni overview.';
                    }
                    
                    $('.joinemailstatus').html('<span class="error">'+msg+'</span>');
                }
            }
        });
    }
}