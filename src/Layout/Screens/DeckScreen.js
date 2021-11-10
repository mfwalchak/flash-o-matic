import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
// The path to this screen should include the deckId (i.e., /decks/:deckId).
// You must use the readDeck() function from src/utils/api/index.js to load the existing deck.
// DONE! There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).
// The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").
// The screen includes "Edit", "Study", "Add Cards", and "Delete" buttons. Each button takes the user to a different destination, as follows:

// | Button Clicked | Destination |
// | -------------- | ---------------------------------------------------------------------------------------------- |
// | "Edit" | Edit Deck Screen |
// DONE! | "Study" | Study screen |
// | "Add Cards" | Add Card screen |
// | "Delete" | Shows a warning message before deleting the deck]( See the "Delete Card Prompt" section below) |

// Each card in the deck:

// is listed on the page under the "Cards" heading.
// shows a question and the answer to the question.
// has an “Edit” button that takes the user to the Edit Card screen when clicked.
// has a “Delete” button that allows that card to be deleted.

export default function Deck() {
    const [currentDeck, setCurrentDeck] = useState();
    useEffect(() => {
        async function getCurrentDeck() {
            const loadDeck = await readDeck(2) //**TODO**2 is a placeholder. DYNAMICALLY UPDATE DECK.ID AS readDeck Param
            setCurrentDeck(loadDeck);
        } getCurrentDeck();
    }, []);



    return (
        <>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">CURRENT_DECK_ID</li>
            </ol>
        </nav>
        <Link to="/decks/:deckId/study" className="btn btn-primary">STUDY</Link>
        </>
    )
}