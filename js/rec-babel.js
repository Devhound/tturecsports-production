'use strict';

$(document).ready(function () {
  /**** INITIALIZING SLIDERS ****/
  $('.rec-home__sliders .video-slider').slick({
    dots: true,
    asNavFor: '.text-slider'
  });

  $('.rec-home__sliders .text-slider').slick({
    arrows: false,
    swipe: false,
    asNavFor: '.video-slider'
  });

  /**** MAKE DEPARTMENTS FULLSCREEN ON CLICK ****/
  // Variables for the position of the department that gets clicked
  var departmentTop = void 0;
  var departmentLeft = void 0;
  var departmentWidth = void 0;
  var departmentHeight = void 0;
  $('.rec-home__departments').on('click', '.rec-department a', function (e) {
    e.preventDefault();

    var department = $(this).closest('.rec-department');
    var plus = department.find('.rec-department__plus');

    $('.rec-department').not(department).animate({ 'opacity': 0 });

    if (!department.hasClass('active')) {
      // Set the position of the department link
      departmentTop = department.offset().top - $(window).scrollTop();
      departmentLeft = department.offset().left;
      departmentWidth = department.css('width');
      departmentHeight = department.css('height');

      // Turning the plus into a minus
      plus.toggleClass('minus');
      plus.animate({
        'bottom': '-.85rem'
      }, {
        step: function step() {
          plus.css({ 'transform': 'rotate(0)' });
        },
        complete: function complete() {

          // Setting the department to be fixed
          department.css({
            'position': 'fixed',
            'top': departmentTop,
            'left': departmentLeft,
            'width': departmentWidth,
            'height': departmentHeight,
            'z-index': 1000
          });

          department.animate({
            'top': 0,
            'left': 0,
            'width': '100%',
            'min-height': '100vh'
          }, {
            start: function start() {
              // Toggling the active class to set its styles
              department.toggleClass('active');

              department.children('a').css({
                'min-width': departmentWidth
              });
            }
          });
        }
      });
    } else {

      plus.animate({
        'opacity': '1'
      }, {
        start: function start() {
          // Turning the minus back into a plus
          plus.toggleClass('minus');
          plus.removeAttr('style');
        },
        complete: function complete(now, fx) {

          department.children('.rec-department__details').animate({
            'height': '1px',
            'opacity': 0
          }, {
            start: function start() {
              department.children('.rec-department__details').css('overflow', 'hidden');
            }
          });

          department.animate({
            'width': departmentWidth,
            'height': departmentHeight,
            'top': departmentTop,
            'left': departmentLeft
          }, {
            start: function start() {
              department.css({ 'min-height': '0px' });
            },
            complete: function complete() {
              // Toggling the active class to set its styles
              department.toggleClass('active');
              department.removeAttr('style');
              department.children('.rec-department__details').removeAttr('style');

              $('.rec-department').not(department).animate({ 'opacity': 1 });
            }
          });
        }
      });
    }
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