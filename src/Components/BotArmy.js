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
    
    const onDeleteBot = (robot) => {
        //const myNewBots = robots.filter((i) => i !== robot)
        //setRobots(myNewBots);
    

        console.log(robot);
        let del = window.confirm("Do you want to release the bot?")
        if(del){
            fetch(`http://localhost:8001/my-bots/${robot}`, {
                method: "DELETE",
        })
        .then(() => { 
            setRobots(robots.filter((bot) => bot.id !== robots))
        })
        }
    }
    return (
        <div>
            {robots.map((bot) => (
                <div key={bot.id}>
                    <Card bot={bot} onDelete={onDeleteBot}/>
                </div>
            ))}
        </div>
    )
}
export default BotArmy;