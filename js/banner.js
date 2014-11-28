var $win = $(window);
var $banner = $('.banner-img');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$banner.css('background-position', 'center ' + (scrollPos - 1500) / 2 + 'px');
});
