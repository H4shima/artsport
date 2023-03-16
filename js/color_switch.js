$(document).ready(function () {
	$('.single__colors li').on('click', function () {
		var imgSrc = $(this).data('image');
		$('.single__image img').attr('src', imgSrc);
	});
});