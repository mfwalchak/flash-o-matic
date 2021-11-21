import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { deleteDeck } from "../../utils/api";

function DeleteButton({ deleteHandler, deckId }) {
  return (
    <button onClick={() => deleteHandler(deckId)} className="btn btn-danger oi oi-trash">
      DELETE
    </button>
  );
}

export default DeleteButton;
