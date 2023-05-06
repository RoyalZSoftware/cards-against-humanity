import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';

const players = [
  {
    name: "Luca",
    score: 0
  },
  {
    name: "Adnan",
    score: 10
  }
]


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card isWhiteCard={false} text={"Alex likes to ____ but only when _____."} onSelectedCallback={() => console.log("Selected Card")}/>
        <Card isWhiteCard={true} text={"His mom is watching"} />
        <LeaderBoard players={players}></LeaderBoard>
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
