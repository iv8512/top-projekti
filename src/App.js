import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Test from './components/Test';
import Gantt from './components/Gantt';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>

            <Route path="/test">
              <Test />
            </Route>

            <Route path="/ganttchart">
              <Gantt />
            </Route>

            <Route path="/">
              <Home />
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
