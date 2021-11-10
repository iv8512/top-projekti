import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Test from './components/Test';
import Gantt from './components/Gantt';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/ganttchart" element={<Gantt/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
