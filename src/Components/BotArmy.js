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
    
    //on delete set state 
    const deleteRobots = (id) => {
        const getBots = robots.filter((b) => robots.id !==  id)
        setRobots(getBots);
    };

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