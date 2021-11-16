import { Link } from 'react-router-dom'

function Sidebar() {
    return ( 
      <div className="sideBar">
        <div className="navList">
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
        </div>
        <div className="extend">
          <Link to="/" className="navItem">Pelit</Link>
          <Link to="/ganttchart" className="navItem">Gantt Chart</Link>
          <Link to="/test" className="navItem">testi sivu</Link>
        </div>
      </div>
     );
}

export default Sidebar;