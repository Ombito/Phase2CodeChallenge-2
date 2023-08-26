const Card = ({ bots, addBot }) => {

    const [ avatar_url, name, health, damage, armor, bot_class, catchphrase, created_at, updated_at ] = bots;
    console.log(bots)
    return (
        <div onClick={()=> addBot(bots)}>
            <img className="image" src={avatar_url} alt=""/>
            <h2>{name}</h2>
            <p>Bot Health: {health}</p>
            <p>Bot Damage: {damage}</p>
            <p>Bot Armor: {armor}</p>
            <p>Bot Class: {bot_class}</p>
            <p className="catch">Catchphrase: {catchphrase}</p>
            <p>Created at: {created_at}</p>
            <p>Updated at: {updated_at}</p>
            <button>Release Bot</button>
        </div>
    )
}
export default Card;