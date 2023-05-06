import './App.css';
import Card from './components/Card/Card';
import HomePage from './components/HomePage/HomePage';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import { useState } from 'react'

function App() {
  const [isLogin, setLogin] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
      {
        isLogin ? <div>game</div> : <HomePage/>
      }
      </header>
    </div>
  );
}

//<LeaderBoard players={players}></LeaderBoard>
//<Card isWhiteCard={false} text={"Alex likes to ____ but only when _____."} onSelectedCallback={() => console.log("Selected Card")}/>
//<Card isWhiteCard={true} text={"His mom is watching"} />


export default App;
