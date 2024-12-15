const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;

