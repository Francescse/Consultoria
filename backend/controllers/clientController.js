// controllers/clientController.js
const Client = require('../models/client');

exports.createClient = (req, res) => {
    const newClient = new Client(req.body);
    newClient.save()
        .then(client => res.json(client))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getClients = (req, res) => {
    Client.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(400).json('Error: ' + err));
};