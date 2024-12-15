const express = require('express');
const router = express.Router();
const { createVisitor, getAllVisitors, deleteVisitor, updateVisitor } = require('../controllers/visitorController');

// Route to update visitor status
router.get('/', getAllVisitors);
router.post('/', createVisitor);
router.put('/:id', updateVisitor);
router.delete('/:id', deleteVisitor);

module.exports = router;

