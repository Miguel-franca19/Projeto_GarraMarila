// Script para renderizar por meio de um objeto os 50 animais em animais.html

const animais = [
  {
    classe:"cachorro",
    nome: "Madonna",
    tipo: "Fêmea",
    idade: "12 anos",
    descricao: "Cachorrinha sênior tranquila e experiente, adora carinho suave.",
    imagemSrc: "src/assets/animais/1 - Madonna - 12 anos.png",
    imagemAlt: "Cachorra Madonna",
  },
  {
    classe:"cachorro",
    nome: "Drew",
    tipo: "Macho",
    idade: "3 anos",
    descricao: "Animal jovem e cheio de vitalidade, esperando por um lar amoroso.",
    imagemSrc: "src/assets/animais/2 - Drew - 3 anos.png",
    imagemAlt: "Animal Drew",
  },
  {
    classe:"cachorro",
    nome: "Tobias",
    tipo: "Macho",
    idade: "4 anos",
    descricao: "Cachorro adulto equilibrado, ideal para companhia e brincadeiras moderadas.",
    imagemSrc: "src/assets/animais/3-Tobias-4-anos.png",
    imagemAlt: "Cachorro Tobias",
  },
  {
    classe:"cachorro",
    nome: "Choquito",
    tipo: "Macho",
    idade: "11 anos",
    descricao: "Animal sênior que merece conforto e atenção especial em sua idade.",
    imagemSrc: "src/assets/animais/4-Choquito-11-anos.png",
    imagemAlt: "Animal Choquito",
  },
  {
    classe:"cachorro",
    nome: "Chris",
    tipo: "Macho",
    idade: "3 anos",
    descricao: "Animal jovem e cheio de energia, pronto para alegrar qualquer lar.",
    imagemSrc: "src/assets/animais/5 - Chris - 3 anos.png",
    imagemAlt: "Animal Chris",
  },
  {
    classe:"cachorro",
    nome: "Penny",
    tipo: "Fêmea",
    idade: "+10 anos",
    descricao: "Cachorrinha sênior carinhosa, com muita história e amor para dar.",
    imagemSrc: "src/assets/animais/6 - Penny - +10 anos.png",
    imagemAlt: "Cachorra Penny",
  },
  {
    classe:"cachorro",
    nome: "Melissa",
    tipo: "Fêmea",
    idade: "5 anos",
    descricao: "Cachorrinha adulta dócil e afetuosa, perfeita para família.",
    imagemSrc: "src/assets/animais/7 - Melissa - 5 anos.png",
    imagemAlt: "Cachorra Melissa",
  },
  {
    classe:"cachorro",
    nome: "Pipa",
    tipo: "Fêmea",
    idade: "15 anos",
    descricao: "Cachorrinha idosa especial, precisa de cuidados e muito carinho.",
    imagemSrc: "src/assets/animais/8 - Pipa - 15 anos.png",
    imagemAlt: "Cachorra Pipa",
  },
  {
    classe:"cachorro",
    nome: "Nega",
    tipo: "Fêmea",
    idade: "16 anos",
    descricao: "Vovó canina cheia de personalidade, merece um lar tranquilo para seus anos dourados.",
    imagemSrc: "src/assets/animais/9 - Nega - 16 anos.png",
    imagemAlt: "Cachorra Nega",
  },
  {
    classe:"cachorro",
    nome: "Minimo",
    tipo: "Macho",
    idade: "2 anos",
    descricao: "Animal jovem e cheio de curiosidade, esperando por uma chance de ser feliz.",
    imagemSrc: "src/assets/animais/10 - Mínimo - 2 anos.png",
    imagemAlt: "Animal Minimo",
  },
  {
    classe:"cachorro",
    nome: "Boquito",
    tipo: "Macho",
    idade: "10 anos",
    descricao: "Animal adulto experiente, com personalidade única e cheio de charme.",
    imagemSrc: "src/assets/animais/11 - Boquito - 10 anos.png",
    imagemAlt: "Animal Boquito",
  },
  {
    classe:"gato",
    nome: "Oreo",
    tipo: "Macho",
    idade: "1 ano",
    descricao: "Animal filhote brincalhão, cheio de energia e curiosidade infantil.",
    imagemSrc: "src/assets/animais/12 - Oreo - 1 ano.png",
    imagemAlt: "Animal Oreo",
  },
  {
    classe:"cachorro",
    nome: "Matt",
    tipo: "Macho",
    idade: "3 anos",
    descricao: "Cachorro jovem e ativo, perfeito para atividades e companhia diária.",
    imagemSrc: "src/assets/animais/13-Matt-3-anos.png",
    imagemAlt: "Cachorro Matt",
  },
  {
    classe:"cachorro",
    nome: "Dilma",
    tipo: "Fêmea",
    idade: "16 anos",
    descricao: "Cachorrinha idosa digna e sábia, precisa de cuidados especiais e muito amor.",
    imagemSrc: "src/assets/animais/14 - Dilma - 16 anos.png",
    imagemAlt: "Cachorra Dilma",
  },
  {
    classe:"cachorro",
    nome: "Monalisa",
    tipo: "Fêmea",
    idade: "12 anos",
    descricao: "Cachorrinha sênior com olhar expressivo e coração cheio de afeto.",
    imagemSrc: "src/assets/animais/15 - Monalisa - 12 anos.png",
    imagemAlt: "Cachorra Monalisa",
  },
  {
    classe:"cachorro",
    nome: "Gabriel",
    tipo: "Macho",
    idade: "10 anos",
    descricao: "Cachorro adulto equilibrado, leal e com muita história para contar.",
    imagemSrc: "src/assets/animais/16 - Gabriel - 10 anos.png",
    imagemAlt: "Cachorro Gabriel",
  },
  {
    classe:"cachorro",
    nome: "Bento",
    tipo: "Macho",
    idade: "9 anos",
    descricao: "Cachorro maduro e tranquilo, ideal para quem busca companhia serena.",
    imagemSrc: "src/assets/animais/17 - Bento - 9 anos.png",
    imagemAlt: "Cachorro Bento",
  },
  {
    classe:"cachorro",
    nome: "Miranda",
    tipo: "Fêmea",
    idade: "10 anos",
    descricao: "Cachorrinha adulta elegante e dócil, adora atenção e carinho.",
    imagemSrc: "src/assets/animais/18 - Miranda - 10 anos.png",
    imagemAlt: "Cachorra Miranda",
  },
  {
    classe:"cachorro",
    nome: "Chica",
    tipo: "Fêmea",
    idade: "8 anos",
    descricao: "Cachorrinha adulta vivaz e carinhosa, ainda com muita energia para brincar.",
    imagemSrc: "src/assets/animais/19 - Chica - 8 anos.png",
    imagemAlt: "Cachorra Chica",
  },
  {
    classe:"cachorro",
    nome: "Batman",
    tipo: "Macho",
    idade: "10 anos",
    descricao: "Cachorro heroico e protetor, com personalidade marcante e leal.",
    imagemSrc: "src/assets/animais/20 - Batman - 10 anos.png",
    imagemAlt: "Cachorro Batman",
  },
  {
    classe:"cachorro",
    nome: "Sansão",
    tipo: "Macho",
    idade: "10 anos",
    descricao: "Cachorro forte e imponente, mas com coração mole e necessidade de carinho.",
    imagemSrc: "src/assets/animais/21 - Sansão - 10 anos.png",
    imagemAlt: "Cachorro Sansão",
  },
  {
    classe:"cachorro",
    nome: "Rochelle",
    tipo: "Fêmea",
    idade: "7 anos",
    descricao: "Cachorrinha adulta cheia de vitalidade, doce e companheira.",
    imagemSrc: "src/assets/animais/22 - Rochelle - 7 anos.png",
    imagemAlt: "Cachorra Rochelle",
  },
  {
    classe:"cachorro",
    nome: "Thor",
    tipo: "Macho",
    idade: "9 anos",
    descricao: "Cachorro poderoso e nobre, com presença marcante e coração generoso.",
    imagemSrc: "src/assets/animais/23 - Thor - 9 anos.png",
    imagemAlt: "Cachorro Thor",
  },
  {
    classe:"cachorro",
    nome: "Mel",
    tipo: "Fêmea",
    idade: "11 anos",
    descricao: "Cachorrinha doce como mel, sênior carinhosa que adora aconchego.",
    imagemSrc: "src/assets/animais/24 - Mel - 11 anos.png",
    imagemAlt: "Cachorra Mel",
  },
  {
    classe:"cachorro",
    nome: "Amora",
    tipo: "Fêmea",
    idade: "11 anos",
    descricao: "Cachorrinha sênior afetuosa, com personalidade suave e amorosa.",
    imagemSrc: "src/assets/animais/25 - Amora - 11 anos.png",
    imagemAlt: "Cachorra Amora",
  },
  {
    classe:"cachorro",
    nome: "Neymar",
    tipo: "Macho",
    idade: "8 anos",
    descricao: "Cachorro ágil e cheio de energia, adora brincar e se divertir como um verdadeiro atleta.",
    imagemSrc: "src/assets/animais/26 - Neymar - 8 anos.png",
    imagemAlt: "Cachorro Neymar",
  },
  {
    classe: "Gato",
    nome: "Getúlio",
    tipo: "Macho",
    idade: "1 ano",
    descricao: "Animal jovem e cheio de vida, aprendendo sobre o mundo ao seu redor.",
    imagemSrc: "src/assets/animais/27 - Getúlio - 1 ano.png",
    imagemAlt: "Animal Getúlio",
  },
  {
    classe: "Cachorro",
    nome: "Piolho",
    tipo: "Macho",
    idade: "12 anos",
    descricao: "Animal sênior que superou muitos desafios, agora busca tranquilidade e carinho.",
    imagemSrc: "src/assets/animais/28 - Piolho - 12 anos.png",
    imagemAlt: "Animal Piolho",
  },
  {
    classe: "Cachorro",
    nome: "Risquinho",
    tipo: "Macho",
    idade: "12 anos",
    descricao: "Animal idoso com marca única, personalidade marcante e muita história.",
    imagemSrc: "src/assets/animais/29 - Risquinho - 12 anos.png",
    imagemAlt: "Animal Risquinho",
  },
  {
    classe: "cachorro",
    nome: "Lilica",
    tipo: "Fêmea",
    idade: "5 anos",
    descricao: "Cachorrinha adulta cheia de graça e elegância, adora atenção e mimos.",
    imagemSrc: "src/assets/animais/30 - Lilica - 5 anos.png",
    imagemAlt: "Cachorra Lilica",
  },
  {
    classe: "cachorro",
    nome: "Babinha",
    tipo: "Fêmea",
    idade: "Cachorro",
    descricao: "Cachorrinha carinhosa e dengosa, esperando por um lar cheio de amor.",
    imagemSrc: "src/assets/animais/31-Babinha.png",
    imagemAlt: "Cachorra Babinha",
  },
  {
    classe: "cachorro",
    nome: "Olimpio",
    tipo: "Macho",
    idade: "8 anos",
    descricao: "Cachorro atlético e forte, com espírito olímpico e coração leal.",
    imagemSrc: "src/assets/animais/32-Olimpio-8-anos.jpg",
    imagemAlt: "Cachorro Olimpio",
  },
  {
    classe: "cachorro",
    nome: "Pitty",
    tipo: "Fêmea",
    idade: "3 anos",
    descricao: "Cachorrinha jovem e cheia de personalidade, adora brincar e receber carinho.",
    imagemSrc: "src/assets/animais/33 - Pitty - 3 anos.png",
    imagemAlt: "Cachorra Pitty",
  },
  {
    classe: "cachorro",
    nome: "Eros",
    tipo: "Macho",
    idade: "3 anos",
    descricao: "Cachorro jovem e apaixonante, cheio de amor para dar e receber.",
    imagemSrc: "src/assets/animais/34 - Eros - 3 anos.png",
    imagemAlt: "Cachorro Eros",
  },
  {
    classe: "cachorro",
    nome: "Kiara",
    tipo: "Fêmea",
    idade: "3 anos",
    descricao: "Cachorrinha jovem e radiante, com beleza única e personalidade cativante.",
    imagemSrc: "src/assets/animais/35 - Kiara - 3 anos.png",
    imagemAlt: "Cachorra Kara",
  },
  {
    classe: "cachorro",
    nome: "Maiki",
    tipo: "Macho",
    idade: "4 anos",
    descricao: "Cachorro adulto cheio de estilo e atitude, perfeito companheiro para aventuras.",
    imagemSrc: "src/assets/animais/36-Maiki-4-anos.png",
    imagemAlt: "Cachorro Maiki",
  },
  {
    classe: "Cachorro",
    nome: "Retalho",
    tipo: "Macho",
    idade: "14 anos",
    descricao: "Animal idoso com história de superação, merece um final de vida digno e amoroso.",
    imagemSrc: "src/assets/animais/37 - Retalho - 14 anos.png",
    imagemAlt: "Animal Retalho",
  },
  {
    classe: "cachorro",
    nome: "Milka",
    tipo: "Fêmea",
    idade: "6 anos",
    descricao: "Cachorrinha adulta doce como chocolate, carinhosa e extremamente leal.",
    imagemSrc: "src/assets/animais/38 - Milka - 6 anos.png",
    imagemAlt: "Cachorra Milka",
  },
  {
    classe: "cachorro",
    nome: "Sakira",
    tipo: "Fêmea",
    idade: "6 anos",
    descricao: "Cachorrinha com ritmo no andar e alegria no olhar, cheia de energia positiva.",
    imagemSrc: "src/assets/animais/40 - Sakira - 6 anos.png",
    imagemAlt: "Cachorra Sakira",
  },
  {
    classe: "cachorro",
    nome: "Zimba",
    tipo: "Macho",
    idade: "10 anos",
    descricao: "Cachorro adulto com presença marcante, leal e protetor de sua família.",
    imagemSrc: "src/assets/animais/41 - Zimba - 10 anos.png",
    imagemAlt: "Cachorro Zimba",
  },
  {
    classe: "cachorro",
    nome: "Penélope",
    tipo: "Fêmea",
    idade: "12 anos",
    descricao: "Cachorrinha sênior paciente e fiel, tece laços de amor com quem a acolhe.",
    imagemSrc: "src/assets/animais/42 - Penélope - 12 anos.png",
    imagemAlt: "Cachorra Penélope",
  },
  {
    classe: "cachorro",
    nome: "Zimba",
    tipo: "Macho",
    idade: "6 anos",
    descricao: "Cachorro jovem-adulto com personalidade forte e coração bondoso.",
    imagemSrc: "src/assets/animais/43 - Zimba - 6 anos.png",
    imagemAlt: "Cachorro Zimba",
  },
  
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
                    <span class="tag" id="classe">${animal.classe}</span>
                </div>
                <p class="pet-info" id="tipo">${animal.tipo} • ${animal.idade}</p>
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

