var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, 
  grabCursor: true, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev", 
  },
  breakpoints: {
    960: {
      slidesPerView: 1, 
      spaceBetween: 0,
      slidesOffsetBefore: 0, 
    }
  }
});
