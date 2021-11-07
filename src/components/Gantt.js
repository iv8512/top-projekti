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
            <div className="header">
                <h1>Chart go down below ☺</h1>
            </div>
            <div className="content">
                <h2>Gantt Chart</h2>
                <p>Gantt Charts show the flow of work during developement.</p>
                <div className="chart" id={'week-' + Page }>
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