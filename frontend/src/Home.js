import React, { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './Navbar';

function App() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    adreça: '',
    sector: '',
    activitat: '',
    empleats: '',
    volum: '',
    objectius: '',
    departaments: '',
    problemes: '',
    productivitat: '',
    qualitat: '',
    temps: ''
  });

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      alert('Form data sent successfully');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending form data');
    });
  };

  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <p>{message}</p>
        <h1>Formulari de Recollida d'Informació del Client</h1>
        <form onSubmit={handleSubmit}>
          <label>Nom:</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} /><br />

          <label>Adreça:</label>
          <input type="text" name="adreça" value={formData.adreça} onChange={handleChange} /><br />

          <label>Sector:</label>
          <input type="text" name="sector" value={formData.sector} onChange={handleChange} /><br />

          <label>Activitat empresarial:</label>
          <input type="text" name="activitat" value={formData.activitat} onChange={handleChange} /><br />

          <label>Nombre d'empleats:</label>
          <input type="number" name="empleats" value={formData.empleats} onChange={handleChange} /><br />

          <label>Volum de negoci:</label>
          <input type="text" name="volum" value={formData.volum} onChange={handleChange} /><br />

          <label>Objectius clau:</label>
          <input type="text" name="objectius" value={formData.objectius} onChange={handleChange} /><br />

          <label>Departaments:</label>
          <input type="text" name="departaments" value={formData.departaments} onChange={handleChange} /><br />

          <label>Problemes identificats:</label>
          <input type="text" name="problemes" value={formData.problemes} onChange={handleChange} /><br />

          <label>Indicadors de productivitat:</label>
          <input type="text" name="productivitat" value={formData.productivitat} onChange={handleChange} /><br />

          <label>Qualitat:</label>
          <input type="text" name="qualitat" value={formData.qualitat} onChange={handleChange} /><br />

          <label>Temps de cicle:</label>
          <input type="text" name="temps" value={formData.temps} onChange={handleChange} /><br />

          <button type="submit">Enviar</button>
        </form>
      </header>
    </div>
  );
}

export default App;