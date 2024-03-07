import Nav from './components/Nav';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Social/>
     
    </div>
  );
}

export default App;
