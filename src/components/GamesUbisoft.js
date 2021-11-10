import { useState } from "react";
function GamesUbisoft(props) {

    var tooltip = "GameFinder " + props.data.info.versions.gamefinder + " - Games Found: " + props.data.steam.info.games

    const [SteamBigImg, setSteamBigImg] = useState('none')
    const [SteamSmallImg, setSteamSmallImg] = useState('grid')
    const [toggle, setToggle] = useState(0)


    function Switch() {
        if (toggle == 0) {
            setSteamBigImg('grid')
            setSteamSmallImg('none')
            setToggle(1)
        }
        else {
            setSteamBigImg('none')
            setSteamSmallImg('grid')
            setToggle(0)
        }
    }

    return ( 
        <div className="slide steam"> 
            <div className="header" data-tool-tip={tooltip}>
                <span><span className="redtext">Ubisoft Games</span> <button onClick={Switch}>Switch</button></span> 
            </div> 


            <div className="gameGrid">
                {props.data.ubisoft.games.map((data,index) => (  
                    <div className="gameCard" key={index}>
                        <a href={"steam://run/" + data.id}>
                            <img loading="lazy" src={ "https://cdn.cloudflare.steamstatic.com/steam/apps/" + 0 + "/library_600x900.jpg" } alt={data.name} style={{ display: SteamBigImg }} />
                            <img loading="lazy" src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + 0 +"/capsule_184x69.jpg" } alt={data.name} style={{ display: SteamSmallImg }} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default GamesUbisoft;