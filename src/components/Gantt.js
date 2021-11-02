import data from "../Data/ganntchart.json"
import Chartrow from "./Chartrow";

function Gantt() {
    return ( 
        <div className="page" id="GanttPage">
            <div className="header">
                <h1>Chart go down below ☺</h1>
            </div>
            <div className="content">
                <h2>Gantt Chart</h2>
                <p>Gantt Charts show the flow of work <q>test</q> during developement.</p>
                {data.map((chartData, index) => (
                    <Chartrow key={index} vnum={chartData.viikko.viikkonum} />
                ))}
            </div>
        </div>
     );
}

export default Gantt;