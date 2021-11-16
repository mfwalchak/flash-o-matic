import { listDecks, deleteDeck } from "../../utils/api"
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteButton from "../Components/DeleteDeckHandler";

export default function Home(){

    //retrieve existing decks with the listDecks function **TODO** MAKE IT'S OWN COMPONENT
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
                listExistingDecks();
                //setDecks(deckToDelete);
                console.log(deckToDelete)
            } deleteCurrentDeck();
            listExistingDecks();
            
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
            <div className="container">
                {existingDeckList}
            </div>
        </div>

    )
}