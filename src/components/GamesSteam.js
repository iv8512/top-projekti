function GamesSteam(props) {
    return ( 
        <div className="slide steam">
            <div className="header">
                <h1>Steam Games</h1> <sub>SteamGameFinder {props.data.info.versions.file} - games installed: {props.data.steam.info.games}</sub>
            </div>


            <div className="gameGrid">





                <div className="gameCard">
                    <a href={"steam://run/" + props.data.steam.games[21].id}>
                        <img src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + props.data.steam.games[21].id + "/capsule_184x69.jpg" } />
                    </a>
                </div>

                {props.data.steam.games.map((data,index) => (
                    <div className="gameCard" key={index}>
                        <a href={"steam://run/" + data.id}>
                            <img src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + data.id + "/capsule_184x69.jpg" } />
                        </a>
                    </div>
                ))}





            </div>


        </div>
     );
}

export default GamesSteam;