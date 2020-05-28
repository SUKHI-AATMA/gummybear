$(document).ready(function() {
    $('nav .hamburger').on('click', function() {
        $('body').toggleClass('active');
    });
    var pgName = location.href.split("/").slice(-1),
        pgNames = pgName[0].split(".");
    $('body').attr('data-page', pgNames.length > 1 ? pgNames[0] : 'home');
    $('.position').each(function() {
        if ($(this).outerWidth() < $(this).siblings('.title').outerWidth()) {
            $(this).css({ width: $(this).siblings('.title').outerWidth() })
        } else {
            $(this).siblings('.title').css({ width: $(this).outerWidth() })
        }
    }) // console.log(123);
    // var waypoints = $('#footer').waypoint({
    //     handler: function(direction) {
    //         notify(this.element.id + ' hit')
    //     }
    // })
});
$(window).on('scroll', function() {});