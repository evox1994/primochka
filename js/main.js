$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('.mobile-menu .nav li.li-drop').removeClass('active');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$('.face-slider').slick({
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3100,
		pauseOnHover: false,
		pauseOnFocus: false
	});

	$(document).on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top;

		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

	function ScrollEl(){
		if ( $('.b-scroll-block').length ){
			var ww = $(window).width();
			if (ww > 768){
				var st = $(window).scrollTop();
				$('.b-scroll-block').each(function(){
					var $banner = $(this).find('.b-scroll-el');
					var vg = $(this).offset().top - 30;
					var ng = vg + $(this).outerHeight() - $banner.outerHeight();
					$(this).css('min-height',$banner.outerHeight());
					if ( st > vg ){
						if ( st > ng ){
							$banner.removeClass('scroll').addClass('bottom');
						} else {
							$banner.addClass('scroll').removeClass('bottom');
						}
					} else {
						$banner.removeClass('scroll').removeClass('bottom');
					}
				});
			} else {
				$('.b-scroll-el').removeClass('scroll');
				$('.b-scroll-el').removeClass('bottom');
				$('.b-scroll-block').removeAttr('style');
			}
		}
	}
	ScrollEl();

	$(window).on('scroll',function(){
		ScrollEl();
	});

	$(window).resize(function(){
		ScrollEl();
	});

});