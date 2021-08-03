import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import landingpage from "./pages/landingpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <landingpage />
          </Route>

          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
