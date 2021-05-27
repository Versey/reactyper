import './App.css';
import Typer_Input from './components/Typer_Input/Typer_Input';
import Typer_Words from './components/Typer_Words/Typer_Words';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

import randomWords from 'random-words';

import { useState } from 'react';

function App() {
  
  const activeWords = randomWords({min: 3, max: 7, maxLength:7})

  const [wpm, setWpm] = useState(50);
  const [words, setWords] = useState(activeWords)
  const [uWords, usetWords] = useState("");

  return (
    <div className="App">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Typer_Words words = {words}/>
          </Row>
          <Row className="justify-content-md-center">
            <Typer_Input wpm = {wpm} />
          </Row>

        </Container>
    </div>
  );
}

export default App;
