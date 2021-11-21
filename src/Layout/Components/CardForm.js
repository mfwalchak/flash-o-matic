import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function CardForm({
  onSubmit,

  initialBack,
  initialFront,
}) {
  const [front, setFront] = useState(initialFront);
  const [back, setBack] = useState(initialBack);
  const { deckId } = useParams();

  useEffect(() => {
    setFront(initialFront);
    setBack(initialBack);
  }, [initialFront, initialBack]);

  console.log(initialFront, initialBack);
  async function handleSubmit(event) {
    event.preventDefault();
    await onSubmit(front, back);
    setFront("");
    setBack("");
    //**TODO** add a cleanup function here
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card-front">Front:</label>
          <textarea
            defaultValue={initialFront}
            onChange={(evt) => setFront(evt.target.value)}
            name="front"
            id="card-front"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div>
          <label htmlFor="card-back">Front:</label>
          <textarea
            defaultValue={initialBack}
            onChange={(evt) => setBack(evt.target.value)}
            name="back"
            id="card-back"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div>
          <Link to={`/decks/${deckId}`} className="btn btn-secondary">
            Done
          </Link>

          <button className="btn btn-secondary">Save</button>
        </div>
      </form>
    </>
  );
}
