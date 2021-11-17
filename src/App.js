import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomContextMenu from './components/CCM';
import Sidebar from './components/Sidebar';
import Test from './components/Test';
import Gantt from './components/Gantt';
import Games from './components/Games';

function App() {
  return (
    <div className="App">
      <CustomContextMenu />
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/ganttchart" element={<Gantt />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
