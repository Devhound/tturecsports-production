'use strict';

$(document).ready(function () {
  $('.rec-home__sliders .video-slider').slick({
    dots: true,
    asNavFor: '.text-slider'
  });

  $('.rec-home__sliders .text-slider').slick({
    arrows: false,
    swipe: false,
    asNavFor: '.video-slider'
  });

  /**** ELEMENTS MOVE ON SCROLL ****/
  // Initial scrollTop
  var lastScrollTop = 0;

  // Find each element to move on scroll and translate them to their current position
  $('.move-on-scroll').each(function () {
    var elementOffset = $(this).offset().top;
    var distanceFromTop = elementOffset - lastScrollTop;

    $(this).css("transform", "translate3d(0px, " + distanceFromTop + ", 0px)");
  });

  $(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();

    // Test if scrolling up or down
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      $('.move-on-scroll').each(function () {
        var currentPosition = getCurrentPosition(currentScrollTop, $(this));
        var scrollDistance = lastScrollTop - currentScrollTop;

        //  $(this).animate({
        //    'opacity': 1
        //  }, {
        //    step: function(now, fx) {
        //     //  $(this).css({"transform": "translate3d(0px, " + (currentPosition + scrollDistance) + "px, 0px)"});
        //     $(this).css({"transform": "translate3d(0px, " + currentPosition + "px, 0px)"});
        //    },
        //    duration: 2000,
        //    easing: 'linear',
        //    queue: false,
        //    complete: function() {
        //      console.log('Animation is complete!');
        //     //  $(this).css({"transform": "translate3d(0px, " + currentPosition + "px, 0px)"});
        //    }
        //  }, 'linear');
      });
    } else {}
    // Scrolling up

    // Setting the last scroll position
    lastScrollTop = currentScrollTop;
  });

  // Gets the current position of an element
  function getCurrentPosition(scrollTop, $element) {
    var elementOffset = $element.offset().top;

    return elementOffset - scrollTop;
  }
});