import './CardInput.css';
import { useState } from 'react';

export default function CardInput() {
    const [wordInput, setWordInput] = useState(); // get the word inputted by user
    const [definitionInput, setDefinitionInput] = useState(); // get definition inputted by user
    const [card, setCard] = useState(); // card object that will contain word and definition
    const [deck, setDeck] = useState([]); // deck will be an array of all cards

    const handleButton = () => {
        setCard({word: wordInput, definition: definitionInput});
        setDeck(deck => [...deck, card]); // add new card to deck
        // render flashcard... somehow..
    }

    const handleChange = e => {
        if (e.target.id === "wordInput") {
            setWordInput(e.target.value);
        } else if (e.target.id === "definitionInput") {
            setDefinitionInput(e.target.value);
        }
    }
    return (
        <div className="container">
            <div className="inputContainer">
                <div className="inputs">
                    <label for="wordInput">Word: </label>
                    <input type="text" id="wordInput" onChange={handleChange}></input>
                </div>
                <div className="inputs">
                    <label for="definitionInput">Definition: </label>
                    <input type="text" id="definitionInput"></input>
                </div>
            </div>
            <div className="submitCardBtn">
                <button id="submitCardBtn" onclick={handleButton}>Submit</button>
            </div>
        </div>
    )
}