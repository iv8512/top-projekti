import React, { useState } from "react";
function GamesSteam(props) {

    let tooltip = "GameFinder " + props.data.info.versions.gamefinder + " - Games Found: " + props.data.steam.info.games;

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

    React.useEffect(() => {
        const dragScroll = document.getElementById('steam');
        let start;
        let scroll;
        
        dragScroll.addEventListener('mousedown', (data) => {
            dragScroll.classList.add('active');
            start = data.pageY - dragScroll.offsetTop;
            scroll = dragScroll.scrollTop;
            console.log(start);
        });
        
        dragScroll.addEventListener('mouseup', () => {
            dragScroll.classList.remove('active');
        });
    
        dragScroll.addEventListener('mousemove', (data) => {
            if(data.buttons !== 1) return;
            //console.log(mouseIsDown);
            data.preventDefault();
            const y = data.pageY - dragScroll.offsetTop;
            dragScroll.scrollTop = scroll - (y - start);
        });
    });

    if (props.data.steam.info.games > 0)
    return ( 
        <div className="slide drag" id="steam"> 
            <div className="header" data-tool-tip={tooltip}>
                <span><span className="accent2text" onClick={Switch}>Steam Games</span></span>
            </div> 


            <div className="gameGrid" style={{ gridTemplateColumns: Cols }}>
                {props.data.steam.games.map((data,index) => (
                    <div className="gameCard" key={index}>
                        <a href={"steam://run/" + data.id}>
                            <img loading="lazy" src={ "https://cdn.cloudflare.steamstatic.com/steam/apps/" + data.id + "/library_600x900.jpg" } alt={data.name} style={{ display: BigImg }} />
                            <img loading="lazy" src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + data.id + "/capsule_184x69.jpg" } alt={data.name} style={{ display: SmallImg }} />
                        </a>
                    </div>
                ))}
            </div>
            <div className="gridHeader accent1text">
                Soundtracks
            </div>
            <div className="gameGrid" style={{ gridTemplateColumns: Cols }}>
                {props.data.steam.soundtracks.map((data,index) => (
                    <div className="gameCard" key={index}>
                        <a href={"steam://run/" + data.id}>
                            <img loading="lazy" src={ "https://cdn.cloudflare.steamstatic.com/steam/apps/" + data.id + "/library_600x900.jpg" } alt={data.name} style={{ display: BigImg }} />
                            <img loading="lazy" src={ "https://cdn.akamai.steamstatic.com/steam/apps/" + data.id + "/capsule_184x69.jpg" } alt={data.name} style={{ display: SmallImg }} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
     );
    else
    return (<></>);
};

export default GamesSteam;