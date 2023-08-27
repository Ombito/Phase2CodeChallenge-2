import NavBar from './Components/NavBar';
import BotCollection from './Components/BotCollection';
import BotArmy from './Components/BotArmy';
import './App.css';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route exact path="/" element={<BotCollection bots={battlr.map((i)=> i)} />} />
        <Route path="/myarmy" element={<BotArmy />} />
      </Routes>
      
    </div>
  );
}

export default App;
