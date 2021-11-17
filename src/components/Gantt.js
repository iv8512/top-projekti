import { useState } from "react";
import data from "../data/ganttchart.json"
import Chart from "./Chart";

function Gantt() {
    let [Cpage, setCpage] = useState(43)
    let [Page, setPage] = useState(0)

    function decrementCpage() {
        if (Cpage > 43) {
            setCpage(Cpage - 1)
            setPage(Page - 1)
        }
    }
    
    function incrementCpage() {
        if (Cpage < 49) {
            setCpage(Cpage + 1)
            setPage(Page + 1)
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
                    <div className="buttonRow row">
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