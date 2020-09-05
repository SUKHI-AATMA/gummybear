var docHei = $(document).height(),
    docWid = $(document).width(),
    winWid = $(window).width(),
    winHei = $(window).height(),
    ftHei = $('footer').outerHeight(true);
$(document).ready(function() {
    $('nav .hamburger').on('click', function() {
        $('body').toggleClass('active');
        inViewport($('footer'));
    });
    var pgName = location.href.split("/").slice(-1),
        pgNames = pgName[0].split(".");
    $('body').attr('data-page', (pgNames.length > 1) ? pgNames[0] : 'home');
    // if (pgNames[0] == 'index-new') {
    //     $('body').attr('data-page', 'home');
    // }
    var d = 100;
    setTimeout(function() {
        $('.mainTitle i').map(function() {
            $(this).delay(d).animate({ opacity: 1 }, 0);
            d = d + 100;
        });
    }, 1000);

    // console.log(pgName[0].indexOf('prj_'));
    if (winWid > 767) {
        (pgName[0].indexOf('prj_') >= 0) ? $('.banner .container').css({ height: winHei }): $('.banner.work').css({ height: winHei });
    } else {
        //First section height without top margin
        $('#fullpage .intro').css({height: winHei - parseInt($('#fullpage').css('marginTop')) });

        //Auto play video
        $('video').attr('autoplay',true);

        if($('#fullpage').length == 0)
        {
            $('section.banner').css({height: winHei - parseInt($('section.banner').css('marginTop'))  });
        }
       
    }

});

function inViewport($el) {
    var elH = $el.outerHeight(),
        H = $(window).height(),
        r = $el[0].getBoundingClientRect(),
        t = r.top,
        b = r.bottom;
    var fvh = Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H));
    // console.log(fvh);
    if (!$('body').hasClass('active')) {
        $('.lftHeader,.rgtHeader, .grid').css({ height: $(window).height() - fvh });
        $('.btmCopy').fadeOut();
    } else {
        $('.lftHeader,.rgtHeader, .grid').css({ height: '100%' });
        $('.btmCopy').delay(100).fadeIn();
    }
}
// function ftrHdrAnim() {
//     var ftHei = inViewport($('footer'));
//     console.log(ftHei);
//     // var scrltp = (docHei - winHei) - ftHei,
//     //     headerHei = $(document).scrollTop() - scrltp;
//     // var rect = ftr[0].getBoundingClientRect();
//     // var isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50) ? true : false;
//     // console.log(scrltp);
//     // if (isVisible) {
//     //     if ($(document).scrollTop() > scrltp && !$('body').hasClass('active')) {
//     //         $('.lftHeader,.rgtHeader').css({ height: winHei - headerHei });
//     //     } else {
//     //         $('.lftHeader,.rgtHeader').css({ height: '100%' });
//     //     }
//     // }
// }

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
    if ($('#fullpage').length == 0  || ($('#fullpage').length > 0 && winWid < 768) ) {
        if ($(window).scrollTop() < 200) {
            $('.logo .a').css({ fill: '#e00909' });
            $('.btmCopy i').css({ color: '#e00909' });
        } else {
            $('.logo .a').css({ fill: '#FFCF31' });
            $('.btmCopy i').css({ color: '#FFCF31' });
        }
    }
    if(winWid < 768)
    {
        if($(document).scrollTop() > 200)
        {
            $('body').addClass('pageScrolled');
        }
        else
        {
            $('body').removeClass('pageScrolled');
        }
        if($(document).scrollTop() > 20)
        {
            $('.tagLine').fadeOut();
        }
        else
        {
            $('.tagLine').fadeIn();
        }

    }
}

