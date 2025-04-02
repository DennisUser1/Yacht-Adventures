const swiper = new Swiper('.swiper', {
  slidesPerView: getSlidesPerView(),
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
      swiper.params.slidesPerView = getSlidesPerView();
      swiper.update();
    },
  },
});

function getDirection() {
  const windowWidth = window.innerWidth;
  return windowWidth <= 115 ? 'vertical' : 'horizontal';
}

function getSlidesPerView() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1280) {
    return 3;
  } else if (windowWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}
