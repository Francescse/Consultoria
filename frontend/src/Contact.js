import React, { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <header className="App-header">
          <p>{message}</p>
        </header>
      </div>
    </Router>
  );
}

export default App;