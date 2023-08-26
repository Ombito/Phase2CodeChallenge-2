const Card = ({ bot }) => {

    console.log("Bot data:", bot)
    return (
        <div>
            {bot.map((i)=> {
                return (
                <div key="i.id">
                    <img className="image" src={i.avatar_url} alt=""/>
                    <h2>{i.name}</h2>
                    <p>Bot Health: {i.health}</p>
                    <p>Bot Damage: {i.damage}</p>
                    <p>Bot Armor: {i.armor}</p>
                    <p>Bot Class: {i.bot_class}</p>
                    <p className="catch">Catchphrase: {i.catchphrase}</p>
                    <p>Created at: {i.created_at}</p>
                    <p>Updated at: {i.updated_at}</p>
                    <button>Release Bot</button> 
                </div>)
            })}
           
        </div>
    )
}
export default Card;