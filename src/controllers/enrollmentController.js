const Enrollment = require('../models/enrollmentModel');


exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();

    if (enrollments.length === 0) {
      return res.status(404).json({ message: "No enrollments found." });
    }

    res.status(200).json(enrollments);
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.updateEnrollment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updated = await Enrollment.update(req.body, { where: { id } });
//     res.status(200).json({ updated });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.deleteEnrollment = async (req, res) => {
  try {
    const { id } = req.params;
    await Enrollment.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEnrollment = async (req, res) => {
  try {
      const { id } = req.params;
      const { payment_status } = req.body;

      // Update the specific field
      const [updated] = await Enrollment.update(
          { payment_status }, // Fields to update
          { where: { id } } // Condition to find record
      );

      if (updated) {
          res.status(200).json({ message: 'Payment status updated successfully' });
      } else {
          res.status(404).json({ error: 'Enrollment not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
