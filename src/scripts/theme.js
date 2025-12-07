// Script e funções para alternar entre temas claro e escuro, salvando a preferência do usuário

const themeToggle = document.querySelector(".theme-switch__checkbox");
const heroSource = document.getElementById("hero-img-source");

const html = document.documentElement;

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggle.checked = true;
    updateHeroImage(true);
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggle.checked = false;
    updateHeroImage(false);
  }
});

function noPreference() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme == "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

function updateHeroImage(isDark) {
  if (isDark) {
    heroSource.srcset = "src/assets/hero-img-dark.webp";
  } else {
    heroSource.srcset = "src/assets/hero-img.webp";
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    const isDark = savedTheme === "dark";
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    themeToggle.checked = isDark;
    updateHeroImage(isDark);
  } else if (window.matchMedia) {

    const preferTheme = "(prefers-color-scheme: dark)";
    const prefersDarkMode = window.matchMedia(preferTheme).matches;

    if (prefersDarkMode) {
      html.classList.add("dark");
      themeToggle.checked = true;
      updateHeroImage(true);
    } else {
      html.classList.remove("dark");
      themeToggle.checked = false;
      updateHeroImage(false);
    }

    window.matchMedia(preferTheme).addEventListener("change", (event) => {

      if (!localStorage.getItem("theme")) {
        if (event.matches) {
          html.classList.add("dark");
          themeToggle.checked = true;
          updateHeroImage(true);
        } else {
          html.classList.remove("dark");
          themeToggle.checked = false;
          updateHeroImage(false);
        }
      }
    });
  } else {
    noPreference(); 
  }
}

document.addEventListener("DOMContentLoaded", () => loadTheme());
