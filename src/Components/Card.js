import { useState } from 'react';

const Card = ({ bot }) => {
    const [ mybots, setMybots] = useState(bot);

    //delete bot from my army list
    const handleDelete = (id) => {
        console.log(id);

        let del = window.confirm("Do you want to release the bot?");   
        if (del) {
            fetch(`http://localhost:8001/my-bots/${id}`, {
                method: "DELETE",
            })
            .then(() => setMybots(mybots.filter((bot) => bot.id !== id)))
            .catch(error => console.error("Error deleting bot:", error));
        }
    }

    return (
        <div>
            {mybots.map((i) => (
                <div className="myrobots" onClick={() => handleDelete(i.id)} key={i.id}>
                    <img className="image" src={i.avatar_url} alt=""/>
                    <h2>{i.name}</h2>
                    <p>Bot Health: {i.health}</p>
                    <p>Bot Damage: {i.damage}</p>
                    <p>Bot Armor: {i.armor}</p>
                    <p>Bot Class: {i.bot_class}</p>
                    <p className="catch">Catchphrase: {i.catchphrase}</p>
                    <p>Created at: {i.created_at}</p>
                    <p>Updated at: {i.updated_at}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
