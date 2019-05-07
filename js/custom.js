$(document).on('click touchend', '.customNavLink', function(e) {
    e.preventDefault();
    var hrefval = $(this).attr('data-page'),
        hrefval2 = $(this).attr('href');
    // alert(hrefval[0]);
    // $('body').addClass(hrefval[0])
    $('.opPage').addClass(hrefval);
    $('.opPage').addClass('active ');
    setTimeout(function() {
        window.location.href = hrefval2;
    }, 1200);
}).on('focus', ".mat-input", function() {
    $(this).parent().addClass("is-active is-completed");
}).on('focusout', ".mat-input", function() {
    if ($(this).val() === "") {
        $(this).parent().removeClass("is-completed");
        $(this).parent().removeClass("is-active");
    } else {
        $(this).parent().addClass("is-completed");
        $(this).parent().addClass("is-active");
    }
}).on('click touchend', ".mat-label", function() {
    $(this).parent().addClass("is-active is-completed");
}).on('click', '#submit', function(e) {
    e.preventDefault();
    CONTACT.formSubmit();
});
document.addEventListener("DOMContentLoaded", function(event) {
    var elements = {
        burger: document.getElementsByClassName("hamburger")[0],
        icon: document.getElementsByClassName("hamburger__icon")[0],
        nav: document.getElementsByTagName("nav")[0]
    };

    elements.burger.onclick = function() {
        elements.icon.classList.toggle("open");
        elements.nav.classList.toggle("open");
    };
});

var CONTACT = {
    init: function() {
        setTimeout(function() { $('nav span.line').css({ left: $('nav li .active').offset().left, top: ($('nav li .active').offset().top + $('nav li .active').outerHeight()) }); }, 1000);
        CONTACT.events();
        $('.slide').each(function(index) {
            $('.pagination').append('<a href="#' + (index + 1) + '" data-slide="' + (index) + '">' + (index + 1) + '</a>')
        });
        $('.slideDown').each(function(index) {
            if ($(window).width() > 768) {
                $(this).css({ opacity: 1, transform: 'translate(0,0)', 'transition-delay': ((index / 10) + 's') });
            } else {
                $(this).css({ opacity: 1, transform: 'translate(0,0)' });
            }
        })
        CONTACT.nextSlide(2);
        setTimeout(function() { $('nav span.line').css({ width: $('nav li .active').outerWidth(), transition: 'all ease 0.5s' }); }, 1200);
        //       $('.pagination a:first-child,.carou .slide:first-child').addClass('active');
        //       $('.carou .slide:first-child i em').css({transform: 'translateY(100%)'});
        // setTimeout(function(){$('.carou .slide:first-child i em').css({transform: 'translateY(0%)', transition: 'all ease 0.5s'})},1000);
    },
    events: function() {
        $(document).on('click', '.pagination a', function(e) {
            // e.preventDefault();
            // var index = $(this).attr('data-slide');
            // CONTACT.nextSlide(index);
        }).on('keydown', function(e) {
            // var slideIndex = $('.slide.active').index();
            // console.log(slideIndex);
            // switch (e.which) {
            //     case 32: // Space
            //         slideIndex = (slideIndex == 3) ? 0 : slideIndex + 1;
            //         // CONTACT.nextSlide(slideIndex)
            //         break;
            //     case 37: // left
            //         slideIndex = (slideIndex == 0) ? 3 : slideIndex - 1;
            //         // CONTACT.nextSlide(slideIndex)
            //         break;

            //     case 38: // up
            //         slideIndex = (slideIndex == 0) ? 3 : slideIndex - 1;
            //         // CONTACT.nextSlide(slideIndex)
            //         break;

            //     case 39: // right
            //         slideIndex = (slideIndex == 3) ? 0 : slideIndex + 1;
            //         // CONTACT.nextSlide(slideIndex)
            //         break;

            //     case 40: // down
            //         // console.log(slideIndex);
            //         slideIndex = (slideIndex == 3) ? 0 : slideIndex + 1;
            //         console.log(slideIndex);
            //         // CONTACT.nextSlide(slideIndex)
            //         break;

            //     default:
            //         // console.log(123);
            //         return; // exit this handler for other keys
            // }
            // e.preventDefault(); // prevent the default action (scroll / move caret)
            // // console.log(slideIndex);
            // CONTACT.nextSlide(slideIndex)
        }).on('click', '#submit', function() {
            CONTACT.formSubmit();
        }).on('mouseover', 'nav li a', function() {
            // $(this).css({opacity: 0});
            $('nav span.line').css({ width: $(this).outerWidth(), left: $(this).offset().left, top: ($(this).offset().top + $(this).outerHeight()) });
        }).on('mouseout', 'nav li a', function() {
            // $(this).css({opacity: 0});
            $('nav span.line').css({ width: $('nav li .active').outerWidth(), left: $('nav li .active').offset().left, top: ($('nav li .active').offset().top + $('nav li .active').outerHeight()) });
        });;
        // $(window).bind('mousewheel', function(event) {
        //     var slideIndex = $('.slide.active').index();
        //     if (event.originalEvent.wheelDelta >= 0) {
        //         // console.log('Scroll up');
        //         slideIndex = (slideIndex == 1) ? slideIndex = 4 : slideIndex - 1;
        //     } else {
        //         // console.log('Scroll down');
        //         slideIndex = (slideIndex == 4) ? slideIndex = 1 : slideIndex + 1;
        //     }
        //     CONTACT.nextSlide(slideIndex)
        // });
    },
    resize: function() {},
    load: function() {},
    nextSlide: function(i) {
        // console.log(12);
        $('.casing').css({ overflow: 'hidden' });
        $('.casing .element').css({ transform: 'translateY(-110%)' })
        setTimeout(function() { $('.casing .element').css({ transition: 'unset' }) }, 1000);
        // setTimeout(function(){$('i em').css({transform: 'translateY(0%)', transition: 'all ease 0.5s'})},1000)


        $('.slide').removeClass('active').siblings('.slide').eq(i).addClass('active');
        $('.pagination a').removeClass('active').siblings('a').eq(i).addClass('active');


        $('.active .casing .element').css({ transform: 'translateY(110%)' });
        setTimeout(function() { $('.active .casing .element').css({ transform: 'translateY(0%)', transition: 'all ease 0.5s' }); }, 1000);
        setTimeout(function() { $('.active .casing').css({ overflow: 'unset' }); }, 2000);

    },

    formSubmit: function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var project = $('input[name=formradio]:checked').val();
        console.log(email);
        // var boatowner = $("#boatowner").val();
        // var model = $("#model").val();
        // var message = $("#message").val();
        if (!project || project == 'default') {
            // console.log("name")
            // $("#name").focus().parent().addClass('is-error')
            $('label.error').html("Please select project");
            return false;
        } else {
            $('label.error').html("");
        }
        if (!email) {
            // console.log("email")
            $("#email").focus().parent().addClass('is-error');
            $('label.error').html("Please fill the email field");
            return false;
        } else if (!CONTACT.validateEmail(email)) {

            $("#email").focus().parent().addClass('is-error');
            $('label.error').html("Please enter valid email id");
            return false;
        } else {
            $("#email").parent().removeClass('is-error');
            $('label.error').html('');
        }
        if (!name) {
            console.log("name")
            $("#name").focus().parent().addClass('is-error')
            $('label.error').html("Please fill the name field");
            return false;
        } else {
            $("#name").parent().removeClass('is-error')
            $('label.error').html('');
        }
        $('label.error').html('');
        data = {
            name: name,
            email: email,
            project: project,
            // model: model,
            // message: message,
        };
        $('#submit').attr('disabled', true).addClass('send').val('Sending...');
        console.log(data)
        $.ajax({
            type: "POST",
            url: "email.php",
            data: data,
            success: function(response) {
                $('#submit').attr('disabled', false).removeClass('send').val('Submit');
                $('label.error').html("THANK YOU! We will get in touch with you shortly.").css({ 'display': 'block' }).addClass('success');
            },
            error: function(response) {
                $('#submit').attr('disabled', false).removeClass('send').val('Submit');
                alert('There was a problem. Please try again');
            },
            complete: function(response) {}
        });
    },
    validateEmail: function(email) {
        var re = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
        return re.test(String(email).toLowerCase());
    }
}

