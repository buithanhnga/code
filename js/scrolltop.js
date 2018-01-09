document.ready = scrolltop();
function scrolltop(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 220) {
            $('#scrolltop').fadeIn(500);
        } else {
            $('#scrolltop').fadeOut(500);
        }
    });
    $('#scrolltop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
}