// models/process.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProcessSchema = new Schema({
    name: { type: String, required: true },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
    productivityIndicators: { type: Array, required: true },
    qualityIndicators: { type: Array, required: true },
    cycleTime: { type: Number, required: true }
});

module.exports = mongoose.model('Process', ProcessSchema);