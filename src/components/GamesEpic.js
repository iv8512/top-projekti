import { useState } from "react";
function GamesEpic(props) {
    
    var tooltip = "GameFinder " + props.data.info.versions.gamefinder + " - Games Found: " + props.data.epic.info.games

    const [BigImg, setBigImg] = useState('none')
    const [SmallImg, setSmallImg] = useState('grid')
    const [toggle, setToggle] = useState(0)


    function Switch() {
        if (toggle === 0) {
            setBigImg('grid')
            setSmallImg('none')
            setToggle(1)
        }
        else {
            setBigImg('none')
            setSmallImg('grid')
            setToggle(0)
        }
    }

    return ( 
        <div className="slide Epic"> 
            <div className="header" data-tool-tip={tooltip}>
                <span><span className="redtext">Epic Games</span> <button onClick={Switch}>Switch</button></span> 
            </div> 


            <div className="gameGrid">
                {props.data.epic.games.map((data,index) => (
                    <div className="gameCard" key={index}>
                        <a href={"com.epicgames.launcher://apps/" + data.id + "?action=launch&silent=true"}>
                            <img loading="lazy" src={ "https://cdn.cloudflare.steamstatic.com/steam/apps/" + data.id + "/library_600x900.jpg" } alt={data.name} style={{ display: BigImg }} />
                            <img loading="lazy" src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + data.id + "/capsule_184x69.jpg" } alt={data.name} style={{ display: SmallImg }} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default GamesEpic;