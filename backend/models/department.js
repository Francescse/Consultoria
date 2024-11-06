// models/department.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name: { type: String, required: true },
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true }
});

module.exports = mongoose.model('Department', DepartmentSchema);