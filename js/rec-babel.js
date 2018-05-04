'use strict';

$(document).ready(function () {
  /**** INITIALIZING SLIDERS ****/
  $('.rec-home__sliders .video-slider').slick({
    dots: true,
    arrows: false,
    asNavFor: '.text-slider'
  });

  $('.rec-home__sliders .text-slider').slick({
    arrows: false,
    swipe: false,
    speed: 700,
    asNavFor: '.video-slider'
  });

  /**** INITIALIZING prettyEmbed FOR VIDEOS ****/
  $().prettyEmbed({ useFitVids: false });

  /**** STICKING THE BUTTON UNDER THE NAV ****/
  var recHoursButtonOptions = {};
  if ($(window).width() < 1200) {
    recHoursButtonOptions = {
      offset_top: 84
    };
  } else if ($(window).width() >= 1200 && $(window).width() < 2000) {
    recHoursButtonOptions = {
      offset_top: 20
    };
  } else {
    recHoursButtonOptions = {
      offset_top: -12
    };
  }
  $('.rec-hours-button').stick_in_parent(recHoursButtonOptions);

  /**** SHOWING REC CENTER HOURS ****/
  $('main').on('click', '.rec-hours-button', function (e) {
    e.preventDefault();

    // Moves the hours in from the right
    $('.rec-hours').animate({
      'right': '0'
    }, {
      complete: function complete() {
        // Disabling scrolling of the page while hours are open
        $("body").css("overflow", "hidden");
      }
    });
  });

  $('.rec-hours').on('click', '.rec-hours__close', function (e) {
    e.preventDefault();

    // Pushes hours out to the right
    $('.rec-hours').animate({
      'right': '-100%'
    }, {
      complete: function complete() {
        // Re-enables scrolling of the page when the hours are closed
        $("body").css("overflow", "initial");
      }
    });
  });

  /**** MAKE DEPARTMENTS FULLSCREEN ON CLICK ****/
  // Variables for the position of the department that gets clicked
  var departmentTop = void 0;
  var departmentLeft = void 0;
  var departmentWidth = void 0;
  var departmentHeight = void 0;
  $('.rec-home__departments').on('click', '.rec-department > a', function (e) {
    e.preventDefault();

    var departmentsTop = $('.rec-home__departments').offset().top - 84;
    var department = $(this).closest('.rec-department');
    var plus = department.find('.rec-department__plus');

    // Fading the other departments to hide strange positioning
    // $('.rec-department').not(department).animate({'opacity': 0});
    $('.rec-department').animate({ 'opacity': 0 });

    if (!department.hasClass('active')) {
      // Set the position of the department link
      departmentTop = department.position().top;
      departmentLeft = department.position().left;
      departmentWidth = department.css('width');
      departmentHeight = department.css('height');
      var departmentImageWidth = departmentWidth;
      if ($(window).width() < 1200) {
        departmentImageWidth = '100%';
      }

      // Turning the plus into a minus
      plus.toggleClass('minus');
      plus.animate({
        'bottom': '-.85rem'
      }, {
        start: function start() {
          department.children('a').css({
            'width': departmentImageWidth
          });
        },
        step: function step() {
          plus.css({ 'transform': 'rotate(0)' });
        },
        complete: function complete() {

          // Setting the department to be fixed
          department.css({
            'position': 'absolute',
            'top': departmentTop,
            'left': departmentLeft,
            'width': departmentWidth,
            'z-index': 1000
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
            start: function start() {
              $('html, body').animate({
                scrollTop: departmentsTop
              });
              // Toggling the active class to set its styles
              department.toggleClass('active');

              // Returning false to keep the scolling smooth
              return false;
            },
            complete: function complete() {
              department.animate({ 'opacity': 1 });
              department.children('.rec-department__details').css({ 'opacity': 1 });
            }
          });
        }
      });
    } else {

      // Turning the minus back into a plus first
      plus.animate({
        'opacity': '1'
      }, {
        start: function start() {
          // Animating the close button down
          department.find('.rec-department__plus p').animate({
            top: '40%',
            opacity: 0
          }, 100);
          plus.toggleClass('minus');
          plus.removeAttr('style');

          department.children('.rec-department__details').css({ 'opacity': 0 });
        },
        complete: function complete(now, fx) {

          // Shrinking down details div
          department.children('.rec-department__details').animate({
            'height': '1px',
            'opacity': 0
          }, {
            start: function start() {
              department.children('.rec-department__details').css('overflow', 'hidden');
            }
          });

          // Shrinking the department info and putting it back where it was
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
              // Removing all element styles set by the animation
              department.removeAttr('style');
              department.children('.rec-department__details').removeAttr('style');
              department.find('.rec-department__plus p').removeAttr('style');

              // Bringing all the departments back into view
              $('.rec-department').not(department).animate({ 'opacity': 1 });
            }
          });
        }
      });
    }
  });

  /**** ELEMENTS MOVE ON SCROLL ****/
  if ($(window).width() > 1200) {
    // Initial scrollTop
    var lastScrollTop = 0;

    $(window).scroll(function () {
      var currentScrollTop = $(this).scrollTop();
      var scrollDistance = lastScrollTop - currentScrollTop;
      var flexDistance = scrollDistance;

      // Making sure flex distance isn't more than 10
      if (flexDistance > 10) {
        flexDistance = 10;
      } else if (flexDistance < -10) {
        flexDistance = -10;
      }
      // console.log(flexDistance);

      // Test if scrolling up or down
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        $('.flex-on-scroll').css({ "transition": "all .4s ease", "-webkit-transform": "translate3d(0px, " + flexDistance * 1.25 + "px, 0px)", "transform": "translate3d(0px, " + flexDistance * 1.25 + "px, 0px)" });
      } else {
        // Scrolling up
        $('.flex-on-scroll').css({ "transition": "all .4s ease", "-webkit-transform": "translate3d(0px, " + flexDistance * 1.25 + "px, 0px)", "transform": "translate3d(0px, " + flexDistance * 1.25 + "px, 0px)" });
      }

      // Detect when the user stops scrolling and put the elements back in their positions
      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function () {
        // do something
        $('.flex-on-scroll').css({ "transition": "all 1.4s ease", "-webkit-transform": "translate3d(0px, 0px, 0px)", "transform": "translate3d(0px, 0px, 0px)" });
      }, 250));

      // Setting the last scroll position
      lastScrollTop = currentScrollTop;
    });
  }

  // Gets the current position of an element
  function getCurrentPosition(scrollTop, $element) {
    var elementOffset = $element.offset().top;

    return scrollTop - elementOffset;
  }
});

