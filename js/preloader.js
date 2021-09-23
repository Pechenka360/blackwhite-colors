$(window).on('load', function() {

    $('a').click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $('.preloader').stop(true).delay(600).fadeIn('slow', redirectPage);
        $('.preloader').delay(1000).fadeOut('slow');
    });

    function redirectPage() {
		window.location = linkLocation;
	}

    $('.preloader').delay(1000).fadeOut('slow');
});