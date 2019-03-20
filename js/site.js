$(document).ready(function () {

	// Variables
	var $codeSnippets = $('.code-example-body'),
		$nav = $('.navbar'),
		$body = $('body'),
		$window = $(window),
		$popoverLink = $('[data-popover]'),
		navOffsetTop = $nav.offset().top,
		$document = $(document),
		entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		}

	function init() {
		$window.on('scroll', onScroll)
		$window.on('resize', resize)
		$popoverLink.on('click', openPopover)
		$document.on('click', closePopover)
		$('a[href^="#"]').on('click', smoothScroll)
		buildSnippets();
	}

	function smoothScroll(e) {
		e.preventDefault();
		$(document).off("scroll");
		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 40
		}, 0, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	}

	function openPopover(e) {
		e.preventDefault()
		closePopover();
		var popover = $($(this).data('popover'));
		popover.toggleClass('open')
		e.stopImmediatePropagation();
	}

	function closePopover(e) {
		if ($('.popover.open').length > 0) {
			$('.popover').removeClass('open')
		}
	}

	$("#button").click(function () {
		$('html, body').animate({
			scrollTop: $("#elementtoScrollToID").offset().top
		}, 2000);
	});

	function resize() {
		$body.removeClass('has-docked-nav')
		navOffsetTop = $nav.offset().top
		onScroll()
	}

	function onScroll() {
		if (navOffsetTop < $window.scrollTop() && !$body.hasClass(
				'has-docked-nav')) {
			$body.addClass('has-docked-nav')
		}
		if (navOffsetTop > $window.scrollTop() && $body.hasClass(
				'has-docked-nav')) {
			$body.removeClass('has-docked-nav')
		}
	}

	function escapeHtml(string) {
		return String(string).replace(/[&<>"'\/]/g, function (s) {
			return entityMap[s];
		});
	}

	function buildSnippets() {
		$codeSnippets.each(function () {
			var newContent = escapeHtml($(this).html())
			$(this).html(newContent)
		})
	}

	$("#logo-bon-apart").click(function () {
		if ($('#bonapart').css('display') == 'none') {
			$("#bonapart").removeClass("invis");
		} else {
			$("#bonapart").addClass("invis");
		}
	});

	$("#logo-psmw").click(function () {
		if ($('#psmw').css('display') == 'none') {
			$("#psmw").removeClass("invis");
		} else {
			$("#psmw").addClass("invis");
		}
	});

	$("#logo-herrngarten").click(function () {
		if ($('#herrngarten').css('display') == 'none') {
			$("#herrngarten").removeClass("invis");
		} else {
			$("#herrngarten").addClass("invis");
		}
	});

	$("#logo-heimatstore").click(function () {
		if ($('#heimatstore').css('display') == 'none') {
			$("#heimatstore").removeClass("invis");
		} else {
			$("#heimatstore").addClass("invis");
		}
	});

	$("#logo-murk").click(function () {
		if ($('#murk').css('display') == 'none') {
			$("#murk").removeClass("invis");
		} else {
			$("#murk").addClass("invis");
		}
	});

	$("#logo-gehrig").click(function () {
		if ($('#gehrig').css('display') == 'none') {
			$("#gehrig").removeClass("invis");
		} else {
			$("#gehrig").addClass("invis");
		}
	});

	$("#logo-baehr").click(function () {
		if ($('#baehr').css('display') == 'none') {
			$("#baehr").removeClass("invis");
		} else {
			$("#baehr").addClass("invis");
		}
	});

	$(".close").click(function () {
		$("#bonapart").addClass("invis");
		$("#psmw").addClass("invis");
		$("#herrngarten").addClass("invis");
		$("#heimatstore").addClass("invis");
		$("#murk").addClass("invis");
		$("#gehrig").addClass("invis");
		$("#baehr").addClass("invis");
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$("#bonapart").addClass("invis");
			$("#psmw").addClass("invis");
			$("#herrngarten").addClass("invis");
			$("#heimatstore").addClass("invis");
			$("#murk").addClass("invis");
			$("#gehrig").addClass("invis");
			$("#baehr").addClass("invis");
		}
	});

	var animateButton = function (e) {

		e.preventDefault;
		//reset animation
		e.target.classList.remove('animate');

		e.target.classList.add('animate');
		setTimeout(function () {
			e.target.classList.remove('animate');
		}, 700);
	};

	var bubblyButtons = document.getElementsByClassName("bubbly-button");

	for (var i = 0; i < bubblyButtons.length; i++) {
		bubblyButtons[i].addEventListener('click', animateButton, false);
	}

	// cookieconsent
	window.addEventListener("load", function () {
		window.cookieconsent.initialise({
			"palette": {
				"popup": {
					"background": "#000",
					"text": "#CCA64D"
				},
				"button": {
					"background": "#CCA64D"
				}
			},
			"position": "bottom-right",
			"content": {
				"message": "This website uses cookies to ensure you get the best experience on our website. ",
				"dismiss": "Yes Sir!"
			}
		})
	});

	// enllax parallax

	$('.parallax-container').enllax();

	// Scroll down hero banner
	$('#scroll-down').click(function () {
		$('html,body').animate({
				scrollTop: $("#about").offset().top
			},
			800, 'linear');
	});

	// Navigation animation
	$('#toggle').click(function () {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
	});

	init();

});
