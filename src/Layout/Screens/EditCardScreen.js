
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