
new WOW().init();

$(function() {

	// toggle tooltips
	$('[data-toggle="tooltip"]').tooltip({
		container: 'body'
	});

	// map

	if ($('.bc-map').length) {
		// style: light
		var styleLight = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aabcc4"},{"visibility":"on"}]}];

		var styleIceGray = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

		function mapInit() {
			var mapOptions = {
				zoom: 16,
				disableDefaultUI: true,
				scrollwheel: true,
				zoomControl: true,
				mapTypeControl: false,
				styles: styleIceGray,
				center: {lat: -34.397, lng: 150.644}
			},
			$mapElement = $('#bc-map')[0],
			address = $('#bc-map').data('addr'),
			map = new google.maps.Map($mapElement, mapOptions),
			geocoder = new google.maps.Geocoder();

			geocoder.geocode({'address': address}, function(results, status) {
			  if (status === google.maps.GeocoderStatus.OK) {
			    map.setCenter(results[0].geometry.location);
			    var marker = new google.maps.Marker({
			      map: map,
			      position: results[0].geometry.location
			    });
			  } else {
			    alert('Geocode was not successful for the following reason: ' + status);
			  }
			});
		}

		mapInit();
	}
	
	// back to top button
	// $('.js-back-to-top').on('click', function(e){
	// 	e.preventDefault();

	// 	$('html, body').animate({
	// 		scrollTop: 0
	// 	}, 'fast');
	// });
});