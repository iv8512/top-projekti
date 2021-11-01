import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>

          <Route path="/Test">
            <Test />
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
