// The Edit Card screen has the following features:

// The path to this screen should include the deckId and the cardId (i.e., /decks/:deckId/cards/:cardId/edit).
// DONE! You must use the readDeck() function from src/utils/api/index.js to load the deck that contains the card to be edited. Additionally, you must use the readCard() function from src/utils/api/index.js to load the card that you want to edit.
// There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck of which the edited card is a member, and finally the text Edit Card :cardId (e.g., Home/Deck React Router/Edit Card 4).
// It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.
// If the user clicks on either "Save" or "Cancel", the user is taken to the Deck screen.

//edit or create cards with this form
//what is the reusable piece? TITLE belongs on the page
//but the form itsef is reusable
//**TODO** add new routes for this and the other Form Add Card
//to the index.js ROUTING


import React, { useState, useEffect } from "react";
import { readDeck, readCard, updateCard } from "../../utils/api"
import { useParams } from "react-router-dom"
import CardForm from "../Components/CardForm";
import EditACard from "../Components/EditCardForm";

export default function EditCard() {
    const { deckId, cardId } = useParams();
    const [deck, setDeck ] = useState({})
    const [card, setCard ] = useState({})
    
//use this effect for the breadcrumb as well
    useEffect (()=> {
        readDeck(deckId)
            .then(data => setDeck(data))
            .catch(err => console.log(err));

        readCard(cardId)
            .then(data => setCard(data))
            .catch(err => console.log(err));
    }, [deckId, cardId]);
// the same thing with the card setup
function handleEditCard(front, back) {
    updateCard({ front, back, deckId: Number(deckId), id: Number(cardId) })
}
    //or use deck.id and card.id if you don't need to coerce datatype

    const redirectUrl = `/decks/${deckId}`
    //form event handler will be different based on which form
    //so we'll want to send in some props and conditions
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{deck.name} / Edit Card {cardId} </li>
            </ol>
      </nav>
        <EditACard
        onSubmit={handleEditCard}
        onCancelUrl={redirectUrl}
        onCancelUrl="Cancel"
        formType="edit"
        submitRedirectUrl={redirectUrl}
         />
        </>
    )
}