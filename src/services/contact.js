// Validação e envio do formulário
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    // Criar mensagem para WhatsApp
    const whatsappNumber = "5514998277874";
    const whatsappMessage = encodeURIComponent(
      `*Nova Mensagem do Site*\n\n` +
        `*Nome:* ${nome}\n` +
        `*E-mail:* ${email}\n` +
        `*Telefone:* ${telefone}\n` +
        `*Assunto:* ${assunto}\n` +
        `*Mensagem:*\n${mensagem}`
    );

    // Abrir WhatsApp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    // Limpar formulário
    this.reset();

    // Feedback visual
    alert(
      "Redirecionando para o WhatsApp! Sua mensagem será enviada diretamente para nossa equipe."
    );
  });

// Máscara de telefone
document.getElementById("telefone").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length <= 11) {
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  }

  e.target.value = value;
});
