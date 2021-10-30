function App() {
  return (
    <div className="App">

      <header class="sidebar">
        <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
        <nav>
          <span class="navheader">logo space</span>
          <span class="navitem">navitem</span>
          <span class="navlist">
            <span class="navlist-item navitem">navlist-item</span>
            <span class="navlist-item navitem"><a href="#">Link1</a></span>
            <span class="navlist-item navitem"><a href="#">Link2</a></span>
            <span class="navlist-item navitem"><a href="#">Link3</a></span>
            <span class="navlist-item navitem"><a href="#">Link4</a></span>
            <span class="navlist-item navitem"><a href="#">LoooooooooongLink1</a></span>
          </span>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
      </header>

      <div class="page">
        <h2>Page content here</h2>
      </div>

    </div>
  );
}

export default App;
