$(document).ready(function() {
    $('nav .hamburger').on('click', function() {
        $(this).parent('nav').toggleClass('active');
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
$(window).on('scroll', function() {});