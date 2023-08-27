import { useState } from 'react';

const Card = ({ bot, handleDelete }) => {
    const [ mybots, setMybots] = useState([])
    const myId = bot.map((i) => i.id)
    console.log(myId)

    //delete card from my army list
    const onDelete = () => {
    
        let del = window.confirm("Do you want to release the bot?")
        if(del){
            fetch(`http://localhost:8001/my-bots/${myId}`, {
                method: "DELETE",
            })
            setMybots(handleDelete)
            }
        }
    
    console.log("Bot data:", bot)

    return (
        <div>
            {bot.map((i)=> {
                return (
                <div className="myrobots" onClick={onDelete} key="i.id" >
                    <img className="image" src={i.avatar_url} alt=""/>
                    <h2>{i.name}</h2>
                    <p>Bot Health: {i.health}</p>
                    <p>Bot Damage: {i.damage}</p>
                    <p>Bot Armor: {i.armor}</p>
                    <p>Bot Class: {i.bot_class}</p>
                    <p className="catch">Catchphrase: {i.catchphrase}</p>
                    <p>Created at: {i.created_at}</p>
                    <p>Updated at: {i.updated_at}</p>
                </div>)
            })}
           
        </div>
    )
}
export default Card;