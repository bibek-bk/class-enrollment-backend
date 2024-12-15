const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');

router.get('/', getAllCourses);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
