$(document).ready(function () {
  // slider settings
  $(".top-slider").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendArrows: $(".top-slider-controls__arrows"),
    appendDots: $(".top-slider-controls"),
  });

  $(window).scroll(() => {
    // header styles with scroll
    if ($(window).scrollTop() > 5) {
      $(
        ".top-header, .logo-link__company-name, .logo-link__svg, .info-icon"
      ).addClass("scroll-fix-blue");
      $(".info a, .contacts-list").addClass("scroll-fix-black");
    } else {
      $(
        ".top-header, .logo-link__company-name, .logo-link__svg, .info-icon"
      ).removeClass("scroll-fix-blue");
      $(".info a, .contacts-list").removeClass("scroll-fix-black");
    }
  });
});
