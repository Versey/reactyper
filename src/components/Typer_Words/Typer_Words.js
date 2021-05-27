import { useState } from "react";
import Card from "react-bootstrap/Card";

const Typer_Words = (props)=>
{
    const handleInput = ()=>{return 0;}

    return(
        <Card.Body>
            {props.words.map((word)=> word+" ")}
        </Card.Body>
    );
}

export default Typer_Words;