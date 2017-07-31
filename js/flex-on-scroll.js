if ($(window).width() > 1200) {
  // Initial scrollTop
  let lastScrollTop = 0;

  $(window).scroll(function() {
    const currentScrollTop = $(this).scrollTop();
    const scrollDistance = lastScrollTop - currentScrollTop;
    let flexDistance = scrollDistance;

    // Making sure flex distance isn't more than 10
    if (flexDistance > 10) {
      flexDistance = 10;
    } else if (flexDistance < -10) {
      flexDistance = -10;
    }
    // console.log(flexDistance);

    // Test if scrolling up or down
    if (currentScrollTop > lastScrollTop){
      // Scrolling down
      $('.flex-on-scroll').css({"transition": "all .4s ease", "-webkit-transform": "translate3d(0px, " + (flexDistance * 1.25) + "px, 0px)", "transform": "translate3d(0px, " + (flexDistance * 1.25) + "px, 0px)"});
    } else {
      // Scrolling up
      $('.flex-on-scroll').css({"transition": "all .4s ease", "-webkit-transform": "translate3d(0px, " + (flexDistance * 1.25) + "px, 0px)", "transform": "translate3d(0px, " + (flexDistance * 1.25) + "px, 0px)"});
    }

    // Detect when the user stops scrolling and put the elements back in their positions
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        // do something
        $('.flex-on-scroll').css({"transition": "all 1.4s ease", "-webkit-transform": "translate3d(0px, 0px, 0px)", "transform": "translate3d(0px, 0px, 0px)"});
    }, 250));

    // Setting the last scroll position
    lastScrollTop = currentScrollTop;
  });
}
