   import React, { useEffect } from "react";
   import { deleteDeck } from "../../utils/api";


//    //create a delete handler function to delete a deck **MAKE COMPONENT
//     function DeleteHandler(deckId, setDecks) {
//         if (window.confirm("Are you sure?")){
//             async function deleteCurrentDeck() {
//                 const deckToDelete = await deleteDeck(deckId);
//                 setDecks(deckToDelete);
//             } deleteCurrentDeck();
//         }
//     };

function DeleteButton({ deleteHandler, deckId }) {
    return <button onClick={()=>deleteHandler(deckId)} className="btn btn-danger">DELETE</button>
}

    export default DeleteButton;