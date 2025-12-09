const cardsAnimais = document.querySelectorAll(".adoption-card")
const tipo = document.getElementById("animais")
const sexo = document.getElementById("sexo")

const tipoValor = tipo.value.toLowerCase()
const sexoValor = sexo.value.toLowerCase()

cardsAnimais.forEach(card => {
    const cardTipo = document.getElementById("classe")
    const cardSexo = document.getElementById("tipo")
    cardSexo.style.color = "red"
    console.log(cardSexo.textContent)
    
});