if ($('#workPage').length) {
    if ($(window).width() < 768) {
        $('#services').addClass('fp-auto-height')
        $('nav').find('li').removeClass('slideDown');
    }
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        onLeave: function(origin, destination, direction) {
            $('body').css({ background: $('.section').eq(destination - 1).attr('data-bg') });
            console.log(destination);
            if (destination.index != 0) {
                $('nav').addClass('scroll');
            } else { $('nav').removeClass('scroll'); }
        },
        afterLoad: function(origin, destination, direction) {
            // var eleId  = '#'+ destination;
            // console.log(eleId);
            // $('.section.active').find('.number').animate({ opacity: 1 }, 800).siblings('.album-title').delay(300).animate({ opacity: 1 }, 800);

            setTimeout(function() { $('nav span.line').css({ left: $('nav li .active').offset().left, top: ($('nav li .active').offset().top + $('nav li .active').outerHeight()) }); }, 1000);
            $('.section.active .slideUp').each(function(index) {
                if ($(window).width() > 768) {
                    $(this).css({ opacity: 1, transform: 'translate(0,0)', 'transition-delay': ((index / 10) + 's') });
                } else {
                    $(this).css({ opacity: 1, transform: 'translate(0,0)' });
                }
            })
            $('.slideDown').each(function(index) {
                if ($(window).width() > 768) {
                    $(this).css({ opacity: 1, transform: 'translate(0,0)', 'transition-delay': ((index / 10) + 's') });
                } else {
                    $(this).css({ opacity: 1, transform: 'translate(0,0)' });
                }
            })
            setTimeout(function() { $('nav span.line').css({ width: $('nav li .active').outerWidth(), transition: 'all ease 0.5s' }); }, 1200);

        },
    });
    if ($(window).width() > 768) {
        $('.scroll-pane').jScrollPane({
            alwaysShowVScroll: false
        });
    }

    $('nav li a').mouseover(function() {
        // $(this).css({opacity: 0});
        $('nav span.line').css({ width: $(this).outerWidth(), left: $(this).offset().left, top: ($(this).offset().top + $(this).outerHeight()) });
    }).mouseout(function() {
        // $(this).css({opacity: 0});
        $('nav span.line').css({ width: $('nav li .active').outerWidth(), left: $('nav li .active').offset().left, top: ($('nav li .active').offset().top + $('nav li .active').outerHeight()) });
    });
}