const themeToggle = document.querySelector('.theme-switch__checkbox');

const html = document.documentElement; 

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.checked = true;

    } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeToggle.checked = false;

    }
});

function autoTheme() {
    if (window.matchMedia) {
        const preferTheme = "(prefers-color-scheme: dark)";

        const prefersDarkMode = window.matchMedia(preferTheme).matches;
        if (prefersDarkMode) {
            html.classList.add("dark");
            themeToggle.checked = true;
        } else {
            html.classList.remove("dark");
            themeToggle.checked = false;
        }

        window.matchMedia(preferTheme).addEventListener("change", (event) => {
            if (event.matches) {
                html.classList.add("dark");
            themeToggle.checked = true;

            } else {
                html.classList.remove("dark");
            themeToggle.checked = false;

            }
        });
    } else {
        noPreference();
    }
}

function noPreference() {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme == "dark") {
        html.classList.add("dark");
        changeIcon("dark")
    } else {
        html.classList.remove("dark");
        changeIcon("light")
    }
}

document.addEventListener("DOMContentLoaded", () => autoTheme())