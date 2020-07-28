var docHei = $(document).height(),
    winHei = $(window).height(),
    ftHei = $('footer').outerHeight(true);
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
function ftrHdrAnim() {
    var scrltp = docHei - winHei - ftHei,
        headerHei = $(document).scrollTop() - scrltp;
    console.log(scrltp);
    if ($(document).scrollTop() > scrltp && !$('body').hasClass('active')) {
        $('.lftHeader,.rgtHeader').css({ height: winHei - headerHei });
    } else {
        $('.lftHeader,.rgtHeader').css({ height: '100%' });
    }
}
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

if($('#fullpage').length)
{
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
            $('.section.video.active .close').trigger('click');
        },
        afterLoad: function(origin, destination, direction) {
            console.log(destination.index);
            onScrollDiv();
            // console.log($('.fp-completely').hasClass('video'));
            if (destination.index == 2 || destination.index == 4) {
                var iframe = document.querySelector('iframe');
                var player = new Vimeo.Player(iframe);

                $('.section.video.active .prjTitle').animate({ opacity: 0 }, 300, '', function() {
                    setTimeout(function() {
                        $('.section.video.active .prjTitle').animate({ width: 0, padding: 0 }, 500);
                        $('.section.video.active .prjImg').css({ width: '100%', position: 'sticky', top: 0, left: 0, height: $(window).height() }).find('video').css({width:'60%'});
                        $('.grain').fadeOut(300);
                        $('.lftHeader').animate({ left: '-10%' }, 300);
                        $('.rgtHeader').animate({ right: '-10%' }, 300);
                        $('section.fpage').animate({ margin: '0%', width: '100%' }, 300);
                        $('.section.video.active .close').fadeIn(300);
                        if(destination.index == 2)
                        {
                            player.play();
                        }
                    }, 500)
                });
                $('.section.video.active .close').on('click', function() {
                    if(destination.index == 2)
                    {
                        player.pause();
                    }
                    $('.section.video.active .close').fadeOut(300);
                    $('section.fpage').animate({ margin: '0 8% 0 10%', width: '82%' }, 300);
                    $('.rgtHeader').animate({ right: '0' }, 300);
                    $('.lftHeader').animate({ left: '0' }, 300);
                    $('.section.video.active .prjImg').css({ width: '60%', position: 'static', top: 0, left: 0, height: 'unset' }).find('video').css({width:'160%'});
                    $('.section.video.active .prjTitle').animate({ width: '40%', padding: '0 0 0 5%' }, 500);
                    $('.section.video.active .prjTitle').animate({ opacity: 1 }, 300);
                    $('.grain').fadeIn(300);
                });
                // var lft = $('.section.video.active').offset().left - $('.section.video.active').find('.prjImg').position().left;
                // var lft = $(window).width() - $('.section.video.active').find('.prjImg').position().left - $('.section.video.active .prjImg iframe').outerWidth(true);
                // $('.section.video.active').find('iframe').css({ width: $('.section.video.active').outerWidth(true), height: $('.section.video.active').outerHeight(true), top: 0, left: lft })
            }
        },
    });
}
// if($('body').attr('data-page') != 'home')
// {
//     var lastScrollTop = 0;
//     // $('.title, .text').addClass('upTxt');
//         var cls;
//     $(window).scroll(function(event) {
//         var st = $(this).scrollTop();
//         if (st > lastScrollTop) {
//             // downscroll code
//             cls= "upTxt";
//         } else {
//             cls= "downTxt";
//             // upscroll code
//         }
//         lastScrollTop = st;
//     });
//     $('.title').on('scrollSpy:enter', function() {
//         console.log($(this).text());
//         $(this).removeClass('upTxt').removeClass('downTxt').addClass('focusedTxt');
//     });
//     $('.title').on('scrollSpy:exit', function() {
//         console.log($(this).text());
//         $(this).addClass(cls);
//     });
// }
function animateText() {
    var clList = ['.title','.pageSubTitle','.text','img','.mainTitle','.position']
    clList.forEach(function(item, index){
        var anim = document.querySelectorAll(item);
        for (var i = 0, nbs = anim.length; i < nbs; i++) {
            var animELe = anim[i];
            var rect = animELe.getBoundingClientRect();
            var isVisible = ((rect.top - window.innerHeight) < 0 && (rect.bottom) > -50) ? true : false;

            // console.log(isVisible);
            if (isVisible) {
                // if (animELe.hasAttribute('data-anime')) {
                    // var classL = animELe.getAttribute('data-anime');
                    // var dataDelay = animELe.getAttribute('data-delay');
                    if(index != 3)
                    {
                        animELe.classList.remove('upTxt');
                        animELe.classList.remove('downTxt');
                    }
                    else
                    {
                        animELe.classList.add('animate');
                    }
                    // animELe.classList.add('focusedTxt');
                    // animELe.removeAttribute('data-anime');
                // }
            }
        }

    });
    // for (var i = 0, nbs = animT.length; i < nbs; i++) {
    //     var animELe = animT[i];
    //     var rect = animELe.getBoundingClientRect();
    //     var isVisible = ((rect.top - window.innerHeight) < 0 && (rect.bottom) > -50) ? true : false;

    //     // console.log(isVisible);
    //     if (isVisible) {
    //         // if (animELe.hasAttribute('data-anime')) {
    //             // var classL = animELe.getAttribute('data-anime');
    //             // var dataDelay = animELe.getAttribute('data-delay');
    //             animELe.classList.remove('upTxt');
    //             animELe.classList.remove('downTxt');
    //             // animELe.classList.add('focusedTxt');
    //             // animELe.removeAttribute('data-anime');
    //         // }
    //     }
    // }
    // for (var i = 0, nbs = animP.length; i < nbs; i++) {
    //     var animELe = animP[i];
    //     var rect = animELe.getBoundingClientRect();
    //     var isVisible = ((rect.top - window.innerHeight) < 0 && (rect.bottom) > -50) ? true : false;

    //     // console.log(isVisible);
    //     if (isVisible) {
    //         // if (animELe.hasAttribute('data-anime')) {
    //             // var classL = animELe.getAttribute('data-anime');
    //             // var dataDelay = animELe.getAttribute('data-delay');
    //             animELe.classList.remove('upTxt');
    //             animELe.classList.remove('downTxt');
    //             // animELe.classList.add('focusedTxt');
    //             // animELe.removeAttribute('data-anime');
    //         // }
    //     }
    // }
    // for (var i = 0, nbs = animI.length; i < nbs; i++) {
    //     var animELe = animI[i];
    //     var rect = animELe.getBoundingClientRect();
    //     var isVisible = ((rect.top - window.innerHeight) < 0 && (rect.bottom) > -50) ? true : false;

    //     // console.log(isVisible);
    //     if (isVisible) {
    //         // if (animELe.hasAttribute('data-anime')) {
    //             // var classL = animELe.getAttribute('data-anime');
    //             // var dataDelay = animELe.getAttribute('data-delay');
    //             animELe.classList.add('animate');
    //             // animELe.classList.remove('downTxt');
    //             // animELe.classList.add('focusedTxt');
    //             // animELe.removeAttribute('data-anime');
    //         // }
    //     }
    // }
}
$(window).on('load', function() {
    $('.position').each(function() {
        if ($(this).outerWidth() < $(this).siblings('.title').outerWidth()) {
            $(this).css({ width: $(this).siblings('.title').outerWidth() }).parents('.name').css({ width: $(this).siblings('.title').outerWidth() })
        } else {
            $(this).siblings('.title').css({ width: $(this).outerWidth() }).parents('.name').css({ width: $(this).outerWidth() })
        }
    })
    setTimeout(function() { onScrollDiv() }, 0);
    animateText();
}).on('scroll', function() {
    onScrollDiv()
    animateText();
    if($('body').attr('data-page') != 'home') {
        ftrHdrAnim();
    }
});