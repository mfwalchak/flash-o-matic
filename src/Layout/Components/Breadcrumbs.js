
         
        //  this is what is calling breadcrumbs, populate from here
        //     <div><Breadcrumbs crumbs={[{linkPath:"/", label: Home},
        //     {linkPath: `/decks/${deckId}` lable: Deck},
        //     {label: "Add Card"}]}</div>
        //     <>Home &gt; {deck.name} &gt; Edit Card />

function Breadcrumbs({ pageId }) {
    return (
        <>
        {/* <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav> */}
      
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/decks/new">Create Deck</a></li>
          <li class="breadcrumb-item active" aria-current="page">{pageId}</li>
        </ol>
      </nav>
{/*       
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          
          <li class="breadcrumb-item active" aria-current="page">Deck</li>
        </ol>
      </nav> */}
      </>
    )
}
// <li class="breadcrumb-item"><a href="/decks/:deckId/study">Study</a></li>
// <li class="breadcrumb-item"><a href="/decks/:deckId">Deck</a></li>
// <li class="breadcrumb-item"><a href="/decks/new">Create Deck</a></li>


export default Breadcrumbs;