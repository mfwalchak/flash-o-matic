  import { useLocation } from "react-router-dom";       
        //  this is what is calling breadcrumbs, populate from here


function Breadcrumbs({ deck, deckId, pageId, pageTitle }) {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
    return (
        <>
        {/* <div>
        <Breadcrumbs crumbs={[{linkPath:"/", label: "Home"},
        {linkPath: `/decks/${deckId}`, label: "Deck"},
            {label: "Add Card"}]} />
        </div>
        <>Home &gt; {deck.name} &gt; Edit Card</> */}
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/decks/">{pageId}</a></li>
          <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
        </ol>
      </nav>

      </>
    )
}


export default Breadcrumbs;