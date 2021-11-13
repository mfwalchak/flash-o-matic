
// DONE! The path to this screen should include the deckId (i.e., /decks/:deckId/study).
// DONE! You must use the readDeck() function from src/utils/api/index.js to load the deck that is being studied.
// DONE! There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study).
// DONE! The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.
// DONE! Cards are shown one at a time, front-side first.
// DONE! A button at the bottom of each card "flips" it to the other side.
// DONE! After flipping the card, the screen shows a next button (see the "Next button" section below) to continue to the next card.
// DONE! After the final card in the deck has been shown, a message (see the "Restart prompt" section below) is shown offering the user the opportunity to restart the deck.
// DONE! If the user does not restart the deck, they should return to the home screen.
// Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.
// The Next button appears after the card is flipped.
// Restart prompt when all cards are finished, a message using window.confirm() is shown and the user is offered the opportunity to restart the deck. 
// If the user does not restart the deck, they return to the home screen.
// Studying a Deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.
// Clicking the "Add Cards" button should take the user to the Add Card screen.
import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import LoadCard from "../Components/LoadCard";
import AddCard from "./AddCardScreen";

export default function Study() {

    // set the deck state and load the deck with async/await function readDeck(deckId, signal)
    const [studyDeck, setStudyDeck] = useState({cards:[]}); //use a template object {cards:[]} as the default useState until componetized with an if([]) check
    const { deckId } = useParams();
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        readDeck(deckId)
            .then(deck => setStudyDeck(deck))
                setCurrentCard(0);
    }, [deckId])
    //console.log(studyDeck);// an object {cards:[], description:"", id:Number, name:""}
    //console.log(studyDeck.cards)// an array of object cards [{id:Number, front:"", back:"", deckId:Number}]
    //console.log(studyDeck.cards[1]);// an object {back:"", deckId:Number, front:"", id:Number}
    //console.log("Log StudyDeck from Study Screen", studyDeck);

    //-------------------------------------------------| this is important |-------------------------------------------//
    //if you don't have a condition in place to account for an empty object your render will fail
    if (!studyDeck.cards.length) {
        return null;
    }
    if (studyDeck.cards.length <= 2) {
        return (
            <div>
                <h2>You Need More Cards Broski!</h2>
                <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">CreateMoreCards</Link>
            </div>
            
        )
    }

    //when the card next button is clicked, sets card index +1
    //passes data back into the LoadCard
    function nextHandler(){ 
        setCurrentCard(currentCard + 1);
    }
    
        return (
            <>
            <div>
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"></li>
                </ol>
            </nav>
            <div>
                <h2>Studying: {studyDeck.name}</h2>
            </div>
            </div>
            <div className="wrapper">
                <LoadCard 
                    card={studyDeck.cards[currentCard]} 
                    currentCard={currentCard} 
                    nextHandler={nextHandler}
                    deckSize={studyDeck.cards.length} /> {/*pass in the value of the individual card object for LoadCard to render*/}
            </div>
            </>
        )

}