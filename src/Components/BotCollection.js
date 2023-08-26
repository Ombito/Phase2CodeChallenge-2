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
            {bots.map((i) => (
                 <div onClick={()=>addBot()}className="myBots"key={i.id} >
                    <img src={i.avatar_url} alt=""/>
                    <h2>{i.name}</h2>
                    <p>Bot Health: {i.health}</p>
                    <p>Bot Damage: {i.damage}</p>
                    <p>Bot Armor: {i.armor}</p>
                    <p>Bot Class: {i.bot_class}</p>
                    <p className="catch">Catchphrase: {i.catchphrase}</p>
                    <p>Created at: {i.created_at}</p>
                    <p>Updated at: {i.updated_at}</p>
                    <button id="delete" onClick={()=> deleteBot()}>X</button>
                </div>
        ))}
        </div>
        </div>
    )
}
export default BotCollection 