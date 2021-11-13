//edit or create cards with this form
//what is the reusable piece? TITLE belongs on the page
//but the form itsef is reusable
//**TODO** add new routes for this and the other Form Add Card
//to the index.js ROUTING


import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api"
import { useParams } from "react-router-dom"
import CardForm from "./CardForm";
//cards new
export default function CardsNew () {
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
function handleEditCard(front, back) {}
    updateCard({ front, back deckId: Number(deckId) id: Number(cardId) }) //or use deck.id and card.id if you don't need to coerce datatype
}



    const redirectUrl = `/decks/${deckId}`;
    //form event handler will be different based on which form
    //so we'll want to send in some props and conditions

    return (
        <>
            <div><Breadcrumbs 
            crumbs={[{linkPath:"/", label: Home},
            {linkPath: `/decks/${deckId}` lable: Deck},
            {label: "Add Card"}]}</div>
            <>Home &gt; {deck.name} &gt; Edit Card</>
        <div>
            <header><h1>Edit Card</h1></header>
        </div>
        <CardForm 
        onSubmit={handleEditCard}
        onCancelUrl={redirectUrl}
        onCancelUrl="Cancel"
        formType="edit"
        submitRedirectUrl={redirectUrl}
         />
        </>
    )
}