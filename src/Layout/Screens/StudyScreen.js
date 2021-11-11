import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams, useLocation } from "react-router-dom";

// DONE! The path to this screen should include the deckId (i.e., /decks/:deckId/study).
// DONE! You must use the readDeck() function from src/utils/api/index.js to load the deck that is being studied.
// DONE! There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study).
// DONE! The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.
// Cards are shown one at a time, front-side first.
// A button at the bottom of each card "flips" it to the other side.
// After flipping the card, the screen shows a next button (see the "Next button" section below) to continue to the next card.
// After the final card in the deck has been shown, a message (see the "Restart prompt" section below) is shown offering the user the opportunity to restart the deck.
// If the user does not restart the deck, they should return to the home screen.
// Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.
// The Next button appears after the card is flipped.
// Restart prompt when all cards are finished, a message using window.confirm() is shown and the user is offered the opportunity to restart the deck. 
// If the user does not restart the deck, they return to the home screen.
// Studying a Deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.
// Clicking the "Add Cards" button should take the user to the Add Card screen.

export default function Study() {

    // set the deck state and load the deck with async/await function readDeck(deckId, signal)
    const [studyDeck, setStudyDeck] = useState({cards:[]}); //use a template object as the default useState until componetized with an if([]) check
    const userId = useParams();
    console.log(userId);
    useEffect(() => {
        async function getStudyDeck() {
            const loadStudyDeck = await readDeck(userId)
            setStudyDeck(loadStudyDeck);
        } getStudyDeck();
    }, [userId]);
    console.log(studyDeck.cards)


    // // studyDeck is an OBJECT, the cards in it are an ARRAY
    const studyDeckCards = studyDeck.cards.map((card, i) => (
            <div className="card" style={{width: "18rem"}} key={i}>
            <div className="card-body">
            <h5 className="card-title">{card.id}</h5>
            <p className="card-text">{card.front}</p>
            <p className="card-text">{card.back}</p>
            <button className="btn btn-light">FLIP</button>
            <button className="btn btn-light">NEXT</button>
            </div>
        </div>    
    ))
    //current study deck is main screen name
    return (
        <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page"></li>
            </ol>
        </nav>    
        {/* <div>
            <h2>{studyDeck.name}</h2>
        </div>
        <div>
            {studyDeckCards}
        </div> */}
        </div>
    )

}