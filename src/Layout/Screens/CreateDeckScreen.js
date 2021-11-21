import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import Breadcrumbs from "../Components/Breadcrumbs";
import { stripCards, fetchJson, headers } from "./../../utils/api/index";

//SUBMIT BUTTON NEEDS TO REDIRECT USER TO THE NEW DECK PAGE
//**TODO BUGFIX** Home screen does not refresh after form submission */
//**TODO** LINK  deck id to correct prop */

export default function CreateDeck() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("/");
  const handleNameFieldChange = (event) => setName(event.target.value);
  const handleDescFieldChange = (event) => setDescription(event.target.value);
  const deck = { name, description };
  const history = useHistory();

  //onSubmit creates a new deck
  const createHandler = (event) => {
    event.preventDefault();
    async function deckIsBeingCreated() {
      const aNewDeck = await createDeck(deck);
    }
    deckIsBeingCreated()
    .then(history.push("/"));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create a New Deck</h1>
      <form onSubmit={createHandler}>
        <div className="formGroup">
          <label htmlFor="name" style={{display:"block"}}>Name</label>
          <input
            type="text"
            className="formControl"
            id="name"
            placeholder="Enter Deck Name"
            onChange={handleNameFieldChange}
          ></input>
        </div>
        <div className="formGroup">
          <label htmlFor="description" style={{display:"block"}} >Description</label>
          <textarea
            className="formControl"
            id="description"
            placeholder="Enter Deck Description"
            onChange={handleDescFieldChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => history.push("/")}
        >
          CANCEL
        </button>
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
