$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if(this.hash.slice(1) == "top") {
			target = $("body");
		}
	  if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
  if(location.hash) {
	var target = location.hash;
	 if (target.length) {
        $('html, body').animate({
          scrollTop: $(target).offset().top - 100
        }, 1000);
        return false;
      }
  }
});
