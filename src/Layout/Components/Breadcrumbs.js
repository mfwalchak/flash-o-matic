
export default function Breadcrumbs() {
    return (
        <>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
      
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
      
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/decks/new">Create Deck</a></li>
          <li class="breadcrumb-item active" aria-current="page">Deck</li>
        </ol>
      </nav>
      </>
    )
}
// <li class="breadcrumb-item"><a href="/decks/:deckId/study">Study</a></li>
// <li class="breadcrumb-item"><a href="/decks/:deckId">Deck</a></li>
// <li class="breadcrumb-item"><a href="/decks/new">Create Deck</a></li>


