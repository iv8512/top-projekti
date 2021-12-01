import React from "react";
import GameData from "../data/installed_games.json"
import GamesSteam from "./GamesSteam";
import GamesUbisoft from "./GamesUbisoft";
import GamesEpic from "./GamesEpic";
import GamesOrigin from "./GamesOrigin";

function Games() {

    React.useEffect(() => {
        
        //let sideBar;
        //let search;
        //sideBar = document.querySelector('.sideBar');
        //search = document.querySelector('.search');
        //
        //function togglesearch(params) {
        //    if(sideBar.style.display === 'none') {
        //        search.style.left = 'translateX(calc(var(--sidebar-width) * -0.5))';
        //    }
        //    else {
        //        search.style.transform = 'none';
        //    };
        //};
        //
        //document.onkeydown = function(e) {
        //    console.log(e);
        //    if(e.altKey === true & e.key === 'q') {
        //    togglesearch();
        //    }
        //};
        //
        //togglesearch();

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
        <div className="slideshow content drag" id="Slides">
            <GamesSteam data={GameData} />
            <GamesEpic data={GameData} />
            <GamesUbisoft data={GameData} />
            <GamesOrigin data={GameData} />
        </div>
     );
}

export default Games;