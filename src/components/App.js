import logo from './logo.svg';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then(resp => resp.json())
      .then(projects => {
        setProjects(projects)
      })
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
