(function($) {
  // Open mobile menu
  $("#mobile-menu-open").click(function() {
    $("header, body").addClass("active");
  });

  // Close mobile menu
  $("#mobile-menu-close").click(function() {
    $("header, body").removeClass("active");
  });

  // Animate to section when nav is clicked
  $("header a").click(function(e) {
    e.preventDefault();
    var heading = $(this).attr("href");
    var scrollDistance = $(heading).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px"
      },
      Math.abs(window.pageYOffset - scrollDistance) / 1
    );

    // Hide the menu once clicked if mobile
    if ($("header").hasClass("active")) {
      $("header, body").removeClass("active");
    }
  });

  $('#lead-down span').click(function() {
    var scrollDistance = $('#about').offset().top;
    $('html, body').animate({
        scrollTop: scrollDistance + 'px'
    }, 500);
});

})(jQuery);
