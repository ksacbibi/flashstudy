// get values from local storage
const cardsContainer = document.getElementById("cards-container")
let cardIDNum = localStorage.getItem('cardIDNum') == 0 ? 0 : localStorage.getItem('cardIDNum');
// new ID nums can't be less than the previous ID nums -- need to find a better way for these

var savedCards = JSON.parse(localStorage.getItem('cardItems')) ? JSON.parse(localStorage.getItem('cardItems')) : []; //this should return array of html elements
console.log(savedCards);
let cardsToDisplay = "";
if (savedCards) {
    // add all html together to one string to set as innerhtml of cardsContainer
    for (let i = 0; i < savedCards.length; i++) {
        cardsToDisplay = cardsToDisplay + savedCards[i];
    }
    cardsContainer.innerHTML = cardsToDisplay;
}


const wordInput = document.getElementById("word-input");
const definitionInput = document.getElementById("definition-input");

// create new card
document.getElementById("add-card-btn").onclick = function() {
    if (wordInput.value && definitionInput.value) {
        // card count used for id
        cardIDNum++;

        // whole card container
        const card = document.createElement("div");
        card.setAttribute("onclick", "handleCardClick(" + cardIDNum + ")")
        card.id = "cardNumber" + cardIDNum.toString();
        card.className = "card";

        // word content
        const word = document.createElement("div");
        word.classList.add("card-word");
        word.textContent = wordInput.value;

        // definition content
        const definition = document.createElement("div");
        definition.classList.add("card-definition");
        definition.classList.add("hidden");
        definition.textContent = definitionInput.value;

        // add delete button to card
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.setAttribute("onclick", "handleDeleteClick(" + cardIDNum +")");
        deleteBtn.innerHTML = "Delete";
        card.append(deleteBtn);

        // add content to content container
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("card-content");
        contentContainer.append(word);
        contentContainer.append(definition);
        card.append(contentContainer);
    
        // add final card to page
        cardsContainer.append(card);
        wordInput.value = "";
        definitionInput.value = "";
        
        console.log(card.outerHTML);
        console.log(JSON.stringify(card));
        savedCards.push(card.outerHTML);
        localStorage.setItem('cardItems', JSON.stringify(savedCards));
        localStorage.setItem('cardIDNum', cardIDNum);
    }
}

function handleCardClick(cardNum) {
    const cardId = "cardNumber" + cardNum.toString();
    const cardComponent = document.getElementById(cardId);

    console.log(cardComponent);
    const word = cardComponent.children[1].children[0];
    const definition = cardComponent.children[1].children[1];

    if (definition.classList.contains("hidden")) {
        definition.classList.remove("hidden");
        word.classList.add("hidden");
    } else {
        word.classList.remove("hidden");
        definition.classList.add("hidden");
    }
}

function handleDeleteClick(cardNum) {
    const cardId = "cardNumber" + cardNum.toString();
    const cardComponent = document.getElementById(cardId);
    cardComponent.outerHTML = "";

    const updatedCardItems = JSON.parse(localStorage.getItem('cardItems')).splice(cardNum);
    console.log(JSON.stringify(updatedCardItems));
    localStorage.setItem('cardItems', JSON.stringify(updatedCardItems));

}