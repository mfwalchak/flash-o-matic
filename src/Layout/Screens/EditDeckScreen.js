// The Edit Deck screen has the following features:

// DONE! The path to this screen should include the deckId(i.e., /decks/:deckId/edit).
// DONE! You must use the readDeck() function from src/utils/api/index.js to load the existing deck.
// There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text Edit Deck (e.g., Home/Rendering in React/Edit Deck).
// DONE! It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck.
// DONE! The user can edit and update the form.
// DONE! If the user clicks "Cancel", the user is taken to the Deck screen.

import React, { useState, useEffect} from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";

export default function EditDeck() {
    const [editDeck, setEditDeck] = useState({cards:[]}); //use a template object {cards:[]} as the default useState until componetized with an if([]) check
    const { deckId } = useParams();
    //const [newDeckId, setNewDeckId] = useState(editDeck.id)
    const [name, setName] = useState(editDeck.name)
    const [description, setDescription] = useState(editDeck.description)
    const handleNameFieldChange = (event) => setName(event.target.value);
    const handleDescFieldChange = (event) => setDescription(event.target.value);
    const history = useHistory();
    const editedDeck = {id: deckId, name, description};
 
    console.log(name, description);
    useEffect(() => {
        readDeck(deckId)
            .then(deck => setEditDeck(deck))
    }, [deckId])

    // async function editHandler(event) {
    //     event.preventDefault();
    //     setEditDeck(name, description);
    //     await updateDeck(editDeck);
    //     history.push(`/decks/${deckId}`)
    // }

    const editHandler = (event) => {
        event.preventDefault();
        console.log(editedDeck);
        updateDeck(editedDeck)
            .then(history.push(`/decks/${deckId}`));
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{editDeck.name}</li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                </ol>
            </nav>
            <h1>Edit This Deck</h1>
            <h2>{editDeck.name}</h2>
            <form onSubmit={editHandler}>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="formControl" id="name" defaultValue={editDeck.name} onChange={handleNameFieldChange}></input>
                </div>
                <div className="formGroup">
                    <label htmlFor="description">Description</label>
                    <textarea className="formControl" id="description" defaultValue={editDeck.description} onChange={handleDescFieldChange}></textarea>
                </div>
            <button type="button" className="btn btn-light" onClick={()=>history.push("/")}>CANCEL</button>
            <button type="submit" className="btn btn-primary">SUBMIT</button> 
            </form>

        </div>
    )
}