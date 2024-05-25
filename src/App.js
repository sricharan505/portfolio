import './App.css';
import NavBar from './components/Navbar';
import HomePage from './components/Homepage';
import Skills from './components/Skills';
import Project from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";

        

function App() {

  
  return (
    <>
      <PrimeReactProvider>
        <NavBar></NavBar>
        <div className=" w-full h-full custom_container">
          <HomePage></HomePage>
          <br></br>
          <br></br>
          <Skills></Skills>
          <Experience></Experience>
          {/* <Project></Project> */}
          <Contact></Contact>
        </div>
      </PrimeReactProvider>
    </>
  );
}

export default App;
