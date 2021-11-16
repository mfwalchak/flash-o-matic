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

    //-------------------------------------------------| this is important |-------------------------------------------//
    //if you don't have a condition in place to account for an empty object your render will fail hence RETURN NULL.

    //**TODO**EDGE CASE - DECK WITH NO CARDS IN IT RENDERS BLANK PAGE THROW ERROR AND RETURN TO HOME SCREEN */
    // if (!studyDeck.cards.length) {
    //     return null;
    // }
    if (studyDeck.cards.length <= 2 || !studyDeck.cards.length) {
        return (
            <div>
                <h2>Not enough cards</h2>
                <p>{`You need at least 3 cards to study. There are ${studyDeck.cards.length} cards in this deck.`}</p>
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
                    <li class="breadcrumb-item active" aria-current="page">{studyDeck.name} / Study</li>
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
                    deckSize={studyDeck.cards.length} />
            </div>
            </>
        )

}