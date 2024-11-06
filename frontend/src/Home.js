import React, { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './Navbar';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;