import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Blog from './components/Blog';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <Router>
      <Navbar Heading="Textutils" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          path="/"
          element={<TextForm boxheading="Enter the text to analyze" mode={mode} />}
        />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
