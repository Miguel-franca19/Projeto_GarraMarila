document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const scrollThreshold = 100; // Define o ponto (em pixels) para a animação começar

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("sticky-scrolled");
    } else {
      navbar.classList.remove("sticky-scrolled");
    }
  }

  // Define a posição inicial da navbar para 'fixed'
  navbar.style.position = "fixed";
  navbar.style.top = "0";
  navbar.style.zIndex = "1000"; // Garante que fique acima de outros elementos

  // Adiciona o listener de scroll
  window.addEventListener("scroll", handleScroll);
});
