// Script para inicializar o Swiper.js na seção de impacto social

const swiper = new Swiper(".impactSwiper", {
  // Slides por visualização
  slidesPerView: 1,
  spaceBetween: 30,

  // Loop infinito
  loop: true,

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Navegação
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Paginação
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // Quando a largura >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Quando a largura >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // Quando a largura >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
