// Banner text add parallax efect and fade
function EasyPeasyParallax() {
  scrollPos = $(this).scrollTop();
  $('#slider').css({
    'background-position': '50% ' + (-scrollPos / 4) + "px"
  });
  $('#bannertext').css({
    'margin-top': (scrollPos / 4) + "px",
    'opacity': 1 - (scrollPos / 250)
  });
}

$(document).ready(function () {
  $(window).scroll(function () {
    EasyPeasyParallax();
  });
});
