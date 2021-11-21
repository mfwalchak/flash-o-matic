import React, { useState, useEffect } from "react";
import { readDeck, createCard } from "../../utils/api"
import { useParams } from "react-router-dom"
import CardForm from "./CardForm";
//cards new
export default function AddACard({ onSubmit }) {
    const { deckId } = useParams();
    const [deck, setDeck ] = useState({})
    //if we were to refactor this we could start with setting a form state to revert to
    //const [ formState, setFormState ] = useState({... INITIAL_FORM_STATE})

    useEffect (()=> {
        readDeck(deckId)
            .then(data => setDeck(data))
            .catch(err => console.log(err));
    }, [deckId])

    const [front, setFront ] = useState("");
    const [back, setBack] = useState("");
    

    function handleAddCard(front, back) {
        console.log("Add card form submitted");
        createCard(deckId, { front, back })
            .then(readDeck(deckId))
            .then(setFront("")) 
            .then(setBack("")); //card needs to be an object
    } //also add the abort signal and clear the form

    //how can we clear the form? We ran createCard so once it's
    //done got ahead and execute the form
    const redirectUrl = `/decks/${deckId}`

    return (
        <>
            <div>Breadcrumbs</div>
        <div>
            <header><h1>{deck.name}</h1></header>
        </div>
        <CardForm 
        onSubmit={handleAddCard}
        formType="edit"
        submitRedirectUrl={redirectUrl}
         />
        </>
    )
}