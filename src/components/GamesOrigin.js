import { useState } from "react";
function GamesOrigin(props) {

    let tooltip = "GameFinder " + props.data.info.versions.gamefinder + " - Games Found: " + props.data.origin.info.games;

    let [BigImg, setBigImg] = useState('none');
    let [SmallImg, setSmallImg] = useState('grid');
    let [Toggle, setToggle] = useState(0);
    let [Cols, setCols] = useState('1fr 1fr');

    function Switch() {
        if (Toggle === 0) {
            setBigImg('grid');
            setSmallImg('none');
            setCols('1fr 1fr 1fr');
            setToggle(1);
        }
        else {
            setBigImg('none');
            setSmallImg('grid');
            setCols('1fr 1fr');
            setToggle(0);
        };
    };

    if (props.data.origin.info.games > 0)
    return ( 
        <div className="slide drag" id ="origin"> 
            <div className="header dataToolTip" data-tool-tip={tooltip}>
                <span><span className="accent2text" onClick={Switch}>Origin Games</span></span> 
            </div> 


            <div className="gameGrid" style={{ gridTemplateColumns: Cols }}>
                {props.data.origin.games.map((data,index) => (
                    <div launch={"origin://launchgame/" + data.id} className="gameCard task" key={index}>
                        <img loading="lazy" src={ "https://cdn.cloudflare.steamstatic.com/steam/apps/" + data.id + "/library_600x900.jpg" } alt={data.name} style={{ display: BigImg }} />
                        <img loading="lazy" src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + data.id + "/capsule_184x69.jpg" } alt={data.name} style={{ display: SmallImg }} />
                    </div>
                ))}
            </div>
        </div>
     );
    else
    return (<></>);
};

export default GamesOrigin;