if ($('#fullpage').length && winWid > 767) {
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        onLeave: function(origin, destination, direction) {
            if (destination.index < 2) {
                $('.logo .a').css({ fill: '#e00909' })
                $('.btmCopy i').css({ color: '#e00909' })
            } else {
                $('.logo .a').css({ fill: '#FFCF31' })
                $('.btmCopy i').css({ color: '#FFCF31' })
            }
            // console.log(destination.index)
            // if ($(destination.item).attr('id') == "footer") {
            // } else {
            // }
            if (destination.index == ($('.section').length - 1) && direction == 'down') {
                // console.log(1);
                // $('.grid').css({ height: (winHei - $(destination.item).outerHeight()) })
                $('.rgtHeader, .lftHeader, .grid').animate({ height: $(window).outerHeight(true) - $('footer').outerHeight(true) }, 100, 'linear');
                $('.btmCopy').fadeOut();
            } else if (destination.index == ($('.section').length - 2) && direction == 'up') {
                // console.log(2);
                // inViewport($('footer'));
                $('.rgtHeader, .lftHeader, .grid').animate({ height: $('.logoSection').outerHeight(true) }, 100, 'linear');
                $('.btmCopy').fadeOut();
            } else {
                // console.log(3);
                // $('.grid').css({ height: '100%' })
                $('.rgtHeader, .lftHeader, .grid').animate({ height: $(window).outerHeight(true) }, 100, 'linear');
                $('.btmCopy').delay(100).fadeIn();
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
            if (!$(destination.item).hasClass('video')) {
                $('.section.video.active .close').trigger('click');
            }
            if ($(destination.item).hasClass('video')) {
                var player;
                if ($(destination.item).hasClass('mossyBees')) {
                    player = document.getElementById('mossy');
                } else {
                    player = document.getElementById('bbs');
                }

                $(destination.item).find('.prjTitle').animate({ opacity: 0 }, 300, '', function() {
                    // setTimeout(function() {
                    // $(destination.item).find('.prjTitle').animate({ width: 0, padding: 0 }, 500);
                    if ($(destination.item).hasClass('mossyBees')) {
                        $(destination.item).find('.prjImg').css({ width: '100%', position: 'sticky', top: 0, left: 0, height: $(window).height() }).find('video').css({ width: '100%' });
                    } else {
                        $(destination.item).find('.prjImg').css({ width: '100%', position: 'sticky', top: 0, left: 0, height: $(window).height() }).find('video').css({ width: '60%' });
                    }
                    $('.grain,.grid').fadeOut(300);
                    $('.lftHeader').animate({ left: '-11%' }, 300);
                    $('.rgtHeader').animate({ right: '-10%' }, 300);
                    $('section.fpage').animate({ margin: '0%', width: '100%' }, 300);
                    $(destination.item).find('.close').fadeIn(300);
                    // if($(destination.item).hasClass('mossyBees'))
                    // {
                    player.play();
                    $(destination.item).find('.prjTitle').addClass('overlayTitle');
                    //                 position: fixed !important;
                    // opacity: 1 !important;
                    // z-index: 100 !important;
                    // width: auto !important;
                    // }
                    // }, 500)
                });
                $(destination.item).find('.close').on('click', function() {
                    // if($(destination.item).hasClass('mossyBees'))
                    // {
                    player.pause();
                    // }
                    if (winWid >= 1366) {
                        vidWidth = $(destination.item).hasClass('mossyBees') ? '100%' : '160%';
                    } else {
                        vidWidth = '100%';
                    }
                    $(destination.item).find('.close').fadeOut(300);
                    $('section.fpage').animate({ margin: '0 8% 0 10%', width: '82%' }, 300);
                    $('.rgtHeader').animate({ right: '0' }, 300);
                    $('.lftHeader').animate({ left: '0' }, 300);
                    $(destination.item).find('.prjImg').css({ width: '60%', position: 'static', top: 0, left: 0, height: 'unset' }).find('video').css({ width: vidWidth });
                    $(destination.item).find('.prjTitle').removeClass('overlayTitle').animate({ width: '40%', padding: '0 0 0 5%' }, 500);
                    $(destination.item).find('.prjTitle').animate({ opacity: 1 }, 300);
                    $('.grain,.grid').fadeIn(300);
                });
                // var lft = $('.section.video.active').offset().left - $('.section.video.active').find('.prjImg').position().left;
                // var lft = $(window).width() - $('.section.video.active').find('.prjImg').position().left - $('.section.video.active .prjImg iframe').outerWidth(true);
                // $('.section.video.active').find('iframe').css({ width: $('.section.video.active').outerWidth(true), height: $('.section.video.active').outerHeight(true), top: 0, left: lft })
            }
        },
        afterLoad: function(origin, destination, direction) {
            // console.log(destination.index);
            onScrollDiv();
            // console.log($('.fp-completely').hasClass('video'));
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
    // if (winWid > 767) {
        var clList = ['.title', '.pageSubTitle', '.text', 'img', '.mainTitle', '.position', '.desc']
        clList.forEach(function(item, index) {
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
                    if (index != 3) {
                        animELe.classList.remove('upTxt');
                        animELe.classList.remove('downTxt');
                    } else {
                        animELe.classList.add('animate');
                    }
                    // animELe.classList.add('focusedTxt');
                    // animELe.removeAttribute('data-anime');
                    // }
                }
            }

        });
    // }
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
    // $('.position').each(function() {
    //     if ($(this).outerWidth() < $(this).siblings('.title').outerWidth()) {
    //         $(this).css({ width: $(this).siblings('.title').outerWidth() }).parents('.name').css({ width: $(this).siblings('.title').outerWidth() })
    //     } else {
    //         $(this).siblings('.title').css({ width: $(this).outerWidth() }).parents('.name').css({ width: $(this).outerWidth() })
    //     }
    // })
    setTimeout(function() { onScrollDiv() }, 0);
    setTimeout(function() { animateText(); }, 500);

}).on('scroll', function() {
    onScrollDiv()
    setTimeout(function() { animateText(); }, 500);
    if ($('#fullpage').length == 0) {
        if(winWid > 767)
        {
            inViewport($('footer'));
        }
    }
}).on('resize', function() {
    // if(data-page == home)
});