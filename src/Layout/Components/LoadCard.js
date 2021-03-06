import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Renders the current card and allows it to be flipped

function LoadCard({ card, nextHandler, currentCard, deckSize }) { // card is an object {back:"", deckId:Number, front:"", id:Number}
    const [flipSide, setFlipSide] = useState(true)
    console.log(flipSide);
    const { back, deckId, front, id } = card;
    const history = useHistory();

    function flipHandler() {
        setFlipSide(!flipSide);
    }
    function handleYourShift(){
        flipHandler();
        nextHandler();
        if (currentCard + 1 >= deckSize) {
            const responseOk = window.confirm("Would you like to restart this deck?");
            if (responseOk){
                history.go(0);
            } else {
                history.push("/")
            }
        }
    }
    const nextButton = flipSide ? null : <button className="btn btn-warning" onClick={handleYourShift}>NEXT</button>;
    const cardText = flipSide ? front : back;

        return(
            // <li key={card.id}>card</li>
            <>
            <div className="card" style={{width: "50vw"}} key={card}>
            <div className="card-body">
            <h5 className="card-title">Card {currentCard + 1} of {deckSize}</h5>
            <p className="card-text">{cardText}</p>
            <p className="card-text"></p>
            <div className="btn-group">
            <button className="btn btn-primary" onClick={flipHandler}>FLIP</button>
            <div>{nextButton}</div>
            </div>

            </div>
            </div>
            </>
        )
    };

export default LoadCard;