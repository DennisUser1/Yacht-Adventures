jQuery(function ($) {
  const doAnimations = function () {
    // Calc current offset and get all
    const offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');
    if ($animatables.length === 0) {
      $(window).off('scroll', doAnimations);
    }
    $animatables.each(function (i) {
      const $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });
  };
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});
