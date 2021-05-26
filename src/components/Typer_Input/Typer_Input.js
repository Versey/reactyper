import { useState } from "react";
import Form from 'react-bootstrap/Form';


const Typer_Input = ()=>

{
    const [input, setInput] = useState();

    const handleInput = ()=>{return 0;}


    return(
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                Word per minute: 95
            </Form.Text>
        </Form.Group>
    );
}

export default Typer_Input;