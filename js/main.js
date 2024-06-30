$(function () {
	var mixer = mixitup('.directions-list')

	$('.directions-filter-btn').on('click', function name() {
		$('.directions-filter-btn').removeClass('directions-filter-btn--active')
		$(this).addClass('directions-filter-btn--active')
	})

	$('.team-slider').slick({
		arrows: false,
		slidesToShow: 4,
		draggable: false,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					arrows: false,
					draggable: true,
				},
			},
		],
	})
	$('.team-slider-prev').on('click', function (e) {
		e.preventDefault()
		$('.team-slider').slick('slickPrev')
	})
	$('.team-slider-next').on('click', function (e) {
		e.preventDefault()
		$('.team-slider').slick('slickNext')
	})

	$('.testimonials-slider').slick({
		arrows: false,
		draggable: false,
		dots: true,
		appendDots: $('.testimonials-dots'),
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 700,
				settings: {},
			},
		],
	})
	$('.testimonials-prev').on('click', function (e) {
		e.preventDefault()
		$('.testimonials-slider').slick('slickPrev')
	})
	$('.testimonials-next').on('click', function (e) {
		e.preventDefault()
		$('.testimonials-slider').slick('slickNext')
	})

	$('.program-acc-link').on('click', function (e) {
		e.preventDefault()
		$(this).toggleClass('program-acc-link--active')
		$(this).children('.program-acc-text').slideToggle()
	})

	$(
		'.header-nav-list a, .header-top-btn, .footer-go-top, .footer-item-link'
	).on('click', function (e) {
		e.preventDefault()
		var id = $(this).attr('href'),
			top = $(id).offset().top
		$('body,html').animate({ scrollTop: top }, 1000)
	})

	$('.burger').on('click', function (e) {
		e.preventDefault()
		$('.header-top-inner').toggleClass('header-top-open')
		$('.overlay').toggleClass('overlay--show')
		$('.close-btn').toggleClass('close')
		$('.burger').toggleClass('active')
	})

	setInterval(() => {
		if ($('span').hasClass('close')) {
			$('.burger').css('')
		}
	}, 0)

	setInterval(() => {
		if (
			$(window).scrollTop() > 0 &&
			$('.header-top-inner').hasClass('header-top-open') === false
		) {
			$('.burger').addClass('burger--follow')
		} else {
			$('.burger').removeClass('burger--follow')
		}
	}, 0)

	$('.footer-top-title--slide').on('click', function () {
		$(this).next().slideToggle()
	})
})
