import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
            <span className="navlist-item navitem"><a href="#">Link1</a></span>
            <span className="navlist-item navitem"><a href="#">Link2</a></span>
            <span className="navlist-item navitem"><a href="#">Link3</a></span>
            <span className="navlist-item navitem"><a href="#">Link4</a></span>
            <span className="navlist-item navitem"><a href="#">LoooooooooooongLink1</a></span>
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
