import { Link } from 'react-router-dom'

function Sidebar() {
    return ( 
      <div className="sideBar">
        <div className="navList">
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
        </div>
        <div className="extend">
          <Link to="/" className="navItem">Linkki Kotisivulle</Link>
          <Link to="/test" className="navItem">testi sivu</Link>
          <Link to="/ganttchart" className="navItem">Gantt Chart Visualised</Link>
          <Link to="/games" className="navItem">The page with the content</Link>
        </div>
      </div>
     );
}

export default Sidebar;