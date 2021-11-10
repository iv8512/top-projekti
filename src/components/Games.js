import GameData from "../data/installed_games.json"
import GamesSteam from "./GamesSteam";
import GamesUbisoft from "./GamesUbisoft";

function Games() {
    return ( 
        <div className="page" id="Games">
            <div className="slideshow">
                <GamesSteam data={GameData} />
                <GamesUbisoft data={GameData} />
            </div>
        </div>
     );
}

export default Games;