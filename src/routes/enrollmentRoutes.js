const express = require('express');
const router = express.Router();
const {
  getAllEnrollments,
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
} = require('../controllers/enrollmentController');

router.get('/', getAllEnrollments);
router.post('/', createEnrollment);
router.put('/:id', updateEnrollment);
router.delete('/:id', deleteEnrollment);

module.exports = router;
