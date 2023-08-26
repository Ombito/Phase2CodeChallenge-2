import NavBar from './Components/NavBar';
import BotCollection from './Components/BotCollection';
import BotArmy from './Components/BotArmy';
import './App.css';
import  { useEffect, useState } from 'react';

function App() {
  const [ battlr, setBattlr ] = useState([])
  useEffect (() => {
    fetch('http://localhost:8001/bots')
    .then(res => res.json())
    .then((data) => setBattlr(data))
  }, [])
  
  return ( 

    <div>
      <NavBar />
      <BotCollection bots={battlr}/>
      <BotArmy />
    </div>
  );
}

export default App;
