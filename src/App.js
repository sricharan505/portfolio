import './App.css';
import NavBar from './components/Navbar';
import HomePage from './components/Homepage';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" w-full h-full custom_container">
        <HomePage></HomePage>

        <br></br>
        <br></br>
        <Skills></Skills>
      </div>
    </>
  );
}

export default App;
