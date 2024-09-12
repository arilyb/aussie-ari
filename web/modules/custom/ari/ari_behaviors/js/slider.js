var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true,

    breakpoints: {
        575: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2.4,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3.4,
          spaceBetween: 20,
        }}
  });