const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Student.update(req.body, { where: { id } });
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getScorecard = async (req, res) => {
  try {
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });
      res.status(200).json(student.scorecard || {});
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
exports.updateScorecard = async (req, res) => {
  try {
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });

      student.scorecard = req.body.scorecard;
      await student.save();
      res.status(200).json({ message: 'Scorecard updated successfully', scorecard: student.scorecard });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

exports.startVisaProcess = async (req, res) => {
  try {
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });

      student.visa_status = 'in_progress';
      await student.save();
      res.status(200).json({ message: 'Visa process started', visa_status: student.visa_status });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

exports.updateVisaStatus = async (req, res) => {
  try {
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });

      student.visa_status = req.body.visa_status;
      await student.save();
      res.status(200).json({ message: 'Visa status updated', visa_status: student.visa_status });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
exports.assignConsultant = async (req, res) => {
  try {
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });

      student.consultant = req.body.consultant;
      await student.save();
      res.status(200).json({ message: 'Consultant assigned', consultant: student.consultant });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};