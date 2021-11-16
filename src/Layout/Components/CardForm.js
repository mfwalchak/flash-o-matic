
import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { readCard } from "../../utils/api";

export default function CardForm({ 
    onSubmit,
    card,
    // onCancelUrl,
    // onCancelLabel, 
    formType,
    submitRedirectUrl, 
    initialBack, 
    initialFront }) {

const [front, setFront ] = useState(initialFront);
const [back, setBack] = useState(initialBack);
const history = useHistory();
const { deckId } = useParams();
//this is the switching function for EDIT as opposed to CREATE
useEffect(() => {
    setFront(initialFront);
    setBack(initialBack);
}, [initialFront, initialBack]
);

// async function handleSubmit(event) {
//     event.preventDefault();
//     await onSubmit(front, back);
//     if (formType === "edit"){
//         history.push(submitRedirectUrl)
//     } else {
//         setFront("")
//         setBack("")
//     }
// }
//
    
    
    console.log(initialFront, initialBack);
    async function handleSubmit(event) {
        event.preventDefault();
        //console.log("HandleSubmit:", card, front, back)
        await onSubmit(front, back);
        setFront("");
        setBack("");
        //add a cleanup function here
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="card-front">Front:</label>
                <textarea defaultValue={initialFront} onChange={evt => setFront(evt.target.value)} name="front" id="card-front" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="card-back">Front:</label>
                <textarea defaultValue={initialBack} onChange={evt => setBack(evt.target.value)} name="back" id="card-back" cols="30" rows="10"></textarea>
            </div>
            <div>
                
                    <Link to={`/decks/${deckId}`} className="btn btn-secondary">Done</Link>
                
                    <button className="btn btn-secondary">Save</button>
            </div>
        </form>
        </>
    )
}


//pass props in from Add or Edit Card
//<CardForm
// onSubmit = 
// onCancelUrl = 
// 