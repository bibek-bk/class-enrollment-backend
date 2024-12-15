const Course = require('../models/courseModel');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Course.update(req.body, { where: { id } });
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};