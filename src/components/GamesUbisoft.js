import { useState } from "react";
function GamesUbisoft(props) {

    let tooltip = "GameFinder " + props.data.info.versions.gamefinder + " - Games Found: " + props.data.ubisoft.info.games

    let [BigImg, setBigImg] = useState('none')
    let [SmallImg, setSmallImg] = useState('grid')
    let [Toggle, setToggle] = useState(0)
    let [Cols, setCols] = useState('1fr 1fr')

    function Switch() {
        if (Toggle === 0) {
            setBigImg('grid')
            setSmallImg('none')
            setCols('1fr 1fr 1fr')
            setToggle(1)
        }
        else {
            setBigImg('none')
            setSmallImg('grid')
            setCols('1fr 1fr')
            setToggle(0)
        }
    }

    if (props.data.ubisoft.info.games > 0)
    return ( 
        <div className="slide Ubisoft"> 
            <div className="header" data-tool-tip={tooltip}>
                <span><span className="redtext">Ubisoft Games</span> <button onClick={Switch}>Switch</button></span> 
            </div> 


            <div className="gameGrid" style={{ gridTemplateColumns: Cols }}>
                {props.data.ubisoft.games.map((data,index) => (  
                    <div className="gameCard" key={index}>
                        <a href={"uplay://launch/" + data.id}>
                            <img loading="lazy" src={ "https://cdn.cloudflare.steamstatic.com/steam/apps/" + 0 + "/library_600x900.jpg" } alt={data.name} style={{ display: BigImg }} />
                            <img loading="lazy" src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + 0 +"/capsule_184x69.jpg" } alt={data.name} style={{ display: SmallImg }} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
     );
    else
    return (<></>)
}

export default GamesUbisoft;