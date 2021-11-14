import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import DeckLoader from "../Components/DeckLoader";
import DeleteButton from "../Components/DeleteDeckHandler";
import LoadCard from "../Components/LoadCard";
import { deleteCard, deleteDeck } from "../../utils/api";

// **TODO IMPLEMENT BREADCRUMB COMPONENT** There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).

export default function Deck() {
    const {deckId} = useParams();
    const [currentDeck, setCurrentDeck] = useState({cards:[]});
    const history = useHistory();

    useEffect(() => {
        async function getCurrentDeck() {
            const loadDeck = await readDeck(deckId)
            setCurrentDeck(loadDeck);
        } getCurrentDeck();
    }, []);
    console.log("currentDeck State:", currentDeck.cards.length);

    if (!currentDeck.cards.length) {
        return null;
    }

    //**TODO** This all works but doesn't refresh the home page with the updated card list so throws a 404 error if you click on the deck again */
    function deleteHandlerDeck(deckId) {
        if (window.confirm("Are you sure?\nThis will delete the current deck and return you to the Home screen.")){
            async function deleteCurrentDeck() {
                const deckToDelete = await deleteDeck(deckId);
                //setDecks(deckToDelete);
                console.log(deckToDelete)
            } deleteCurrentDeck();
            history.push("/")
            
        } 
    };


    //**TODO** SHOULD RE-RENDER CONTENT INSTEAD OF REFRESH WHOLE PAGE AFTER CLICK */
    function deleteHandlerCard(cardId) {
        if (window.confirm("Are you sure?")){
            async function deleteCurrentCard() {
                const cardToDelete = await deleteCard(cardId);
                // setCurrentDeck(deckId);
            } deleteCurrentCard();
            history.go(0);
            
        } 
    };

        //map the existing cards and render to the list
        //**TODO** MAKE THIS IT'S OWN COMPONENT - THIS IS COPIED AND REUSED FROM THE DECK MAPPER ON HOME */
        const existingCardList = currentDeck.cards.map((card, i) =>(
            <div className="container p-3 my-3 border">
                <ul key={i}>
                    <li>Front: {card.front}</li>
                    <li>Back: {card.back}</li>
                </ul>
            <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-dark">EDIT</Link>
            <DeleteButton deleteHandler={deleteHandlerCard} deckId={card.id} />
            </div>
        ))

    return (
        <>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">CURRENT_DECK_ID</li>
            </ol>
        </nav>
        <h2>Viewing Deck - {currentDeck.name}</h2>
        <h5>Cards:</h5>
        <p>{currentDeck.description}</p>
        <Link to={`/decks/${deckId}/study`} className="btn btn-primary">STUDY</Link>
        <Link to={`/decks/${deckId}/edit`} className="btn btn-dark">EDIT</Link>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">ADD CARDS</Link>
        <DeleteButton deleteHandler={deleteHandlerDeck} deckId={deckId}/>
        <div classname="container">
                {existingCardList}
            </div>
        </>
    )
}