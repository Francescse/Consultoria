const express = require('express');
const router = express.Router();
const processController = require('../controllers/processController');

router.post('/', processController.createProcess);
router.get('/', processController.getProcesses);

module.exports = router;