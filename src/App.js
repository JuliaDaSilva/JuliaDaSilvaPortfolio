import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/navbar';
import Homepage from './components/Homepage/homepage';
import AboutMe from './components/AboutMe/aboutme';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Timeline from './components/Timeline/timeline';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <div id="home">
            <Homepage />
          </div>
           <div id="about">
            <AboutMe />
          </div>
          <div>
            <div id="timeline">
              <Timeline />
            </div>
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;