const BotCollection = ({bots}) => {
    return (
        <div>
            <h1>Battlr World</h1>
            {bots.map((bot) => (
                <div id="botContainer">
                    <div id="myBots"key={bot.id} >
                    <img src={bot.avatar_url} />
                    <h2>{bot.name}</h2>
                    <p>Bot Health: {bot.health}</p>
                    <p>Bot Damage: {bot.damage}</p>
                    <p>Bot Armor: {bot.armor}</p>
                    <p>Bot Class: {bot.bot_class}</p>
                    <p>Bot Catchphrase: {bot.catchphrase}</p>
                    <p>Created at: {bot.created_at}</p>
                    <p>Updated at: {bot.updated_at}</p>
                </div>
                </div>
        ))}
        </div>
    )
}
export default BotCollection 