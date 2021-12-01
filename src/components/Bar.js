import { Link } from 'react-router-dom'

function Bar() {

    return ( 
      <div className="bar">
        <div className="list listTop">

          <div className="dropDown">
            Δ Pages Δ
            <div className="dropList">
              <Link to="/" className="navItem" text="Games"></Link>
              <Link to="/ganttchart" className="navItem" text="Gantt Chart"></Link>
              <Link to="/test" className="navItem" text="Test Page"></Link>
            </div>
          </div>

        </div>
        <div className="list listBottom">

          <div className="dropDown">
            Δ Other stuff Δ
            <div className="dropList">
              <Link to="/" className="navItem" text="Settings (non-functional)"></Link>
            </div>
          </div>

        </div>
      </div>
     );
}

export default Bar;