'use strict';

jQuery(document).ready(function ($) {
	// If you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1000;

	// Move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function () {
		!window.requestAnimationFrame ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	/*
  * NOTE: Mobile Navigation
  * Opens lateral menu when hamburger icon is clicked
  */
	$('.ttu-nav-trigger').on('click', function (event) {
		event.preventDefault();

		// Testing to see if the navigation is open or not
		if ($('.ttu-main-content').hasClass('nav-is-visible')) {

			// Closing navigation if it is open
			closeNav();
			$('.ttu-overlay').removeClass('is-visible');
		} else {

			// Adding necessary classes to show navigation and push page content left
			$(event.target).closest('.ttu-nav-trigger').addClass('nav-is-visible');

			// Getting the width of the navigation
			var navWidth = $('.ttu-primary-nav').width();
			// Pulling the navigtion off screen to the right
			$('.ttu-primary-nav').css('right', '-' + navWidth + 'px');
			// Adding the visibilty class
			$('.ttu-primary-nav').addClass('nav-is-visible');
			// Sliding in the navigation from the right
			$('.ttu-primary-nav').animate({
				right: '0'
			}, 160, 'linear');

			$('.ttu-main-header').addClass('nav-is-visible');
			$('.ttu-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
				return $('body').addClass('overflow-hidden');
			});

			// Making sure the search bar is hidden
			toggleSearch('close');

			// Adding the overlay over main content
			$('.ttu-overlay').addClass('is-visible');
		}
	});

	/*
  * NOTE: Mobile Submenu Items
  * Goes back when back button is clicked
  */
	$('.go-back').on('click', function (event) {
		event.preventDefault();
		$(event.target).closest('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});

	/*
  * NOTE: Mobile Navigation
  * Closes the lateral menu when screen is swiped or they click outside the navigation
  */
	$('.ttu-overlay').on('click swiperight', function () {
		if ($('.ttu-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			toggleSearch('close');
			$('.ttu-overlay').removeClass('is-visible');
		}
	});
	$('.nav-on-left .ttu-overlay').on('swipeleft', function () {
		if ($('.ttu-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.ttu-overlay').removeClass('is-visible');
		}
	});

	// Prevent default clicking on direct children of .ttu-primary-nav
	$('.ttu-primary-nav').children('.has-children').children('a').on('click', function (event) {
		return event.preventDefault();
	});

	// Open submenu
	$('.has-children').children('a').on('click', function (event) {

		// Checking width of the window and preventing default
		if (!checkWindowWidth()) event.preventDefault();

		var selected = $(event.target);

		// Showing submenu if it's hidden, closing it if not
		if (selected.next('ul').hasClass('is-hidden')) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			$('.ttu-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			$('.ttu-overlay').removeClass('is-visible');
		}

		// Making sure the search bar is closed
		toggleSearch('close');
	});

	// Open search form when search icon is clicked
	$('.ttu-search-trigger').on('click', function (event) {
		event.preventDefault();
		toggleSearch();
		closeNav();
	});

	/**
  * Closes navigation
  */
	function closeNav() {
		// Getting width of navigaion and adding 20 to ensure it goes off screen
		var navWidth = $('.ttu-primary-nav').width() + 20;

		$('.ttu-nav-trigger').removeClass('nav-is-visible');
		$('.ttu-main-header').removeClass('nav-is-visible');

		// Sliding primary nav to the right with content then removing .nav-is-visible
		$('.ttu-primary-nav').animate({
			right: '-' + navWidth + 'px'
		}, 175, 'linear', function () {
			return $('.ttu-primary-nav').removeClass('nav-is-visible');
		});

		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.ttu-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
			return $('body').removeClass('overflow-hidden');
		});
	}

	/**
  * Toggles the search bar on an off
  * @param {string} type Only used when you need to close search by setting it to 'close'
  */
	function toggleSearch(type) {
		if (type == "close") {
			//close serach
			$('.ttu-search').removeClass('is-visible');
			$('.ttu-search-trigger').removeClass('search-is-visible');
			$('.ttu-overlay').removeClass('search-is-visible');
		} else {
			//toggle search visibility
			$('.ttu-search').toggleClass('is-visible');
			$('.ttu-search-trigger').toggleClass('search-is-visible');
			$('.ttu-overlay').toggleClass('search-is-visible');
			if ($(window).width() > MqL && $('.ttu-search').hasClass('is-visible')) $('.ttu-search').find('input[type="search"]').focus();

			$('.ttu-search').hasClass('is-visible') ? $('.ttu-overlay').addClass('is-visible') : $('.ttu-overlay').removeClass('is-visible');
		}
	}
	/**
  * Checks the width of the browser window (scrollbar included)
 * @returns {bool}
  */
	function checkWindowWidth() {

		var e = window;
		var a = 'inner';
		if (!('innerWidth' in window)) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		if (e[a + 'Width'] >= MqL) {
			return true;
		} else {
			return false;
		}
	}

	/**
  * Moves the navigation to align properly
  */
	function moveNavigation() {
		var $navigation = $('.ttu-nav');
		var desktop = checkWindowWidth();
		if (desktop) {
			$navigation.detach();
			$navigation.insertBefore('.ttu-header-buttons');
		} else {
			$navigation.detach();
			$navigation.insertAfter('.ttu-main-content');
		}
	}
});
