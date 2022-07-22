AOS.init({
  anchorPlacement: "top-left",
  duration: 600,
  easing: "ease-in-out",
  once: false,
  mirror: false,
  disable: false,
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});