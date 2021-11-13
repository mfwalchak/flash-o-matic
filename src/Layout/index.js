import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Screens/HomeScreen";
import CreateDeck from "./Screens/CreateDeckScreen";
import Study from "./Screens/StudyScreen";
import Deck from "./Screens/DeckScreen";
import AddCard from "./Screens/AddCardScreen";
import EditCard from "./Screens/EditCardScreen";
import EditDeck from "./Screens/EditDeckScreen";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
