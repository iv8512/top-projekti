import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
