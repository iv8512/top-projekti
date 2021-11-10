import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Test from './components/Test';
import Gantt from './components/Gantt';
import Games from './components/Games';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/ganttchart" element={<Gantt />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
