const BotArmy = ({ bots }) => {

    const releaseBot = () => {
        console.log('bot')
    }
    return (
        <div>
            {bots.map((bot) => (
                <div>
                    console.log(bot)
                    <img src={bot.avatar_url} alt=""/>
                    <h2>{bot.name}</h2>
                    <p>Bot Health: {bot.health}</p>
                    <p>Bot Damage: {bot.damage}</p>
                    <p>Bot Armor: {bot.armor}</p>
                    <p>Bot Class: {bot.bot_class}</p>
                    <p className="catch">Catchphrase: {bot.catchphrase}</p>
                    <p>Created at: {bot.created_at}</p>
                    <p>Updated at: {bot.updated_at}</p>
                    <button onClick={()=> releaseBot()}>Release Bot</button>
                </div>
            ))}
        </div>
    )
}
export default BotArmy;