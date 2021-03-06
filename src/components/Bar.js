import { Link } from 'react-router-dom'

function Bar() {
    return ( 
      <div className="bar">


        <div className="list listTop">
        <Link to="/" className="navItem" text="Games">Games</Link>
        <Link to="/ganttchart" className="navItem" text="Gantt Chart">Gantt Chart</Link>
        <Link to="/test" className="navItem" text="Test Page">Test Page</Link>

          {/* <div className="dropDown"> 
            Δ Pages Δ
            <div className="dropList">
              <Link to="/" className="navItem" text="Games"></Link>
              <Link to="/ganttchart" className="navItem" text="Gantt Chart"></Link>
              <Link to="/test" className="navItem" text="Test Page"></Link>
            </div>
          </div> */}

        </div>

        <div className="logo">
          <img className="icon navItem" src="http://localhost:3000/favicon.ico" alt="set all to default" />
        </div>

        <div className="list listBottom">
        <Link to="/settings" className="navItem" text="Settings">Settings</Link>
          {/* <div className="dropDown">
            Δ Other stuff Δ
            <div className="dropList">
              <Link to="/" className="navItem" text="Settings"></Link>
            </div>
          </div> */}

        </div>


      </div>
     );
}

export default Bar;