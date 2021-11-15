import GameData from "../data/installed_games.json"
import GamesSteam from "./GamesSteam";
import GamesUbisoft from "./GamesUbisoft";
import GamesEpic from "./GamesEpic";
import GamesOrigin from "./GamesOrigin";

function Games() {
    
    return ( 
        <div className="page" id="Games">
            <div className="slideshow content">
                <GamesSteam data={GameData} />
                <GamesEpic data={GameData} />
                <GamesUbisoft data={GameData} />
                <GamesOrigin data={GameData} />
            </div>
        </div>
     );
}

export default Games;