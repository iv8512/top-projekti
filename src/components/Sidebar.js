import { Link } from 'react-router-dom'

function Sidebar() {


    function toggle() {
      var sideBar;
      sideBar = document.querySelector('.sideBar');
      var page;
      page = document.querySelector('.page');
      //console.log(P);

      if(sideBar.style.display === 'none') {
        sideBar.style.display = 'grid';
        page.style.left = 'var(--sidebar-width)';
      }
      else {
        sideBar.style.display = 'none';
        page.style.left = 0;
      };
    };
    document.onkeydown = function(e) {
      console.log(e);
      if(e.altKey === true & e.key === 'q') {
        toggle();
      }
    };

    return ( 
      <div className="sideBar">
        <div>
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
          <div className="navItem">Δ</div>
        </div>
        <div className="listBottom">
          <div className="navItem">Δ</div>
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
              <span className="navItem clickable" onClick={toggle}>Alt + Q to toggle the sidebar<br></br>(or just click this to disable)</span>
              <Link to="/" className="navItem">Settings (non-functional)</Link>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Sidebar;