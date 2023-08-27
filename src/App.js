import NavBar from './Components/NavBar';
import BotCollection from './Components/BotCollection';
import BotArmy from './Components/BotArmy';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import  { useEffect, useState } from 'react';

function App() {
  const [ battlr, setBattlr ] = useState([])

// fetch data from server and pass as props to botcollection
  useEffect (() => {
    fetch('http://localhost:8001/bots')
    .then(res => res.json())
    .then((data) => setBattlr(data))
  }, [])

  //change state of bot collection on delete
  const deleteBot = (id) => {
    const updatedBots = battlr.filter(bot => bot.id !== id)
    setBattlr(updatedBots)
  }

  return ( 

    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BotCollection bots={battlr} handleDelete={deleteBot} />} />
        <Route path="/myarmy" element={<BotArmy />} />
      </Routes>
      
    </div>
  );
}

export default App;
