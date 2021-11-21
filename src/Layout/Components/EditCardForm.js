import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { useParams, useHistory } from "react-router-dom";
import CardForm from "./CardForm";
import { updateCard, readCard } from "../../utils/api";

export default function EditACard() {
  const history = useHistory();
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  useEffect(() => {
    readDeck(deckId)
      .then((data) => setDeck(data))
      .catch((err) => console.log(err));

    readCard(cardId)
      .then((data) => setCard(data))
      .catch((err) => console.log(err));
  }, [deckId, cardId]);
  function handleEditCard(front, back) {
    updateCard({
      front,
      back,
      deckId: Number(deckId),
      id: Number(cardId),
    }).then(history.push(redirectUrl));
  }
  const redirectUrl = `/decks/${deckId}`;

  return (
    <>
      <div>
        <header>
          <h1>Edit Card</h1>
        </header>
      </div>
      <CardForm
        initialFront={card.front}
        initialBack={card.back}
        onSubmit={handleEditCard}
        onCancelUrl="Cancel"
        formType="edit"
        submitRedirectUrl={redirectUrl}
      />
    </>
  );
}
