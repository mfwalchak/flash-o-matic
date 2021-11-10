//renders the home page with the following features:
// DONE! The path to this screen should be /.
// DONE! A "Create Deck" button is shown and clicking it brings the user to the Create Deck screen.
// DONE! Existing decks are each shown with the deck name
// DONE! Existing decks are shown with the deck description
// DONE! Existing decks are shown with the number of cards in the deck
// **TODO** Each existing deck is it's own container **11/9/21 container wraps the entire list
// DONE! Each existing deck has a “Study,” “View,” and “Delete” button.
// DONE! Clicking the “Study” button brings the user to the Study screen.
// DONE! Clicking the “View” button brings the user to the Deck screen.
// DONE! When the user clicks the "Delete" button, a warning message is shown and the user can click "OK" or "Cancel". 
// **TODO** If the user clicks "OK", the deck is deleted and the deleted deck is no longer visible on the Home screen. **deleteDeck() API function

// You can use window.confirm() to create the modal dialog
import { listDecks } from "../../utils/api"
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Home(){

    //retrieve existing decks with the listDecks function **MAKE COMPONENT? THROUGH LINE 45?
    const [decks, setDecks] = useState([]);
     useEffect(() => {
        async function listExistingDecks() {
            const deckList = await listDecks();
            setDecks(deckList);
        } listExistingDecks();
    }, []);

    //create a delete handler function to delete a deck **MAKE COMPONENT
    const deleteHandler = () => {
        if (window.confirm("Are you sure you're not about to do something rash?")){
            //send a delete request to the server
        }
    }


    //map the existing decks and access their key:values.
    const existingDeckList = decks.map((deck, i) =>(
        <div>
            <ul key={i}>
                <li>Cards: {deck.cards.length}</li>
                <li>{deck.name}</li>
                <li>{deck.description}</li>
            </ul>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">STUDY</Link>
        <Link to={`/decks/${deck.id}`} className="btn btn-primary">VIEW</Link>
        <Link onClick={deleteHandler} className="btn btn-danger">DELETE</Link>
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