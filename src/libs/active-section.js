// Script para os links ativos da navbar e sidebar

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const sidebarLinks = document.querySelectorAll(".sidebar-nav-link");

function updateActiveNavLink() {
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  
  // Pegar a seção hero
  const heroSection = document.querySelector("#hero");
  
  // Se está no hero, não ativar nenhum link
  if (heroSection) {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    if (scrollPosition < heroBottom - 100) {
      navLinks.forEach((link) => link.classList.remove("active"));
      sidebarLinks.forEach((link) => link.classList.remove("active"));
      return;
    }
  }

  let currentSection = null;
  let maxVisibleArea = 0;

  sections.forEach((section) => {
    // Ignorar a seção hero
    if (section.getAttribute("id") === "hero") {
      return;
    }

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    const viewportTop = scrollPosition;
    const viewportBottom = scrollPosition + windowHeight;

    const visibleTop = Math.max(sectionTop, viewportTop);
    const visibleBottom = Math.min(sectionBottom, viewportBottom);
    const visibleArea = Math.max(0, visibleBottom - visibleTop);

    if (visibleArea > maxVisibleArea) {
      maxVisibleArea = visibleArea;
      currentSection = section;
    }
  });

  if (currentSection) {
    const sectionId = currentSection.getAttribute("id");
    
    // Remover active de todos os links (navbar e sidebar)
    navLinks.forEach((link) => link.classList.remove("active"));
    sidebarLinks.forEach((link) => link.classList.remove("active"));

    // Ativar link correspondente na navbar
    const correspondingNavLink = document.querySelector(
      `.nav-link[href*="${sectionId}"]`
    );
    if (correspondingNavLink) {
      correspondingNavLink.classList.add("active");
    }

    // Ativar link correspondente no sidebar
    const correspondingSidebarLink = document.querySelector(
      `.sidebar-nav-link[href*="${sectionId}"]`
    );
    if (correspondingSidebarLink) {
      correspondingSidebarLink.classList.add("active");
    }
  }
}

window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("resize", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

updateActiveNavLink();