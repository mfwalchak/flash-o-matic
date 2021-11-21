import { listDecks, deleteDeck } from "../../utils/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../Components/DeleteDeckHandler";

export default function Home() {
  //retrieve existing decks with the listDecks function **TODO** MAKE IT'S OWN COMPONENT
  const [decks, setDecks] = useState([]);

  async function listExistingDecks() {
    const deckList = await listDecks();
    setDecks(deckList);
  }
  useEffect(() => {
    listExistingDecks();
  }, []);

  function deleteHandler(deckId) {
    if (window.confirm("Are you sure?")) {
      async function deleteCurrentDeck() {
        const deckToDelete = await deleteDeck(deckId);
        listExistingDecks();
        //setDecks(deckToDelete);
        console.log(deckToDelete);
      }
      deleteCurrentDeck();
      listExistingDecks();
    }
  }
  //map the existing decks and access their key:values.
  const existingDeckList = decks.map((deck, i) => (
    <div key={i} className="container p-3 my-3 border">
      <ul>
        <li key={deck.cards.length}>{deck.cards.length} cards</li>
        <li key={deck.name}>{deck.name}</li>
        <li key={deck.description}>{deck.description}</li>
      </ul>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary oi oi-book">
      &nbsp;STUDY
      </Link>
      <Link to={`/decks/${deck.id}`} className="btn btn-primary oi oi-eye">
      &nbsp;VIEW
      </Link>
      <DeleteButton deleteHandler={deleteHandler} deckId={deck.id} />
    </div>
  ));

  return (
    <div>
      <a href="/decks/new" className="btn btn-dark oi oi-plus">{`CREATE NEW`}</a>
      <div className="container">{existingDeckList}</div>
    </div>
  );
}
