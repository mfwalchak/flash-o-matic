import { useLocation } from "react-router-dom";
//  this is what is calling breadcrumbs, populate from here

function Breadcrumbs({ deck, deckId, pageId, pageTitle }) {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href={`${usePathname}`}>Library</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumbs;
