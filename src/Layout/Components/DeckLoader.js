import { readDeck } from "../../utils/api";
import LoadCard from "./LoadCard";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

//take in a deckId as a prop
function DeckLoader() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    async function loadDeck() {
      const deckList = await readDeck(deckId);
      setDeck(deckList);
    }
    loadDeck();
  }, [deckId]);
  //map the existing decks and access their key:values.
  console.log(deck);
  const loadedDeck = deck.cards.map((card, i) => (
    <div className="container p-3 my-3 border">
      <ul key={i}>
        <li>
          {card[i]} of {deck.cards.length} cards
        </li>
        <LoadCard card={card[i]} />
      </ul>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
        STUDY
      </Link>
      <Link to={`/decks/${deck.id}`} className="btn btn-primary">
        VIEW
      </Link>
      {/* <DeleteButton deleteHandler={deleteHandler} deckId={deck.id} /> */}
    </div>
  ));

  return <div>{loadedDeck}</div>;
}

export default DeckLoader;
