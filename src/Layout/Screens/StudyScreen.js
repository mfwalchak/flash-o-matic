import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import LoadCard from "../Components/LoadCard";

export default function Study() {
  const [studyDeck, setStudyDeck] = useState({ cards: [] });
  const { deckId } = useParams();
  const [currentCard, setCurrentCard] = useState(0);
  const deckIsShort = studyDeck.name;
  useEffect(() => {
    readDeck(deckId).then((deck) => setStudyDeck(deck));
    setCurrentCard(0);
  }, [deckId]);

  if (studyDeck.cards.length <= 2 || !studyDeck.cards.length) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {studyDeck.name} / Study
            </li>
          </ol>
        </nav>
        <h2>Not enough cards in:</h2>
        <h2>{deckIsShort}</h2>
        <p>{`You need at least 3 cards to study. There are ${studyDeck.cards.length} cards in this deck.`}</p>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
          CreateMoreCards
        </Link>
      </div>
    );
  }

  //when the card next button is clicked, sets card index +1 & passes data back into the LoadCard
  function nextHandler() {
    setCurrentCard(currentCard + 1);
  }

  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {studyDeck.name} / Study
            </li>
          </ol>
        </nav>
        <div>
          <h2>Studying:</h2>
          <h2>{studyDeck.name}</h2>
        </div>
      </div>
      <div className="wrapper">
        <LoadCard
          card={studyDeck.cards[currentCard]}
          currentCard={currentCard}
          nextHandler={nextHandler}
          deckSize={studyDeck.cards.length}
        />
      </div>
    </>
  );
}
