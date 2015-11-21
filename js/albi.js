/*
 * Helper JS from StartBootsrap(http://startbootstrap.com)
 */

//jQuery za srušiti navbar kod scrollanja
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery za scrollanje(POTRENBNO: jQuery Easing plugin; dodan u skripte)
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Zatvara responzivni izbornik na klik itema u izborniku(kod malih ekrana)
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});