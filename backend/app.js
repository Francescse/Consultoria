const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/optimizationApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Process Optimization App!');
});
const clientRoutes = require('./routes/client');

app.use('/clients', clientRoutes);
const departmentRoutes = require('./routes/department');
const processRoutes = require('./routes/process');

app.use('/departments', departmentRoutes);
app.use('/processes', processRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});