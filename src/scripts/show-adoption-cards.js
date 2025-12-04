const seeAllButton = document.querySelector(".see-all-btn");
const cardsContainer = document.querySelector(".adoption-cards-container");

seeAllButton.addEventListener("click", (event) => {
    event.preventDefault()
    cardsContainer.classList.add('show-all');
    seeAllButton.classList.add("d-none");
})

