import './css/App.css';

import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Home />
    <About />
    <Resume />
    <Contact />
    </div>
  );
}

export default App;
