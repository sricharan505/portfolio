import './App.css';
import NavBar from './components/Navbar';
import HomePage from './components/Homepage';
import Skills from './components/Skills';
import Project from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useRef } from 'react';

function App() {

  
  return (
    <>
      <NavBar></NavBar>
      <div className=" w-full h-full custom_container">
        <HomePage></HomePage>
        <br></br>
        <br></br>
        <Skills></Skills>
        <Project></Project>
        <Experience></Experience>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
