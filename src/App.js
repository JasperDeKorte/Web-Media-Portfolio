import { useState, createContext } from "react"
import './App.css';
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Media from "./pages/media/Media"
import Profile from "./pages/profile/Profile"
import Cv from "./pages/cv/Cv"
import content from "./data/content.json"

export const languagesContext = createContext()

function App() {
  
 

  const [language, setLanguage] = useState("nl")


  return (
    <>
      <div className="App">
        <languagesContext.Provider value={{language, setLanguage}}>
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
        </languagesContext.Provider>
      </div>
    </>
  );
}

export default App;
