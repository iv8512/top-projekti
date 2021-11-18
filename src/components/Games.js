import React, { useState } from "react";
import GameData from "../data/installed_games.json"
import Weather from "./Weather"
import GamesSteam from "./GamesSteam";
import GamesUbisoft from "./GamesUbisoft";
import GamesEpic from "./GamesEpic";
import GamesOrigin from "./GamesOrigin";

function Games() {

    const [searchString, setSearchString] = useState();

    React.useEffect(() => {
        const dragScroll = document.querySelector('.slideshow');
        let start;
        let scroll;
        let mouseIsDown = false;
        
        dragScroll.addEventListener('mousedown', (data) => {
            dragScroll.classList.add('active');
            mouseIsDown = true;
            start = data.pageX - dragScroll.offsetLeft;
            scroll = dragScroll.scrollLeft;
            console.log(start);
        });
        
        dragScroll.addEventListener('mouseleave', () => {
            dragScroll.classList.remove('active');
            mouseIsDown = false;
        });
        
        dragScroll.addEventListener('mouseup', () => {
            dragScroll.classList.remove('active');
            mouseIsDown = false;
        });
    
        window.addEventListener('mousemove', (data) => {
            if(!mouseIsDown) return;
            //console.log(mouseIsDown);
            data.preventDefault();
            const x = data.pageX - dragScroll.offsetLeft;
            dragScroll.scrollLeft = scroll - (x - start);
        });
    });    

    return ( 
        <div className="page" id="Games">

            <div id="Home">
                <div className="banner">
                    <div className="bannerList">

                        <div className="bannerListItem g1">
                            <div className="spacer"></div>
                            <div className="sticky">
                                <Weather />
                            </div>
                        </div>

                        <div className="bannerListItem g2">
                            <div className="spacer"></div>
                            <div className="sticky">
                                <form action="http://www.google.com/search" method="GET">
                                    <input type="text" name="q" size="50" maxLength="1000" value={searchString} onChange={(e) => setSearchString(e.target.value)}></input>
                                    <input type="hidden" name="hl" value="en"></input>
                                    <input type="submit" name="btnG" value="Search"></input>
                                </form>
                            </div>
                        </div>

                        <div className="bannerListItem g3">
                            <div className="spacer"></div>
                            <div className="sticky"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slideshow content drag" id="Slides">
                <GamesSteam data={GameData} />
                <GamesEpic data={GameData} />
                <GamesUbisoft data={GameData} />
                <GamesOrigin data={GameData} />
            </div>

        </div>
     );
};

export default Games;