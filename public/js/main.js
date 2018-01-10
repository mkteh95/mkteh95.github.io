$(document).ready(function() {
    var offset = $('#header').height();
    
    $('body').scrollspy({
        offset: offset
    });
    
    $('#banner').css('height', $(window).outerHeight());

    $('#navbar-tabs ul li a').on('click', function(e) {
        e.preventDefault();
        $('#header').height()
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - offset + 1
        }, 300);
    });
    
    window.onhashchange = function() {
        e.preventDefault();
    }

    $('.nav a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
    
    $('.card .preview .overlay').on('click', function() {
        $(this).prev().addClass('show');
        $('body').addClass('lock');
    });
    
    $('.full-modal .close-modal-btn').on('click', function() {
        $(this).closest('.full-modal').removeClass('show');
        $('body').removeClass('lock');
    })
    
    $('#send-msg-btn').on('click', function(e) {
        e.preventDefault();
        
        $('#contact form .form-control').each(function() {
            var error = null;
            
            if ($.trim($(this).val()) === '') {
                error = 'Please enter a value.';
                $(this).parent().addClass('has-error');
                $(this).next().text('Please enter a value.');
            } else  {
                switch($(this).attr('type')) {
                    case 'email':
                        if (!$(this).val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                            error = 'Please enter a valid email address.'
                        }
                }
            }
            
            if (error !== null) {
                $(this).parent().addClass('has-error');
                $(this).next().text(error);
            } else {
                $(this).parent().removeClass('has-error');
                $(this).next().text('');
            }
        });
        
        if ($('#contact form .form-group.has-error').length === 0) {
            var form = $('#contact form')[0]

            $.ajax({
                url: 'https://formspree.io/mkteh95@hotmail.com',
                method: 'POST',
                data: {
                  name: form.name.value,
                  _replyto: form._replyto.value,
                  message: form.message.value,
                  _subject: form._subject.value
                },
                dataType: 'json',
                success: function() {
                    $('#dismissable-alert').text('MESSAGE SUCCESSFULLY SENT!').addClass('show');
                    setTimeout(function() {
                        $('#dismissable-alert').removeClass('show');
                    }, 5000);
                },
                error: function() {
                    $('#dismissable-alert').text('FAILED TO SEND MESSAGE!').addClass('show');
                    setTimeout(function() {
                        $('#dismissable-alert').removeClass('show');
                    }, 5000);
                }
            })
        }
    });
    
    $(window).scroll();
});