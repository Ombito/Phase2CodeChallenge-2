import NavBar from './Components/NavBar';
import BotCollection from './Components/BotCollection';
import BotArmy from './Components/BotArmy';
import './App.css';
import { Routes } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<BotCollection bots={battlr}/>} />
        <Route path="/botarmy" element={<BotArmy bots={battlr}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
