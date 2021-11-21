import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import DeckLoader from "../Components/DeckLoader";
import DeleteButton from "../Components/DeleteDeckHandler";
import LoadCard from "../Components/LoadCard";
import { deleteCard, deleteDeck } from "../../utils/api";

export default function Deck() {
  const { deckId } = useParams();
  const [currentDeck, setCurrentDeck] = useState({ cards: [] });
  const history = useHistory();

  useEffect(() => {
    async function getCurrentDeck() {
      const loadDeck = await readDeck(deckId);
      setCurrentDeck(loadDeck);
    }
    getCurrentDeck();
  }, [deckId]);

  if (!currentDeck.cards.length) {
    return (
      <div>
        <p>{`You need at least 3 cards to study. There are ${currentDeck.cards.length} cards in this deck.`}</p>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
          CreateMoreCards
        </Link>
      </div>
    );
  }

  //**TODO** This all works but doesn't refresh the home page with the updated card list so throws a 404 error if you click on the deck again */
  function deleteHandlerDeck(deckId) {
    if (
      window.confirm(
        "Are you sure?\nThis will delete the current deck and return you to the Home screen."
      )
    ) {
      async function deleteCurrentDeck() {
        const deckToDelete = await deleteDeck(deckId);
        //setDecks(deckToDelete);
        console.log(deckToDelete);
      }
      deleteCurrentDeck();
      history.push("/");
    }
  }

  //**TODO** SHOULD RE-RENDER CONTENT INSTEAD OF REFRESH WHOLE PAGE AFTER CLICK */
  function deleteHandlerCard(cardId) {
    if (window.confirm("Are you sure?")) {
      async function deleteCurrentCard() {
        const cardToDelete = await deleteCard(cardId);
      }
      deleteCurrentCard();
      history.go(0);
    }
  }
  //map the existing cards and render to the list
  //**TODO** MAKE THIS IT'S OWN COMPONENT - THIS IS COPIED AND REUSED FROM THE DECK MAPPER ON HOME */
  const existingCardList = currentDeck.cards.map((card, i) => (
    <div key={i} className="container p-3 my-3 border">
      <ul>
        <li key={card.front} label="front">
          {card.front}
        </li>
        <li key={card.back} label="back">
          {card.back}
        </li>
      </ul>
      <Link
        to={`/decks/${deckId}/cards/${card.id}/edit`}
        className="btn btn-dark oi oi-pencil"
      >
        EDIT CARD
      </Link>
      <DeleteButton deleteHandler={deleteHandlerCard} deckId={card.id} />
    </div>
  ));

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currentDeck.name}
          </li>
        </ol>
      </nav>
      <h2>Viewing Deck - {currentDeck.name}</h2>
      <h5>Cards:</h5>
      <p>{currentDeck.description}</p>
      <Link to={`/decks/${deckId}/study`} className="btn btn-primary oi oi-book">
        STUDY
      </Link>
      <Link to={`/decks/${deckId}/edit`} className="btn btn-dark oi oi-pencil">
        EDIT DECK
      </Link>
      <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary oi oi-plus">
        ADD CARDS
      </Link>
      <DeleteButton deleteHandler={deleteHandlerDeck} deckId={deckId} />
      <div className="container">{existingCardList}</div>
    </>
  );
}