// start contentful connection and render events


// start contentful connection and render events


var client = contentful.createClient({
  accessToken: "96028a28b956299023a49cd3a5a18938f0c6104c71314ac5ae72c7a4266e88e2",
  space: "6p2l1peqtu1e"
});

var pageTitle = document.title;
var newsCards = document.querySelector("#news");
var heroSection = document.querySelector("#hero");
var documentSelector = document.querySelector("#content");
var pageContentSelection = document.querySelector("#content") !== null;
var heroSectionSelection = document.querySelector("#hero") !== null;
var newsCardsSelection = document.querySelector("#news") !== null;

// ****************!!!!!!TRANSPILE TO BABEL FIRST!!!!!!!*********************

function fetchNewsItems() {
  return client.getEntries({
    content_type: "newsItem",
    limit: 3
  }).then(function (response) {
    return response.items;
  }).catch(function (error) {
    console.log("\nError occured while fetching entries for news item:");
    console.error(error);
  });
}

function fetchHeroContent() {
  return client.getEntries({
    content_type: "heroContent",
    limit: 1
  }).then(function (response) {
    return response.items;
  }).catch(function (error) {
    console.log("\nError occured while fetching entries for hero content:");
    console.error(error);
  });
}

function fetchWebPages() {
  return client.getEntries({
    content_type: "webPages",
    "fields.pageTitle[match]": pageTitle,
    include: 2
  }).then(function (response) {
    return response.items;
  }).catch(function (error) {
    console.log("\nError occured while fetching entries for news item:");
    console.error(error);
  });
}

if (pageContentSelection) {
  fetchWebPages().then(function (entry) {
    documentSelector.innerHTML += entry.map(function (webPages) {
      return '\n        <div class="flexslider">\n        <ul class="slides">\n        <li data-thumb="http:' + webPages.fields.slideImages[0].fields.file.url + '?w=900&h=506&fit=fill">\n          <img src="http:' + webPages.fields.slideImages[0].fields.file.url + '?w=900&h=506&fit=fill" />\n        </li>\n        <li data-thumb="http:' + webPages.fields.slideImages[1].fields.file.url + '?w=900&h=506&fit=fill">\n          <img src="http:' + webPages.fields.slideImages[1].fields.file.url + '?w=900&h=506&fit=fill" />\n        </li>\n        <li data-thumb="http:' + webPages.fields.slideImages[2].fields.file.url + '?w=900&h=506&fit=fill">\n          <img src="http:' + webPages.fields.slideImages[2].fields.file.url + '?w=900&h=506&fit=fill" />\n        </li>\n        </ul>\n        </div>\n          <section>\n            ' + marked(webPages.fields.pageContent) + '\n          </section>';
    }).join(" ");
  });
} else {
  console.log("no page selector");
}

if (heroSectionSelection) {
  fetchHeroContent().then(function (heroContent) {
    heroSection.innerHTML += heroContent.map(function (heroContent) {
      return '\n      <div class="rec-home__herobg" style="background-image:url(' + heroContent.fields.heroImage.fields.file.url + ')">\n      </div>\n      <h2>' + heroContent.fields.heroTitle + '</h2>\n        <a href="' + heroContent.fields.heroLink + ' " class="rec-hero__call-to-action">\n            <p>Learn</p>\n            <p>more</p>\n        </a>\n    ';
    }).join("");
  });
} else {
  console.log("no hero selector");
}

if (newsCardsSelection) {
  fetchNewsItems().then(function (newsItem) {
    newsCards.innerHTML += newsItem.map(function (newsItem) {
      return '\n    <div class="large-4 medium-12 column tilespacer">\n        <div class="card card-product-hover">\n        \n            <div class="card-product-hover-details">\n            <p class="card-product-hover-title">' + newsItem.fields.newsTitle + '</p>\n            <p class="card-product-hover-date">' + newsItem.fields.newsDescription + '</p>\n            <p class="news-button"><a href="' + newsItem.fields.newsLink + '"><button>Learn more</button></a></p>\n                </div>\n            </div>\n        </div>';
    }).join("");
    ll.update();
  });
} else {
  console.log("No news selector");
}

// client
//   .sync({
//     initial: true,
//     nextSyncToken: window.localStorage.getItem("contentfulSyncToken")
//   })
//   .then(response => {
//     const responseObj = JSON.parse(response.stringifySafe());
//     const entries = responseObj.entries;
//     window.localStorage.setItem("contentfulEntries", JSON.stringify(entries));
//     console.log(response.deletedEntries);
//     console.log(response.deletedAssets);
//     // store the new token
//     window.localStorage.setItem("contentfulSyncToken", response.nextSyncToken);
//   });


// Destroy placeholder

window.addEventListener("load", function (event) {
  document.getElementById("news").style.visibility = "visible";
});

function load() {
  console.log("Placeholders destroyed");
  document.getElementById("placeholders").style.display = "none";
}

window.onload = load;