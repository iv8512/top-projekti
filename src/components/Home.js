import { useState } from "react";
import Weather from "./Weather"
import Shortcuts from "./Shortcuts"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bar from './Bar';

import Games from './Games';
import Gantt from './Gantt';
import Test from './Test';
import Settings from './Settings';

function Home() {

    const [searchString, setSearchString] = useState();

   
    
    return ( 
        <div className="page">
            <div className="modal">
                <div className="modalContent">
                    <div className="rowContainer">
                        <div className="row formy">
                            <input className="addIconInput" type="text" placeholder="example url: www.w3schools.com"/>
                        </div>
                        <div className="rowContainer description">
                            <div className="row">
                                Any links will work, given that they don't start with Https:// or Http://, because that part is hardcoded to be added later.
                            </div>
                            <div className="row">
                                The FavIcon of the linked website will only appear if the link ends in a suffix (ex: ".com", ".fi")
                            </div>
                        </div>
                        <div className="row">
                            <button className="mimicSubmit formy submitShortcut">Add Icon</button>
                        </div>
                    </div>
                </div>
            </div>
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
                                <form action="http://www.google.com/search" method="GET" className="formy">
                                    <input type="text" name="q" size="50" maxLength="1000" value={searchString} onChange={(e) => setSearchString(e.target.value)}></input>
                                    <input type="hidden" name="hl" value="en"></input>
                                    <input type="submit" name="btnG" value="Search" className="clickable"></input>
                                </form>
                            </div>
                        </div>

                        <div className="bannerListItem g3">
                            <div className="spacer"></div>
                            <div className="sticky">
                                <Shortcuts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Router>
                <Bar />
                <Routes>
                    <Route path="/" element={<Games />} />
                    <Route path="/ganttchart" element={<Gantt />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>

            

        </div>
     );
};

export default Home;