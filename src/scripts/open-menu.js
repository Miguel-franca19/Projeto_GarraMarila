// Script para abrir e fechar o menu lateral

const sidebar = document.querySelector('#sidebar');
const toggleButton = document.querySelectorAll('.menu-burguer');

toggleButton.forEach(button => {
  button.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  sidebar.classList.toggle('active');
}