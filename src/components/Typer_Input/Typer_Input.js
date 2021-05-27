import { useState } from "react";
import Form from 'react-bootstrap/Form';

const Typer_Input = (props)=>
{
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };

    const handleSpace = (e) => {
        if (e.keyCode === 32) 
        {
            setInput("");
        }
    }

    return(
        <Form.Group controlId="formBasicEmail">
            <Form.Control 
            type="text"
            value ={input}
            onKeyDown={handleSpace}
            onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
                Words per minute: {props.wpm}
            </Form.Text>
        </Form.Group>
    );
}

export default Typer_Input;