import React from "react"
import GameData from "../data/installed_games.json"
import GamesSteam from "./GamesSteam";
import GamesUbisoft from "./GamesUbisoft";
import GamesEpic from "./GamesEpic";
import GamesOrigin from "./GamesOrigin";

function Games() {

    React.useEffect(() => {
        const dragScroll = document.querySelector('.slideshow');
        let start;
        let scroll;
        
        dragScroll.addEventListener('mousedown', (data) => {
            dragScroll.classList.add('active');
            start = data.pageX - dragScroll.offsetLeft;
            scroll = dragScroll.scrollLeft;
            console.log(start);
        });
        
        dragScroll.addEventListener('mouseleave', () => {
            dragScroll.classList.remove('active');
        });
        
        dragScroll.addEventListener('mouseup', () => {
            dragScroll.classList.remove('active');
        });
    
        window.addEventListener('mousemove', (data) => {
            if(data.buttons !== 1) return;
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
                        <div className="bannerListItem buttons">
                            <button className="settings">Settings</button>
                        </div>
                        <div className="bannerListItem" id="Search">
                            <form action="http://www.google.com/search" method="GET">
                                <input type="text" name="q" size="31" maxLength="1000"></input>
                                <input type="hidden" name="hl" value="en"></input>
                                <input type="submit" name="btnG" value="Search"></input>
                            </form>
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
}

export default Games;