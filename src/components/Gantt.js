import data from "../data/ganttchart.json";
import Chartrow from "./Chartrow";

function Gantt() {
    return ( 
        <div className="page" id="GanttPage">
            <div className="header">
                <h1>Chart go down below ☺</h1>
            </div>
            <div className="content">
                <h2>Gantt Chart</h2>
                <p>Gantt Charts show the flow of work during developement.</p>
                {data.map((chartData, index) => (
                    <Chartrow key={index} vnum={chartData.week.num} label={chartData.week.rows[0].label} />
                ))}
            </div>
        </div>
     );
}
/* start={chartData.week} end={chartData.week[index]} */
export default Gantt;