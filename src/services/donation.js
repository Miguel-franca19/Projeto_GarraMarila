// 1. ESTRUTURA DE DADOS
const DONATION_DATA = {
  unica: {
    title: "Doação Única",
    subtitle: "Ajude com uma pequena ação",
    price: "R$10,00",
    benefits: [
      "Garante 1 dia de alimentação",
      "Ajuda em resgates imediatos",
      "Receba um comprovante transparente",
    ],
  },
  mensal: {
    title: "Apadrinhamento Mensal",
    subtitle: "Ajude todos os meses com:",
    price: "R$35,00/mês",
    benefits: [
      "Custeia ração, vacinas e vermífugos",
      "Apoio a castrações mensais",
      "Relatório de impacto exclusivo",
      "Receba um comprovante transparente",
    ],
  },
  tratamento: {
    title: "Doação para Tratamento",
    subtitle: "Ajude a fechar uma despesa médica",
    price: "R$150,00",
    benefits: [
      "Cobre um exame de sangue laboratorial",
      "Ajuda na medicação pós-operatória",
      "Suporte à compra de medicamentos caros",
      "Receba um comprovante transparente",
    ],
  },
  outro: {
    title: "Outro Valor",
    subtitle: "Doe o quanto quiser",
    price: "Leia o QR Code e digite o valor no app do seu banco",
    benefits: [
      "Ajude de acordo com suas possibilidades",
      "Sua doação faz a diferença",
      "Receba um comprovante transparente",
    ],
  },
};

// -------------------------------
// 2. QR CODES (prontos p/ trocar quando quiser)
// -------------------------------
const QRCODES = {
  unica: "src/assets/qrcode-big.png",
  mensal: "src/assets/qrcode-big.png",
  tratamento: "src/assets/qrcode-big.png",
  outro: "src/assets/qrcode-big.png",
};

// -------------------------------
// 3. PEGAR ELEMENTOS
// -------------------------------
const buttons = document.querySelectorAll(".buttons-donation .see-all-btn");
const subtitleEl = document.getElementById("subtitle");
const benefitsListEl = document.getElementById("benefits-list");
const priceEl = document.getElementById("donation-price");
const qrcodeImg = document.getElementById("qrcode-img");

// -------------------------------
// 4. FUNÇÃO: ANIMAÇÃO E TROCA DO QR CODE
// -------------------------------
function updateQRCode(type) {
  // fade-out
  qrcodeImg.classList.add("qrcode-fade-out");

  setTimeout(() => {
    // troca da imagem
    qrcodeImg.src = QRCODES[type] || QRCODES["mensal"];

    // volta pro fade-in
    qrcodeImg.classList.remove("qrcode-fade-out");
    qrcodeImg.classList.add("qrcode-fade-in");

    // remove a classe depois
    setTimeout(() => {
      qrcodeImg.classList.remove("qrcode-fade-in");
    }, 250);
  }, 250);
}

// -------------------------------
// 5. FUNÇÃO PARA ATUALIZAR O CONTEÚDO
// -------------------------------
function updateDonation(type) {
  const data = DONATION_DATA[type];
  if (!data) return;

  subtitleEl.textContent = data.subtitle;
  priceEl.textContent = data.price;

  benefitsListEl.innerHTML = "";
  data.benefits.forEach((benefit) => {
    const li = document.createElement("li");
    li.textContent = benefit;
    benefitsListEl.appendChild(li);
  });

  updateQRCode(type); // <<< anima + troca o QR Code aqui
}

// -------------------------------
// 6. EVENTOS DOS BOTÕES
// -------------------------------
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.getAttribute("data-type");
    updateDonation(type);
  });
});

// -------------------------------
// 7. VALOR PADRÃO
// -------------------------------
updateDonation("mensal");
