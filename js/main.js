(function($) {

	"use strict";

	// Init modtion
	var modtion = {};

	// Portfolio Filter
	modtion.portfolioFilter = {
		// Item container
		container: $('#portfolio .projects-wrapper .project-items'),
		// Init function
		init: function() {
			// Checking if all images are loaded
			modtion.portfolioFilter.container.imagesLoaded(function() {
				// Init isotope once all images are loaded
	            modtion.portfolioFilter.container.isotope({
	                itemSelector: '#portfolio .projects-wrapper .project-items .single-item',
	                layoutMode: 'masonry',
	                transitionDuration: '0.8s'
	            });
	            // Forcing a perfect masonry layout after initial load
	            modtion.portfolioFilter.container.isotope('layout');
	            // Filter items when the button is clicked
	            $('#portfolio .projects-wrapper .project-filters a').on('click', function () {
	            	// Remove the active class from the previous element
	                $('#portfolio .projects-wrapper .project-filters a.active').removeClass('active');
	                // Add the active class to the button clicked
	                $(this).addClass('active');
	                // Data filter
	                var selector = $(this).attr('data-filter');
	                modtion.portfolioFilter.container.isotope({
	                    filter: selector
	                });
	                setTimeout(function () {
	                    modtion.portfolioFilter.container.isotope('layout');
	                }, 6);
	                return false;
	            });
	        });
	    } 
	};

	// Skill Progress
	modtion.skillProgress = {
		bottomOfObject: "",
		bottomOfWindow: "",
		completedCounting: 0,
		count: function() {
			$('.skills-wrapper .single-skill').each(function() {
				var skillPercent = $(this).find('.percentage').data('percent');
				$(this)
					.find('.percentage')
					.countTo({
						from: 0,
						to: skillPercent,
						speed: 1500
					})
				$(this)
					.find('.progress-wrapper .progress')
					.css({
						'width': skillPercent + '%',
						'transition': 'width 2s linear'
					});
			});
			this.completedCounting = 1;
		},
		init: function() {
			if(this.completedCounting == 0) {
				this.bottomOfObject = $('.skills-wrapper .single-skill:nth-of-type(1)').offset().top + $('.skills-wrapper .single-skill:nth-of-type(1)').outerHeight();
				this.bottomOfWindow = $(window).scrollTop() + modtion.pageResolution.pageHeight;
				if(this.bottomOfWindow > this.bottomOfObject) {
					this.count();
				}
			}
		}
	};

	// Fun Fact Progress
	modtion.funFactProgress = {
		bottomOfObject: "",
		bottomOfWindow: "",
		completedCounting: 0,
		count: function() {
			$('.fun-facts .single-fun-fact').each(function() {
				var funFactVal = $(this).find('.fun-fact-value').data('value');
				$(this)
					.find('.fun-fact-value')
					.countTo({
						from: 0,
						to: funFactVal,
						speed: 1500
					})
			});
			this.completedCounting = 1;
		},
		init: function() {
			if(this.completedCounting == 0) {
				this.bottomOfObject = $('.fun-facts .single-fun-fact:nth-of-type(1)').offset().top + $('.fun-facts .single-fun-fact:nth-of-type(1)').outerHeight();
				this.bottomOfWindow = $(window).scrollTop() + modtion.pageResolution.pageHeight;
				if(this.bottomOfWindow > this.bottomOfObject) {
					this.count();
				}
			}
		}
	};

	// Page Resolution
	modtion.pageResolution = {
		pageHeight: "",
		container: "",
		pageWidth: "",
		init: function() {
			this.pageHeight = $(window).height();
			this.containerHeight = $(document).height();
			this.pageWidth = $(window).width();
		}
	};

	// Reading Indicator
	modtion.readingIndicator = {
		target: $('#top-header'),
		progressBar: $('.reading-indicator .indicator-progress'),
		init: function() {
			if($(window).scrollTop() > 0) {
				this.target.addClass('fixed');
			} else {
				this.target.removeClass('fixed');
			}
		  	var adjustedHeight = modtion.pageResolution.containerHeight - modtion.pageResolution.pageHeight;
		    var value = (($(window).scrollTop() / adjustedHeight) * 100);
		    this.progressBar.css("width", value + "%");
		}
	};

	// Pre Loader
	modtion.preLoader = function(duration) {
		$('.pre-loader').fadeOut(parseInt(duration, 10));
	};

	// Replace Viewport Height
	// Solves the issue about the viewport height on mobile devices as when the page loads
	modtion.replaceVHeight = function() {
		$('html').css({
			'height': modtion.pageResolution.pageHeight
		});
	};

	// Use OnePageNav 
	modtion.useOnePageNav = function() {
		$('#main-menu, #menu-overlay').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
			},
			end: function() {
				$('#device-dummy').remove();
				$('#main-menu, #menu-overlay').removeClass('active');
			}
		});
	};

	// Use Magnific Popup
	modtion.useMagnificPopup = function() {
		// For portfolio item
		$('.project-items .single-item .project-preview .overlay').magnificPopup({
			delegate: '.view-more',
			type: 'inline',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			fixedContentPos: true,
		    callbacks: {
		    	beforeOpen: function() { 
		    		$('html').addClass('mfp-helper'); 
		    	},
		    	close: function() { 
		    		$('html').removeClass('mfp-helper'); 
		    	}
		  	}
		});
	};

	// Process Contact Form
	modtion.processContactForm = function() {
		var form = $('#contact .form-wrapper form[name="contact"]'),
			message = $('#contact .form-wrapper .alert'),
			formData;

		// Success Function
		var doneFunc = function(response) {
			message.text(response);
			message
				.removeClass('alert-danger')
				.addClass('alert-success')
				.fadeIn(1500);
			setTimeout(function() {
				message.fadeOut();
			}, 3000);
			form.find('input:not([type="submit"]), textarea').val('');
		};

		// Fail Function
		var failFunc = function(jqXHR, textStatus, errorThrown) {
			if(jqXHR.status === 400) {
				message.text(jqXHR.responseText);
			} else {
				message.text(jqXHR.statusText);
			}
			message
				.removeClass('alert-success')
				.addClass('alert-danger')
				.fadeIn(1500);
			setTimeout(function() {
				message.fadeOut();
			}, 3000);
		};

		// Form On Submit 
		form.on('submit', function(e) {
			e.preventDefault();
			formData = $(this).serialize();
			$.ajax({
				type: 'POST',
				url: form.attr('action'),
				data: formData
			})
			.done(doneFunc)
			.fail(failFunc);
		});
	};

	// Scroll Down Button On Click
	$('#scroll-down').on('click', function(e) {
		e.preventDefault();
		var target = $('#about').offset().top - 15;
		$('html,body').animate({
      		scrollTop: target,
      	}, 1200);
	});

	// Contact Button On Click
	$('.contact-button').on('click', function(e) {
		e.preventDefault();
		var target = $('#contact').offset().top - 15;
		$('html,body').animate({
      		scrollTop: target,
      	}, 1200);
	});

	// Prevent Default 'a[href=""]' click
	$('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

	// Hamburger Menu On Click
	$('#hamburger-menu').on('click', function() {
		$('#menu-overlay').addClass('active');
	});

	// Close Button On Menu Overlay On Click
	$('#menu-overlay #close-menu-overlay').on('click', function() {
		$('#menu-overlay').removeClass('active');
	});

	// Window On Scroll
	$(window).on('scroll', function() {
		modtion.pageResolution.init(),
		modtion.readingIndicator.init(),
		modtion.skillProgress.init(),
		modtion.funFactProgress.init();
	});

	// Window On Resize
	$(window).on('resize', function() {
		modtion.pageResolution.init(),
		modtion.replaceVHeight(),
		modtion.readingIndicator.init();
	});

	// Device Orientation Changes
	window.addEventListener("orientationchange", function() {
		modtion.pageResolution.init(),
		modtion.readingIndicator.init(),
		modtion.portfolioFilter.container.isotope('layout');
	}, false);

	// Window On Load 
	$(window).on('load', function() {
		modtion.preLoader(1000);
	});

	// Document Ready
	$(document).ready(function() {
		modtion.pageResolution.init(),
		modtion.readingIndicator.init(),
		modtion.replaceVHeight(),
		modtion.portfolioFilter.init(),
		modtion.processContactForm(),
		modtion.skillProgress.init(),
		modtion.funFactProgress.init(),
		modtion.useMagnificPopup(),
		modtion.useOnePageNav();
	});	

})(jQuery);

