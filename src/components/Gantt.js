import { useState } from "react";
import data from "../data/ganttchart.json"
import Chart from "./Chart";

function Gantt() {
    const [Cpage, setCpage] = useState(42)

    function decrementCpage() {
        if (Cpage > 42) {
            setCpage(prevCpage => prevCpage - 1)
        }
    }
    
    function incrementCpage() {
        if (Cpage < 49) {
            setCpage(prevCpage => prevCpage + 1)
        }
    }
    
    return ( 
        <div className="page" id="GanttPage">
            <div className="header">
                <h1>Chart go down below ☺</h1>
            </div>
            <div className="content">
                <h2>Gantt Chart</h2>
                <p>Gantt Charts show the flow of work during developement.</p>
                <div className="chart">
                    {data.map((chartData, index) => (
                        <Chart key={index} wnum={chartData.week.num} start={chartData.week.rows[1].start} end={chartData.week.rows[1].end} label={chartData.week.rows[1].label}/>
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