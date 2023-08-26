import { useState, useEffect } from 'react';

const BotArmy = () => {
    const [ newbots, setNewbots ] = useState([])

    useEffect(() => {
        fetch('http://localhost:8001/my-bots')
        .then(res => res.json())
        .then((data) => setNewbots(data))
    }, [])

    return (
        <div>
            {newbots.map((bot) => (
                <div>
                    <img key={bot.id} src={bot.avatar_url}alt="bot"/>
                    <h2>{bot.name}</h2>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                    <p>Bot class: {bot.bot_class}</p>
                    <p>Catchphrase: {bot.catchphrase}</p>
                    <p>Created at: {bot.created_at}</p>
                    <p>Updated at: {bot.updated_at}</p>
                </div>
            ))}
        </div>
    )
}
export default BotArmy;