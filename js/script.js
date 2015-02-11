$(document).ready(function(){
	$('.nav-link').click(function(){
		$(this).toggleClass('open');
		$('.overlay.menu-overlay').toggleClass('open');
	});
});

