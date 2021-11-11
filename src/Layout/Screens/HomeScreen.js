//renders the home page with the following features:
// DONE! The path to this screen should be /.
// DONE! A "Create Deck" button is shown and clicking it brings the user to the Create Deck screen.
// DONE! Existing decks are each shown with the deck name
// DONE! Existing decks are shown with the deck description
// DONE! Existing decks are shown with the number of cards in the deck
// DONE! Each existing deck is it's own container
// DONE! Each existing deck has a “Study,” “View,” and “Delete” button.
// DONE! Clicking the “Study” button brings the user to the Study screen.
// DONE! Clicking the “View” button brings the user to the Deck screen.
// DONE! When the user clicks the "Delete" button, a warning message is shown and the user can click "OK" or "Cancel". 
// DONE! If the user clicks "OK", the deck is deleted and the deleted deck is no longer visible on the Home screen. **deleteDeck() API function
// **TODO** Deck list refreshes after delete without crashing page.

// You can use window.confirm() to create the modal dialog
import { listDecks, deleteDeck } from "../../utils/api"
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteButton from "../Components/DeleteDeckHandler";

export default function Home(){

    //retrieve existing decks with the listDecks function **MAKE COMPONENT? THROUGH LINE 45?
    const [decks, setDecks] = useState([]);

    async function listExistingDecks() {
        const deckList = await listDecks();
        setDecks(deckList);
    }
     useEffect(() => {listExistingDecks();}, []);

    function deleteHandler(deckId) {
        if (window.confirm("Are you sure?")){
            async function deleteCurrentDeck() {
                const deckToDelete = await deleteDeck(deckId);
                //setDecks(deckToDelete);
                console.log(deckToDelete);
            } deleteCurrentDeck().then(listExistingDecks());
        } 
    };
        
    //map the existing decks and access their key:values.
    const existingDeckList = decks.map((deck, i) =>(
        <div className="container p-3 my-3 border">
            <ul key={i}>
                <li>Cards: {deck.cards.length}</li>
                <li>{deck.name}</li>
                <li>{deck.description}</li>
            </ul>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">STUDY</Link>
        <Link to={`/decks/${deck.id}`} className="btn btn-primary">VIEW</Link>
        <DeleteButton deleteHandler={deleteHandler} deckId={deck.id} />
        </div>
    ))



    //render the home screen with buttons and existing deck list
    return (
        <div>
            {/* //create new deck button brings user to create deck screen */}
            <a href="/decks/new" className="btn btn-light">CREATE NEW</a>
            {/* 
            //each deck is it's own container */}
            <div classname="container">
                {existingDeckList}
            </div>
        </div>

    )
}