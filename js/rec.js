$(document).ready(function(){
  /**** INITIALIZING SLIDERS ****/
  $('.rec-home__sliders .video-slider').slick({
    dots: true,
    asNavFor: '.text-slider'
  });

  $('.rec-home__sliders .text-slider').slick({
    arrows: false,
    swipe: false,
    speed: 700,
    asNavFor: '.video-slider'
  });



  /**** SHOWING REC CENTER HOURS ****/
  $('.rec-home__hero').on('click', '.rec-hours-button', function(e) {
    e.preventDefault();

    // Moves the hours in from the right
    $('.rec-hours').animate({
      'right': '0'
    }, {
      complete: function() {
        // Disabling scrolling of the page while hours are open
        $("body").css("overflow","hidden");
      }
    });
  });

  $('.rec-hours').on('click', '.rec-hours__close', function(e) {
    e.preventDefault();

    // Pushes hours out to the right
    $('.rec-hours').animate({
      'right': '-100%'
    }, {
      complete: function() {
        // Re-enables scrolling of the page when the hours are closed
        $("body").css("overflow","initial");
      }
    });
  });



  /**** MAKE DEPARTMENTS FULLSCREEN ON CLICK ****/
  // Variables for the position of the department that gets clicked
  let departmentTop;
  let departmentLeft;
  let departmentWidth;
  let departmentHeight;
  $('.rec-home__departments').on('click', '.rec-department a', function(e) {
    e.preventDefault();

    const departmentsTop = $('.rec-home__departments').offset().top - 84;
    const department = $(this).closest('.rec-department');
    const plus = department.find('.rec-department__plus');

    // Fading the other departments to hide strange positioning
    $('.rec-department').not(department).animate({'opacity': 0});

    if (!department.hasClass('active')) {
      // Set the position of the department link
      departmentTop = department.position().top;
      departmentLeft = department.position().left;
      departmentWidth = department.css('width');
      departmentHeight = department.css('height');
      let departmentImageWidth = departmentWidth;
      if( $(window).width() < 1200 ) {
        departmentImageWidth = '50%';
      }

      // Turning the plus into a minus
      plus.toggleClass('minus');
      plus.animate({
        'bottom': '-.85rem'
      }, {
        start: function() {
          department.children('a').css({
            'width': departmentImageWidth
          });
        },
        step: function() {
          plus.css({'transform': 'rotate(0)'});
        },
        complete: function() {

          // Setting the department to be fixed
          department.css({
            'position'  : 'absolute',
            'top'       : departmentTop,
            'left'      : departmentLeft,
            'width'     : departmentWidth,
            'z-index'   : 1000
          });

          // Animating the close button up
          department.find('.rec-department__plus p').animate({
            top: '-15%',
            opacity: 1
          });

          // Animating the clicked department to fill the screen
          department.animate({
            'top': '0px',
            'left': '0px',
            'width': '100%'
          }, {
            start: function() {
              $('html, body').animate({
                scrollTop: departmentsTop
              });
              // Toggling the active class to set its styles
              department.toggleClass('active');

              // Returning false to keep the scolling smooth
              return false;
            },
            complete: function() {
              department.children('.rec-department__details').css({'opacity': 1});
            }
          });

        }
      });

    } else {

      // Turning the minus back into a plus first
      plus.animate({
        'opacity': '1'
      }, {
        start: function() {
          // Animating the close button down
          department.find('.rec-department__plus p').animate({
            top: '40%',
            opacity: 0
          }, 100);
          plus.toggleClass('minus');
          plus.removeAttr('style');

          department.children('.rec-department__details').css({'opacity': 0});
        },
        complete: function(now, fx) {

          // Shrinking down details div
          department.children('.rec-department__details').animate({
            'height': '1px',
            'opacity': 0
          }, {
            start: function() {
              department.children('.rec-department__details').css('overflow', 'hidden');
            }
          });

          // Shrinking the department info and putting it back where it was
          department.animate({
            'width' : departmentWidth,
            'height': departmentHeight,
            'top'   : departmentTop,
            'left'  : departmentLeft
          },{
            start: function() {
              department.css({'min-height': '0px'});
            },
            complete: function() {
              // Toggling the active class to set its styles
              department.toggleClass('active');
              // Removing all element styles set by the animation
              department.removeAttr('style');
              department.children('.rec-department__details').removeAttr('style');
              department.find('.rec-department__plus p').removeAttr('style');

              // Bringing all the departments back into view
              $('.rec-department').not(department).animate({'opacity': 1});
            }
          });

        }
      });
    }
  });



  /**** ELEMENTS MOVE ON SCROLL ****/
  // Initial scrollTop
  let lastScrollTop = 0;


  // Find each element to move on scroll and translate them to their current position
  $('.move-on-scroll').each(function() {
    const elementOffset = $(this).offset().top;
    const distanceFromTop = (elementOffset - lastScrollTop);

    $(this).css("transform", "translate3d(0px, " + distanceFromTop + ", 0px)");
  });


  $(window).scroll(function() {
    const currentScrollTop = $(this).scrollTop();

    // Test if scrolling up or down
    if (currentScrollTop > lastScrollTop){
       // Scrolling down
       $('.move-on-scroll').each(function() {
         const currentPosition = getCurrentPosition(currentScrollTop, $(this));
         const scrollDistance = (lastScrollTop - currentScrollTop);

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
    } else {
      // Scrolling up

    }

    // Setting the last scroll position
    lastScrollTop = currentScrollTop;
  });

  // Gets the current position of an element
  function getCurrentPosition(scrollTop, $element) {
    const elementOffset = $element.offset().top;

    return(elementOffset - scrollTop);
  }

});
