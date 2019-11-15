import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ItsBedtime from './components/ItsBedtime.js';
import Landing from './components/Landing.js';
import Home from './components/Home.js';
import Register from './components/Register.js'
import Calendar from './components/Calendar'
// import CalendarBar from './components/CalendarBar'
import Logger from './components/loggers'
import UserSettings from "./components/UserSettings";
import LogSleep from "./components/logSleep";
import MindfulnessModules from "./components/MindfulnessModules";

function App() {
  return (
      <Router>
          <nav>
              <ul>
                  <li>
                      <Link to="/bedtimeRoutine">It's bedtime routine</Link>
                  </li>
                  <li>
                      <Link to="/landing">Landing Page</Link>
                  </li>
                  <li>
                      <Link to="/home">Home Page</Link>
                  </li>
                  <li>
                      <Link to="/register">Register Page</Link>
                  </li>
                  <li>
                      <Link to="/calendarsign">Calendar Sign-in Page</Link>
                  </li>
                  <li>
                      <Link to="/logging">Logging Page</Link>
                  </li>
                  <li>
                      <Link to="/settings">Settings</Link>
                  </li>
                  <li>
                      <Link to = "/LogSleep">Log Sleep</Link>
                  </li>
                  <li>
                      <Link to = "/MindfulnessModules">Modules</Link>
                  </li>
              </ul>
          </nav>

          <Switch>
              <Route path ="/bedtimeRoutine">
                  <ItsBedtime/>
              </Route>
              <Route path ="/landing">
                  <Landing/>
              </Route>
              <Route path ="/home">
                  <Home/>
              </Route>
              <Route path ="/register">
                  <Register/>
              </Route>
              <Route path ="/calendarsign">
                  <Calendar/>
              </Route>
              <Route path ="/logging">
                  <Logger/>
              </Route>
              <Route path="/settings">
                  <UserSettings/>
              </Route>
              <Route path="/LogSleep">
                  <LogSleep/>
              </Route>
              <Route path="/MindfulnessModules">
                  <MindfulnessModules/>
              </Route>
          </Switch>
      </Router>
  );
}
export default App;