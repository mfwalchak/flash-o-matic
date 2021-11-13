import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "../../utils/api";
import Breadcrumbs from "../Components/Breadcrumbs";

// DONE! The path to this screen should be /decks/new.
// DONE! There is a breadcrumb navigation bar with a link to home / followed by the text Create Deck (i.e., Home/Create Deck).
// DONE! A form is shown with the appropriate fields for creating a new deck.
// DONE! The name field is an <input> field of type text.
// DONE! The description field is a <textarea> field that can be multiple lines of text.
// If the user clicks "submit", the new deck is added to the database
// If the user clicks "submit" the user is taken to the Deck screen.
// DONE! If the user clicks "cancel", the user is taken to the Home screen.

//**TODO** LINK  deck id to correct prop */
export default function CreateDeck() {
    //invoke the createDeck() function from API/index.js
    

    return (
        <div>
            <Breadcrumbs pagedId={"/Create Deck"}/>
            <h1>Create a New Deck</h1>
            <form>
                <div className="formGroup">
                    <label for="name">Name</label>
                    <input type="text" className="formControl" id="name" placeholder="Enter Deck Name"></input>
                </div>
                <div className="formGroup">
                    <label for="description">Description</label>
                    <textarea className="formControl" id="description" placeholder="Enter Deck Description"></textarea>
                </div>
            </form>
            <Link to="/" className="btn btn-light">CANCEL</Link>
            <Link to="/decks/:deckId" className="btn btn-primary">SUBMIT</Link> 
        </div>
    )
}