import React from "react"
import './App.css';
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Media from "./pages/Media"
import Profile from "./pages/Profile"
import Cv from "./pages/cv/Cv"



function App() {
    const location = useLocation

  return (
    <div className="App">
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/Web-Media-Portfolio">
              <LandingPage />
            </Route>
            <Route exact path="/Media">
              <Media />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/Cv">
              <Cv />
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
