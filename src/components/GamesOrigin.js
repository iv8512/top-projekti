import { useState } from "react";
function GamesOrigin(props) {
    
    var tooltip = "GameFinder " + props.data.info.versions.gamefinder + " - Games Found: " + props.data.origin.info.games

    const [BigImg, setBigImg] = useState('none')
    const [SmallImg, setSmallImg] = useState('grid')
    const [Toggle, setToggle] = useState(0)
    const [Cols, setCols] = useState('1fr 1fr')

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

    if (props.data.origin.info.games > 0)
    return ( 
        <div className="slide Origin"> 
            <div className="header" data-tool-tip={tooltip}>
                <span><span className="redtext">Origin Games</span> <button onClick={Switch}>Switch</button></span> 
            </div> 


            <div className="gameGrid" style={{ gridTemplateColumns: Cols }}>
                {props.data.origin.games.map((data,index) => (
                    <div className="gameCard" key={index}>
                        <a href={"origin://launchgame/" + data.id}>
                            <img loading="lazy" src={ "https://cdn.cloudflare.steamstatic.com/steam/apps/" + data.id + "/library_600x900.jpg" } alt={data.name} style={{ display: BigImg }} />
                            <img loading="lazy" src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + data.id + "/capsule_184x69.jpg" } alt={data.name} style={{ display: SmallImg }} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
     );
    else
    return (<></>)
}

export default GamesOrigin;