/* Theme Switcher */
jQuery('#skin_toggler').on('click', function(){
    if(jQuery("link[id='skin']").attr('href') == 'css/skins/light.css') {
		$("#skin_toggler_text").addClass('glow');			// Changing Theme Toggler Text Color
		jQuery("link[id='skin']").attr('href', 'css/skins/dark.css');
		jQuery("#def-rect").attr('fill', '#f5821f'); 		// Matching Music Bars color with Theme
    } else {
		$("#skin_toggler_text").removeClass('glow');		// Changing Theme Toggler Text Color
		jQuery("link[id='skin']").attr('href', 'css/skins/light.css');
		jQuery("#def-rect").attr('fill', '#ff3860'); 		// Matching Music Bars color with Theme
	}
});

/* Typed JS */ 
var typed = new Typed('#typed_element', {
	strings: ["UI/UX Designer And Developer", "Frontend Designer", "Backend Developer"],
	typeSpeed: 0,
	backSpeed: 0,
	backDelay: 1000,
	startDelay: 100,
	loop: true,
});

/* Background Music */

// Initializing Music
$(document).ready(function(){
	audio = new Audio();
	audio.src = "craddles_sub_urban.mp3";
	audio.loop = true;
	audio.volume = 0.07;
	audio.pause();
});

jQuery('#music_player').on('click', function(){
	if (audio.paused == false) {
		audio.pause();
		$("#def-rect_text").removeClass('glow');		// Changing Music Toggler Text Color
		$("#symbol").removeClass('d-none');				// Toggle Header Symbol | HIDE
		$("#music_bars").addClass('d-none');			// Toggle Animation Music Bars | SHOW
	} else {
		audio.play();
		$("#def-rect_text").addClass('glow');			// Changing Music Toggler Text Color
		$("#symbol").addClass('d-none');				// Toggle Header Symbol |SHOW
		$("#music_bars").removeClass('d-none');			// Toggle Animation Music Bars |HIDE
	}
});


// Animation
$(document).ready(function ($) {
	var bars = $('.music-bar .bar');
  
	var tl = (new TimelineMax()).staggerTo(bars, .3, {
	  y: -10,
	  repeat:-1,
	  paused: false,
	  yoyo:true,
	  ease: Quad.easeInOut}, .25
	).play();
  
	// $('.music-bar').on('click', function(){
	//   tl.isActive() ? pause() : tl.play(); 
	// });
  
	// function pause() {
	//   tl.pause();
	//   TweenMax.to(bars, .7, {
	// 	y: 0,
	// 	ease: Quad.easeOut}
	//   );
	// }
});