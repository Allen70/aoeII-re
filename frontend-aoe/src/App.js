import {useState} from 'react'
import {MainMenu} from './Components/MainMenu'
import {SinglePlayer} from './Components/SinglePlayer'
import {GamePlay} from './Components/GamePlay'
import './App.css';

function App() {
  let options = ['Single Player', 'Multi Player', 'Options', 'Exit', 'Game']
  let [screen, setScreen] = useState('Select')
  let screenSelect = (string) => {setScreen(string)}

  return (
    <div className="app">
      {screen === 'Select'?<MainMenu options={options} handleClick={screenSelect}/>:null}
      {screen === 'Single Player'? <SinglePlayer handleClick={screenSelect}/>:null}
      {screen === 'Multi Player'? <div>Multi Player screen here</div>:null}
      {screen === 'Options'? <div>Options screen here</div>:null}
      {screen === 'Exit'? <div>Goodbye! :)</div>:null}
      {screen === 'Game'? <GamePlay />:null}
    </div>
  );
}

export default App;
