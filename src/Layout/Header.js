import React from "react";

function Header() {
  return (
    <header className="jumbotron bg-dark">
      <div className="container text-white">
        <h1 className="display-4">Flash-O-Matic</h1>
        <p className="lead">Learning... <span style={{fontStyle: "italic"}}>In A Flash!</span></p>
      </div>
    </header>
  );
}

export default Header;
