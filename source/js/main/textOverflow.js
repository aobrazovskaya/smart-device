(function () {
  var wrapper = document.querySelector('.about-company__paragraph-wrapper p:last-child');
  var height;

  if (window.matchMedia('(max-width: 767px)').matches) {
    height = 180;
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    height = 100;
  } else {
    return;
  }

  var dot = new Dotdotdot(wrapper, {
    height: height
  });
})();
