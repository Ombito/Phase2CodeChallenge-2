import { useState, useEffect } from 'react';
import Card from './Card';

const BotArmy = () => {
    const [ robots, setRobots ] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:8001/my-bots')
        .then(res => res.json())
        .then((data) => setRobots(data))
    }, [])
    console.log(robots);
   
    return (
        <div>
            {robots.map((bot) => (
                <div key={bot.id}>
                    <Card bot={bot} />
                </div>
            ))}
        </div>
    )
}
export default BotArmy;