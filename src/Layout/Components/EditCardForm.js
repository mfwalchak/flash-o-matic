// Card front/back text should be updated after saving
// Current text should appear in the text area when edit screen laods
//**TODO** add new routes for this and the other Form Add Card
//to the index.js ROUTING


import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api"
import { useParams, useHistory } from "react-router-dom"
import CardForm from "./CardForm";
import { updateCard, readCard } from "../../utils/api";
//cards new
export default function EditACard() {
    const history = useHistory();
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

    updateCard({ front, back, deckId: Number(deckId), id: Number(cardId) }) //or use deck.id and card.id if you don't need to coerce datatype
        .then(history.push(redirectUrl));
}



    const redirectUrl = `/decks/${deckId}`;
    //form event handler will be different based on which form
    //so we'll want to send in some props and conditions

    return (
        <>
        <div>
            <header><h1>Edit Card</h1></header>
        </div>
        <CardForm 
        initialFront={card.front}
        initialBack={card.back}
        onSubmit={handleEditCard}
        onCancelUrl={redirectUrl}
        onCancelUrl="Cancel"
        formType="edit"
        submitRedirectUrl={redirectUrl}
         />
        </>
    )
}