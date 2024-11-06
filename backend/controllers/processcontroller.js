const Process = require('../models/process');

exports.createProcess = (req, res) => {
    const newProcess = new Process(req.body);
    newProcess.save()
        .then(process => res.json(process))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getProcesses = (req, res) => {
    Process.find()
        .then(processes => res.json(processes))
        .catch(err => res.status(400).json('Error: ' + err));
};