// models/client.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    sector: { type: String, required: true },
    businessActivity: { type: String, required: true }
});

module.exports = mongoose.model('Client', ClientSchema);