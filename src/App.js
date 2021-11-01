import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">

      <header className="sidebar">
        <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
        <nav>
          <div className="navheader">logo space</div>
          <span className="navitem">navitem</span>
          <div className="navlist">
            <span className="navlist-item navitem">navlist-item</span>
            <a href="#" className="navlist-item navitem">Link1</a>
            <a href="#" className="navlist-item navitem">Link2</a>
            <a href="#" className="navlist-item navitem">Link3</a>
            <a href="#" className="navlist-item navitem">Link4</a>
          </div>
        </nav>
        <label for="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>

      <div className="page">
        <h2>Page content here</h2>
      </div>

    </div>
  );
}

export default App;
