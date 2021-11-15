import { useState } from "react";
import data from "../data/ganttchart.json"
import Chart from "./Chart";

function Gantt() {
    const [Cpage, setCpage] = useState(43)
    const [Page, setPage] = useState(0)

    function decrementCpage() {
        if (Cpage > 43) {
            setCpage(prevCpage => prevCpage - 1)
            setPage(prevPage => prevPage - 1)
        }
    }
    
    function incrementCpage() {
        if (Cpage < 49) {
            setCpage(prevCpage => prevCpage + 1)
            setPage(prevPage => prevPage + 1)
        }
    }
    
    return ( 
        <div className="page" id="GanttPage">
            <div className="content">
                <h2>Gantt Chart</h2>
                <p>Gantt Chart on aikataulu joka näyttää työn edistymisen.</p>
                <div className="chart" id={'w' + Page}>
                    {data.map((chartData, index) => (
                        <Chart key={index} wnum={chartData.top[Page].num} data={chartData.top[Page]} Page={Page}/>
                    ))}
                    <div className="buttonrow row">
                        <button className="decrememt" onClick={decrementCpage}>«</button>
                        <span>{Cpage}</span>
                        <button className="increment" onClick={incrementCpage}>»</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Gantt;