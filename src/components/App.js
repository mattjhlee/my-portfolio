import logo from './logo.svg';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
