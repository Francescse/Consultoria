const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Nova ruta d'API
app.get('/api/test', (req, res) => {
  res.json({ message: 'Això és una resposta de l\'API' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});