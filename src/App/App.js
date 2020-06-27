import React from 'react';
import './App.css';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import HomePage from '../HomePage/HomePage';
import Skills from '../Skills/Skills';
import ContactMe from '../ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
     <HomePage></HomePage>
     <AboutMe></AboutMe>
     <Skills></Skills>
     <Projects></Projects>
     <ContactMe></ContactMe>
        
    </div>
  );
}

export default App;
