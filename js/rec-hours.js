$(document).ready(function(){
  /**** STICKING THE BUTTON UNDER THE NAV ****/
  let recHoursButtonOptions = {};
  if ( $(window).width() < 1200 ) {
    recHoursButtonOptions = {
      offset_top: 84
    }
  } else if ($(window).width() >= 1200 && $(window).width() < 2000){
    recHoursButtonOptions = {
      offset_top: 20
    }
  } else {
    recHoursButtonOptions = {
      offset_top: -12
    }
  }
  $('.rec-hours-button').stick_in_parent(recHoursButtonOptions);



  /**** SHOWING REC CENTER HOURS ****/
  $('main').on('click', '.rec-hours-button', function(e) {
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
});
