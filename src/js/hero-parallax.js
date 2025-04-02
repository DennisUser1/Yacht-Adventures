VanillaTilt.init(document.querySelectorAll('.hero-image-container'), {
  max: 15,
  speed: 900,
  glare: false,
  transition: true,
});

let btnEl = document.querySelector('.hero-btn');
    btnEl.addEventListener('click', scrollToAnchor);


    function scrollToAnchor() {
        window.scroll({
            top: document.querySelector('#about').offsetTop,
            behavior: 'smooth',
        });
    }