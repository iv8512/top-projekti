import { Link } from 'react-router-dom'

function Sidebar() {
    return ( 
      <div className="sideBar">
        <div className="navList">
          <Link to="/"><div className="naviListItem navItem" data-tool-tip="Linkki Kotisivulle">Δ</div></Link>
          <Link to="/Test"><div className="naviListItem navItem" data-tool-tip="testi sivu">Δ</div></Link>
        </div>
      </div>
     );
}

export default Sidebar;