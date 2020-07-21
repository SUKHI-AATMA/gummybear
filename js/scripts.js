$(document).ready(function() {
    $('nav .hamburger').on('click', function() {
        $('body').toggleClass('active');
        ftrHdrAnim();
    });
    var pgName = location.href.split("/").slice(-1),
        pgNames = pgName[0].split(".");
    $('body').attr('data-page', (pgNames.length > 1) ? pgNames[0] : 'home');
    if (pgNames[0] == 'index-new') {
        $('body').attr('data-page', 'home');
    }

    $('.banner.work').css({ height: $(window).outerHeight() })
    // console.log(123);
    // var waypoints = $('#footer').waypoint({
    //     handler: function(direction) {
    //         notify(this.element.id + ' hit')
    //     }
    // })
});
var ftPosition = $('footer').position().top,
    docHei = $(document).height(),
    winHei = $(window).height(),
    ftHei = $('footer').outerHeight(true);
$(window).on('load', function() {
    $('.position').each(function() {
        if ($(this).outerWidth() < $(this).siblings('.title').outerWidth()) {
            $(this).css({ width: $(this).siblings('.title').outerWidth() }).parents('.name').css({ width: $(this).siblings('.title').outerWidth() })
        } else {
            $(this).siblings('.title').css({ width: $(this).outerWidth() }).parents('.name').css({ width: $(this).outerWidth() })
        }
    })
}).on('scroll', function() {
    // ftrHdrAnim();
});

function ftrHdrAnim() {
    // var scrltp = docHei - winHei - ftHei,
    //     headerHei = $(document).scrollTop() - scrltp;
    // // console.log(headerHei);
    // if ($(document).scrollTop() > scrltp && !$('body').hasClass('active')) {
    //     $('.lftHeader,.rgtHeader').css({ height: winHei - headerHei });
    // } else {
    //     $('.lftHeader,.rgtHeader').css({ height: '100%' });
    // }
}
window.addEventListener("scroll", function() { onScrollDiv() });
window.addEventListener("DOMContentLoaded", function() { setTimeout(function() { onScrollDiv() }, 0); });

function onScrollDiv() {
    var images = document.querySelectorAll('.lazyload');
    var anim = document.querySelectorAll('.animate');
    for (var i = 0, nb = images.length; i < nb; i++) {
        var img = images[i];
        var rect = img.getBoundingClientRect();
        var isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50) ? true : false;

        if (isVisible) {
            if (!img.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('lazyload');
            }
        }
    }
    // for (var i = 0, nbs = anim.length; i < nbs; i++) {
    //     var animELe = anim[i];
    //     var rect = animELe.getBoundingClientRect();
    //     var isVisible = ((rect.top - window.innerHeight) < 0 && (rect.bottom) > -50) ? true : false;

    //     // console.log(isVisible);
    //     if (isVisible) {
    //         if (animELe.hasAttribute('data-anime')) {
    //             var classL = animELe.getAttribute('data-anime');
    //             var dataDelay = animELe.getAttribute('data-delay');
    //             animELe.classList.add(classL);
    //             animELe.classList.add('delay-'+dataDelay);
    //             // animELe.removeAttribute('data-anime');
    //         }
    //     }
    // }
}

new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction) {
        if (destination.index == 7) {
            $('.rgtHeader, .lftHeader').animate({ height: $(window).outerHeight(true) - $('footer').outerHeight(true) }, 100, 'linear');
        } else {
            $('.rgtHeader, .lftHeader').animate({ height: $(window).outerHeight(true) }, 100, 'linear');
        }
        (direction == 'down') ?
        ($(origin.item).removeClass('down up').addClass('up'), $(destination.item).removeClass('down up').addClass('focused')) :
        ($(origin.item).removeClass('down up').addClass('down'), $(destination.item).removeClass('down up').addClass('focused'));
        goo.flow($(origin.item).attr('color'), "out", "up");
        setTimeout(function() {
            goo.flow($(destination.item).attr('color'), "in", "down");
        }, 500);
        setTimeout(function() {
            goo.flow($(destination.item).attr('color'), "out", "up");
        }, 900);
    },
    afterLoad: function(origin, destination, direction) {
        console.log(destination.index);
        onScrollDiv();
        // console.log($('.fp-completely').hasClass('video'));
        if (destination.index == 2) {
            // var lft = $('.section.video.active').offset().left - $('.section.video.active').find('.prjImg').position().left;
            var lft = $(window).width() - $('.section.video.active').find('.prjImg').position().left - $('.section.video.active .prjImg iframe').outerWidth(true);
            // $('.section.video.active').find('iframe').css({ width: $('.section.video.active').outerWidth(true), height: $('.section.video.active').outerHeight(true), top: 0, left: lft })
        } else { 
            $('.video').find('iframe').css({ width: '100%', height: '100%', top: 0, left: 0 }) 
        }
    },
});