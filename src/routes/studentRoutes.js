const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getScorecard,
  updateScorecard,
  startVisaProcess,
  updateVisaStatus,
  assignConsultant,
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.get('/:id/scorecard', getScorecard);
router.put('/:id/scorecard', updateScorecard);
router.post('/:id/visa/start', startVisaProcess);
router.put('/:id/visa/status', updateVisaStatus);
router.post('/:id/visa/consultant', assignConsultant);


module.exports = router;    

