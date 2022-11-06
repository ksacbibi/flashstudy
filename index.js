const cardsContainer = document.getElementById("cards-container")
// let cardCounter = localStorage.getItem('cardCounter') == 0 ? 0 : localStorage.getItem('cardCounter');

var savedCards = localStorage.getItem('cardItems');
if (savedCards) {
    cardsContainer.innerHTML = savedCards;
}


const wordInput = document.getElementById("word-input");
const definitionInput = document.getElementById("definition-input");

document.getElementById("add-card-btn").onclick = function() {
    if (wordInput.value && definitionInput.value) {
        cardCounter++;
        const card = document.createElement("div");
        card.setAttribute("onclick", "handleCardClick(cardCounter)")
        card.id = cardCounter.toString();
        card.className = "card";

        const word = document.createElement("div");
        word.classList.add("card-word");
        word.textContent = wordInput.value;

        const definition = document.createElement("div");
        definition.classList.add("card-definition");
        definition.classList.add("hidden");
        definition.textContent = definitionInput.value;


        card.append(word);
        card.append(definition);

        // console.log(!wordInput.value);
    
        cardsContainer.append(card);
        wordInput.value = "";
        definitionInput.value = "";
        localStorage.setItem('cardItems', cardsContainer.innerHTML);
        localStorage.setItem('cardCount', cardCounter);
    }
    console.log(cardCounter);
}

// function handleCardClick(card) {
//     console.log(definition);
//     if (definition.classList.contains("hidden")) {
//         definition.classList.remove("hidden");
//         word.classList.add("hidden");
//     } else {
//         word.classList.remove("hidden");
//         definition.classList.add("hidden");
//     }
// }