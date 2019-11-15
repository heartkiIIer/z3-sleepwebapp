import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItsBedtime from './components/ItsBedtime.js';
import Landing from './components/Landing.js';
import Home from './components/Home.js';
import Register from './components/Register.js'
import Calendar from './components/Calendar'
import Logging from './components/logging'
import UserSettings from "./components/UserSettings";
import logSleep from './components/logSleep';
import Chronotype from './components/chronotype';
import ChronoResults from './components/chronoResults';
import Personality from './components/Personality';
import PersonalityIntro from './components/PersonalityIntro';
import PersonalityResults from './components/PersonalityResults';
import MindfulnessModules from './components/MindfulnessModules';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path ="/bedtimeRoutine" component={ItsBedtime}/>
              <Route path ="/home" component={Home}/>
              <Route path ="/register" component={Register}/>
              <Route path ="/calendarsign" component={Calendar}/>
              <Route path="/settings" component={UserSettings}/>
              <Route path="/logSleep" component={logSleep}/>
              <Route path="/chronotype" component={Chronotype}/>
              <Route path="/chronoResults" component={ChronoResults}/>
              <Route path="/personality" component={Personality}/>
              <Route path="/personalityIntro" component={PersonalityIntro}/>
              <Route path="/personalityResults" component={PersonalityResults}/>
              <Route path="/mindfulnessModules" component={MindfulnessModules}/>
              <Route path="/logging" component={Logging}/>
          </Switch>
      </Router>
  );
}
export default App;