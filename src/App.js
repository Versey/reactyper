import './App.css';
import Typer_Input from './components/Typer_Input/Typer_Input';
import Typer_Words from './components/Typer_Words/Typer_Words';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typer_Words/>
        <Typer_Input wpm = "65" />
      </header>
    </div>
  );
}

export default App;
