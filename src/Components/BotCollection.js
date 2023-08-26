const BotCollection = ({bots}) => {

    const addBot = (e) => {
        console.log('add')
        // let botObject = {
        //     "id"={bots.id}
        //     "name"={bots.name}
        //     health=
        //     damage=
        //     armor=
        //     bot_class=
        //     catchphrase=
        //     avatar_url=
        //     created_at=
        //     updated_at=
        }
        e.preventDefault();
        fetch('http://localhost:8001/my-bots', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
    )
}

    
    const deleteBot = () => {
        console.log('delete')
    }
    return (
        <div id="body">
            <h1>BOT BATTLR</h1>
            <div className="botContainer">
            {bots.map((i) => (
                 <div onClick={(e)=>addBot(e)}className="myBots"key={i.id} >
                    <img className="image" src={i.avatar_url} alt=""/>
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
export default BotCollection;