
// The path to this screen should include the deckId (i.e., /decks/:deckId/cards/new).
// You must use the readDeck() function from src/utils/api/index.js to load the deck that you're adding the card to.
// There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck to which the cards are being added, and finally the text Add Card (e.g., Home/React Router/Add Card).
// A form is shown with the "front" and "back" fields for a new card. Both fields use a <textarea> tag that can accommodate multiple lines of text.
// If the user clicks "Save", a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.
// If the user clicks "Done", the user is taken to the Deck screen.

export default function AddCard() {
    return (
        <>
        <h1>ADD_A_CARD_HERE</h1>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">CURRENT_DECK_ID / Add Card</li>
        </ol>
      </nav>
        </>
    )
}