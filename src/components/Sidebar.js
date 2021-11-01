import { Link } from 'react-router-dom'

function Sidebar() {
    return ( 
      <div className="sideBar">
        <div className="navList">
          <Link to="/"><div className="naviListItem navItem" data-tool-tip="Linkki Kotisivulle">Δ</div></Link>
          <Link to="/test"><div className="naviListItem navItem" data-tool-tip="testi sivu">Δ</div></Link>
          <Link to="/ganttchart"><div className="naviListItem navItem" data-tool-tip="Gantt Chart Visualised">Δ</div></Link>
        </div>
      </div>
     );
}

export default Sidebar;