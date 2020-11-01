import * as React from 'react';


import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Error from './pages/error';
import Projects from './pages/projects';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import './App.css';

function App() {
  return(
   <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/aboutMe'>
                    <AboutMe />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </div>
    </Router> 
  )
    
}
export default App;
