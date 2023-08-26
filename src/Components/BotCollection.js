const BotCollection = ({bots}) => {

    const addBot = () => {
        console.log('add')
    }

    
    const deleteBot = () => {
        console.log('delete')
    }
    return (
        <div id="body">
            <h1>BOT BATTLR</h1>
            <div className="botContainer">
            {bots.map((bot) => (
                 <div className="myBots"key={bot.id} >
                    <img src={bot.avatar_url} />
                    <h2>{bot.name}</h2>
                    <p>Bot Health: {bot.health}</p>
                    <p>Bot Damage: {bot.damage}</p>
                    <p>Bot Armor: {bot.armor}</p>
                    <p>Bot Class: {bot.bot_class}</p>
                    <p className="catch">Catchphrase: {bot.catchphrase}</p>
                    <p>Created at: {bot.created_at}</p>
                    <p>Updated at: {bot.updated_at}</p>
                    <div className="buttons">
                        <button id='addArmy'onClick={()=> addBot()}>Add to Army</button>
                        <button id="delete" onClick={()=> deleteBot()}>X</button>
                    </div>
                </div>
        ))}
        </div>
        </div>
    )
}
export default BotCollection 