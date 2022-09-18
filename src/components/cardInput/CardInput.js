import './CardInput.css';

export default function CardInput() {
    return (
        <div className="container">
            <div className="inputContainer">
                <div className="inputs">
                    <label for="wordInput">Word: </label>
                    <input type="text" id="wordInput"></input>
                </div>
                <div className="inputs">
                    <label for="definitionInput">Definition: </label>
                    <input type="text" id="definitionInput"></input>
                </div>
            </div>
            <div className="submitCardBtn">
                <button id="submitCardBtn">Submit</button>
            </div>
        </div>
    )
}