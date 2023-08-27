import { useState } from 'react';
import './BotCollection.css';

const BotCollection = ({ bots, handleDelete }) => {

    const [ army, setArmy ] = useState([])

    //onclick event post data to server
    const addBot = (bot) => {
        console.log('Add bot');
        alert('Bot added to my collection');
        setArmy([...army, bot]);
    
        fetch('http://localhost:8001/my-bots', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([bot]),
        })
        setArmy([...army, bot]);
    }

    // onclick delete bot from bot collection list
    const deleteBot = (id) => {
        console.log('delete...');
        
        let discharge = window.confirm("This bot will be discharged forever, do you wish to continue?"); 
        if (discharge){
            fetch(`http://localhost:8001/my-bots/${id}`, {
            method: "DELETE",
        })
        .then(() => handleDelete(id))
        .catch(error => console.error("Error deleting bot:", error));
        }     
    }

    return (
        <div id="body">
            <h1>BOT BATTLR</h1>
            <div className="botContainer">
                {bots.map((bot) => (
                    <div className="myBots" key={bot.id}>
                        <div onClick={() => addBot(bot)}>
                            <img className="image" src={bot.avatar_url} alt=""/>
                            <h2>{bot.name}</h2>
                            <p>Bot Health: {bot.health}</p>
                            <p>Bot Damage: {bot.damage}</p>
                            <p>Bot Armor: {bot.armor}</p>
                            <p>Bot Class: {bot.bot_class}</p>
                            <p className="catch">Catchphrase: {bot.catchphrase}</p>
                            <p>Created at: {bot.created_at}</p>
                            <p>Updated at: {bot.updated_at}</p>
                        </div>
                        <button id="delete" onClick={() => deleteBot(bot.id)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BotCollection;
