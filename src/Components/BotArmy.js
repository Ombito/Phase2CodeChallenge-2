import { useState, useEffect } from 'react';
import Card from './Card';

const BotArmy = () => {
    const [ robots, setRobots ] = useState([])
    
    //fetch data from server to my army
    useEffect(() => {
        fetch('http://localhost:8001/my-bots')
        .then(res => res.json())
        .then((data) => setRobots(data))
    }, [])
    console.log(robots);
    
    //on delete change state 
    const deleteRobots = (id) => {
        const myUpdatedBots = robots.filter(bot => bot.id !== id)
        setRobots(myUpdatedBots)
      }

    return (
        <>
        <h2>My Robot Army</h2>
        <div className="myarmycards">
            {robots.map((bot) => (
                <div key={bot.id}>
                    <Card bot={bot} handleDelete={deleteRobots}/>
                </div>
            ))}
        </div>
        </>
    )
}
export default BotArmy;