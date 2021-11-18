import { Link } from 'react-router-dom'

function Sidebar() {
    return ( 
      <div className="sideBar">
        <div>
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
        </div>
        <div className="listBottom">
          <div className="navItem">Δ</div>
        </div>
        <div className="extend">
          <div>
            <div>
              <Link to="/" className="navItem">Pelit</Link>
              <Link to="/ganttchart" className="navItem">Gantt Chart</Link>
              <Link to="/test" className="navItem">testi sivu</Link>
            </div>
            <div className="listBottom">
              <Link to="/" className="navItem">Settings (non-functional)</Link>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Sidebar;