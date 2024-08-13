import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing/Landing';
import Education from './components/Education/Education';
import ScrollingSideway from './components/ScrollingSideway';
import Round from './components/Round';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    <div className="App">
      <Round />
      <Navbar />
      <Landing />
      <ScrollingSideway />
      <Education />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
