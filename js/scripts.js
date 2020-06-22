$(document).ready(function() {
    $('nav .hamburger').on('click', function() {
        $('body').toggleClass('active');
        ftrHdrAnim();
    });
    var pgName = location.href.split("/").slice(-1),
        pgNames = pgName[0].split(".");
    $('body').attr('data-page', pgNames.length > 1 ? pgNames[0] : 'home');

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
    var scrltp = docHei - winHei - ftHei,
        headerHei = $(document).scrollTop() - scrltp;
    // console.log(headerHei);
    if ($(document).scrollTop() > scrltp && !$('body').hasClass('active')) {
        $('.lftHeader,.rgtHeader').css({ height: winHei - headerHei });
    } else {
        $('.lftHeader,.rgtHeader').css({ height: '100%' });
    }
}