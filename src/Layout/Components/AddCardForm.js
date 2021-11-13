//edit or create cards with this form
//what is the reusable piece? TITLE belongs on the page
//but the form itsef is reusable
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
    
    async function handleSubmit(event) {
        event.preventDefault();
        await onSubmit(front, back);
        
    }
    //onSumbit always returns a promise so we can use .then
//to clear the form and reset the STATE of the form
// function handleAddCard(front, back) {
//     event.preventDefault
//     onSubmit(front, back)
//         .then(()=>
//             setFront("")
//             setBack(""
// }; //this should be called on form submission from createDeck


    function handleAddCard(front, back) {
        console.log("Add card form submitted");
        createCard(deckId, { front, back }); //card needs to be an oject
    } //also add the abort signal and clear the form

    //how can we clear the form? We ran createCard so once it's
    //done got ahead and execute the form

    //form event handler will be different based on which form
    //so we'll want to send in some props and conditions

    return (
        <>
            <div>Breadcrumbs</div>
        <div>
            <header><h1>{deck.name}</h1></header>
        </div>
        <CardForm onSubmit={handleAddCard} />
        </>
    )
}



//cards edit