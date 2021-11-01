import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
