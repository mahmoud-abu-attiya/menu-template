AOS.init({
  anchorPlacement: "top-left",
  duration: 600,
  easing: "ease-in-out",
  once: false,
  mirror: false,
  disable: false,
});
var swiper = new Swiper(".mySwiper_cat", {
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper_card", {
  spaceBetween: 5,
  slidesPerView: 2.5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 997px
    997: {
      slidesPerView: 5
    }
  },
});
var swiper = new Swiper(".mySwiper_items", {
  spaceBetween: 5,
  slidesPerView: 1.2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 997px
    997: {
      slidesPerView: 5
    }
  },
});