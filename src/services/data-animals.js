// Script para renderizar por meio de um objeto os 50 animais em animais.html

const animais = [
  {
    nome: "Rex",
    tipo: "Cachorro",
    idade: "2 anos",
    descricao: "Carinhoso, adora brincar e é ótimo com crianças.",
    imagemSrc: "src/assets/rex-img.png",
    imagemAlt: "Cachorro Rex",
  },
  {
    nome: "Luna",
    tipo: "Gata",
    idade: "1 ano",
    descricao: "Calma e independente, perfeita para apartamento.",
    imagemSrc: "src/assets/luna-img.png",
    imagemAlt: "Gata Luna",
  },
  {
    nome: "Mia",
    tipo: "Gata",
    idade: "3 meses",
    descricao: "Gatinha curiosa e carinhosa, adora colo.",
    imagemSrc: "src/assets/mia-img.png",
    imagemAlt: "Gatinha Mia",
  },
  {
    nome: "Tobias",
    tipo: "Cachorro",
    idade: "6 meses",
    descricao: "Filhote brincalhão e cheio de energia.",
    imagemSrc: "src/assets/luck-img.png", // Mude o nome do arquivo da imagem
    imagemAlt: "Cachorro Tobias",
  },
  // ... continue até o animal 50
];

/**
 * Função para gerar o HTML de um card de animal.
 * @param {Object} animal - O objeto com os dados do animal.
 * @returns {string} O HTML completo do card.
 */

function criarCardAnimal(animal) {
  // Usamos Template Literals (crase `) para facilitar a escrita do HTML
  return `
        <div class="adoption-card" data-aos="zoom-in" data-aos-delay="300">
            <img
                src="${animal.imagemSrc}"
                alt="${animal.imagemAlt}"
                class="adoption-img"
            />
            <div class="adoption-card-content">
                <div
                    class="container-row"
                    style="align-items: center; justify-content: space-between"
                >
                    <h3>${animal.nome}</h3>
                    <span class="tag">${animal.tipo}</span>
                </div>
                <p class="pet-info">${animal.tipo} • ${animal.idade}</p>
                <p class="text description-text">
                    ${animal.descricao}
                </p>
                <div class="container-row button-group">
                    <button class="btn btn-secondary">
                        <span class="material-symbols-outlined">favorite</span>
                        Apadrinhar
                    </button>
                    <button class="btn btn-primary">Adotar</button>
                </div>
            </div>
        </div>
    `;
}

// ----------------------------------------------------
// Lógica para carregar e exibir os cards
// ----------------------------------------------------

// Verifica se estamos na página 'animais.html' ou em outra página que precise desta lógica
if (document.getElementById("dynamic-pet-list")) {
  const listaPetsContainer = document.getElementById("dynamic-pet-list");
  let cardsHTML = "";

  // Itera sobre o array de animais
  animais.forEach((animal, index) => {
    // Gera o HTML do card e adiciona na string de cardsHTML
    // Você pode ajustar o data-aos-delay aqui, por exemplo:
    cardsHTML += criarCardAnimal({
      ...animal,
      // Adiciona um atraso de animação escalonado (opcional, se estiver usando AOS)
      delay: 100 * (index % 6) + 300,
    });
  });

  // Injeta todos os cards de uma vez no HTML (melhor performance)
  listaPetsContainer.innerHTML = cardsHTML;
}

// Se você precisar que os cards da página principal continuem funcionando
// você pode filtrar o array 'animais' para pegar, por exemplo, os 6 primeiros
// e usar a mesma função `criarCardAnimal` na sua página principal.
