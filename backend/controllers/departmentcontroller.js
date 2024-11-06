const Department = require('../models/department');

exports.createDepartment = (req, res) => {
    const newDepartment = new Department(req.body);
    newDepartment.save()
        .then(department => res.json(department))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getDepartments = (req, res) => {
    Department.find()
        .then(departments => res.json(departments))
        .catch(err => res.status(400).json('Error: ' + err));
};