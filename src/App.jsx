import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Navbar from './Navbar';
import Footer from './Footer';
import Projects from './Projects/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
