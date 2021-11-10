import SteamData from "../data/installed_games.json"
import GamesSteam from "./GamesSteam";

function Games() {
    return ( 
        <div className="page" id="Games">
            <div className="slideshow">
                <GamesSteam data={SteamData}/>
            </div>
        </div>
     );
}

export default Games;