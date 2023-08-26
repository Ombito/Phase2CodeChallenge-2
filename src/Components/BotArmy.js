import { useState, useEffect } from 'react';
import Card from './Card';

const BotArmy = () => {
    const [ newbots, setNewbots ] = useState([])

    useEffect(() => {
        fetch('http://localhost:8001/my-bots')
        .then(res => res.json())
        .then((data) => setNewbots(data))
    }, [])

    // if(!newbots.includes(data){
    //     setNewbots(...newbots, 
    // }
    return (
        <div>
            {newbots.map((bot) => (
                <div key={bot.id}>
                    <Card />
                </div>
            ))}
        </div>
    )
}
export default BotArmy;