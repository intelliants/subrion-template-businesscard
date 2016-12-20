
new WOW().init();

$(function() {

	// toggle tooltips
	$('[data-toggle="tooltip"]').tooltip({
		container: 'body'
	});

	// sticky nav
	if($('.js-nav-sticky').length) {
		var $window = $(window),
			$navbar = $('.js-nav-sticky'),
			$inventory = $('.inventory'),
			navbarHeight = $navbar.outerHeight(),
			navbarPos = $navbar.position();

		$window.scroll(function () {
			if($window.scrollTop() >= (navbarPos.top)) {
				$navbar.addClass('is-sticky');
				$inventory.css('margin-bottom', navbarHeight);
			} else {
				$navbar.removeClass('is-sticky');
				$inventory.removeAttr('style');
			}
		});
	}

	// back to top button
	var $button = $('.js-back-to-top'),
		$window = $(window);

	$window.scroll(function() {
		var pos = $window.scrollTop();

		if (pos > 200) {
			$button.addClass('is-visible');
		} else {
			$button.removeClass('is-visible');
		}
	});

	$button.on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 'fast');

		$button.removeClass('is-visible');
	});
});