function GamesSteam(props) {
    return ( 
        <div className="slide steam">
            <div className="header">
                <h1>Steam Games</h1> <sub>SteamGameFinder {props.data.info.versions.f} - games installed: {props.data.steam.info.games}</sub>
            </div>


            <div className="gameGrid">
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