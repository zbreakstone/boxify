$(document).ready(function(e){
	$('.nav-link').click(function(){
		$(this).toggleClass('open');
		$('.overlay.menu-overlay').toggleClass('open');
	});

	$('.logo a, .overlay ul li > a, .bottom-nav ul > li > a').bind('click', function(e) {
	    e.preventDefault();
	    $('html,body').animate({scrollTop: $(this.hash).offset().top - 0}, 1000);                                                         
	});
});

