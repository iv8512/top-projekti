import { Link } from 'react-router-dom'

function Sidebar() {
    return ( 
      <div className="sideBar">
        <div className="navList">
          <Link to="/" className="tabFocus"><div className="naviListItem navItem" data-tool-tip="Linkki Kotisivulle">Δ</div></Link>
          <Link to="/test" className="tabFocus"><div className="naviListItem navItem" data-tool-tip="testi sivu">Δ</div></Link>
          <Link to="/ganttchart" className="tabFocus"><div className="naviListItem navItem" data-tool-tip="Gantt Chart Visualised">Δ</div></Link>
        </div>
      </div>
     );
}

export default Sidebar;