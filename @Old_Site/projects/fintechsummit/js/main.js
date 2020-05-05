/** For time remaining starts **/
window.onload = function () {
    var calcNewYear = setInterval(function () {
        date_future = new Date(new Date().getFullYear(), 8, 17);
        date_now = new Date();

        seconds = Math.floor((date_future - (date_now)) / 1000);
        minutes = Math.floor(seconds / 60);
        hours = Math.floor(minutes / 60);
        days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

        //document.getElementById("time").innerText = "Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
        document.querySelector(".days").getElementsByTagName("span")[0].innerText = days;
        document.querySelector(".hours").getElementsByTagName("span")[0].innerText = hours;
        document.querySelector(".minutes").getElementsByTagName("span")[0].innerText = minutes;
        document.querySelector(".seconds").getElementsByTagName("span")[0].innerText = seconds;
    }, 1000);

     /* Carousel Ticker starts */
     $('.carouselTicker').carouselTicker({
        speed: 2
    });
    /* Carousel Ticker ends */
}




/** For time remaining ends **/


$(document).ready(function () {

    //document.addEventListener('touchstart', handler, {capture: true});   

    // header
    $('.burger-menu > a').click(function () {
        $('.menu nav  ul').toggleClass('active');
        $('.burger-menu a span').toggleClass('open');
    });

    $('.menu nav  ul li a').click(function () {
        $('header .menu nav ul').removeClass('active');
        $('.burger-menu a span').removeClass('open');
    });

    // tab Delhi-Mumbai
    $('#eventProgram ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('#eventProgram .tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    // tab Delhi - Day1
    $('#eventProgram ul.inner-tabs li.evtDL').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.inner-tabs li.evtDL').removeClass('current');
        $('#eventProgram .evtDL-cont').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    // tab Mumbai - Day1 and Day2
    $('#eventProgram ul.inner-tabs li.evtMum').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.inner-tabs li.evtMum').removeClass('current');
        $('#eventProgram .evtMum-cont').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });


    // tab venue
    $('#venueDetails ul.tab li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tab li').removeClass('active');
        $('#venueDetails .tab-cont').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });


    // smooth page scroll with active
    $('header a').on('click', function (e) {
        e.preventDefault();

        var target = $(this).attr("href");
        console.log(target);
        var headerHeight = $('header').outerHeight();
        var targetOffset = $(target).offset().top - headerHeight;

        //console.log(headerHeight);

        $('html, body').stop().animate({
            scrollTop: targetOffset
        }, 2500, function () {
            location.hash = target - headerHeight;
        });

        return false;
    });


    // video banner
    var min_w = 300;
    var vid_w_orig;
    var vid_h_orig;

    $(function () {
        vid_w_orig = parseInt($("video").attr("width"));
        vid_h_orig = parseInt($("video").attr("height"));

        $(window).resize(function () {
            fitVideo();
        });
        $(window).trigger("resize");
    });

    function fitVideo() {
        $(".video-viewport").width($(".section-banner").width());
        $(".video-viewport").height($(".section-banner").height());

        var scale_h = $(".section-banner").width() / vid_w_orig;
        var scale_v = $(".section-banner").height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        if (scale * vid_w_orig < min_w) {
            scale = min_w / vid_w_orig;
        }

        $("video").width(scale * vid_w_orig);
        $("video").height(scale * vid_h_orig);

        $(".video-viewport").scrollLeft(
            ($("video").width() - $(".section-banner").width()) / 2
        );
        $(".video-viewport").scrollTop(
            ($("video").height() - $(".section-banner").height()) / 2
        );
    }



});


$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    var docViewBottom = scrollDistance + $(window).height() / 2;

    // Assign active class to nav links while scolling
    $('.section').each(function (i) {
        if ($(this).position().top <= docViewBottom) {
            $('.menu .menu-link.active').removeClass('active');
            $('.menu .menu-link').eq(i).addClass('active');
        }
    });

    
}).scroll();


// Logo hide and show
$(window).scroll(function () {
    if ($(this).scrollTop() < 500) {
       $('header .logo a').removeClass("show");
    } else {
        $('header .logo a').addClass("show");
    }
});


// Number Counter
var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    //console.log(oTop);

    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});


// about - icon effect
$(window).scroll(function () {
    //console.log($(window).scrollTop());

    if ($(window).scrollTop() >= $(".section-about").offset().top / 2) {
        $(".section-about .icon img").addClass('active');
    }
});