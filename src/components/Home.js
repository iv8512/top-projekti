import { useState } from "react";
import Weather from "./Weather"
import Shortcuts from "./Shortcuts"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bar from './Bar';

import Test from './Test';
import Gantt from './Gantt';
import Games from './Games';

function Home() {

    const [searchString, setSearchString] = useState();

   
    
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
                                <form action="http://www.google.com/search" method="GET" className="search">
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
                    <Route path="/ganttchart" element={<Gantt />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/" element={<Games />} />
                </Routes>
            </Router>

            

        </div>
     );
};

export default Home;