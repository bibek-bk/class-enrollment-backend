const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const Course = require('./courseModel');

// const Student = sequelize.define('student', {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, unique: true, allowNull: false },
//   phone: { type: DataTypes.STRING },
//   course_id: { type: DataTypes.INTEGER, references: { model: Course, key: 'id' } },
// }, {
//   timestamps: true,
//   createdAt: 'created_at',
//   updatedAt: false,
// });

// module.exports = Student;

const Student = sequelize.define('Student', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  phone: { type: DataTypes.STRING },
  scorecard: { type: DataTypes.JSON }, // Storing detailed scorecard information
  visa_status: { type: DataTypes.STRING, defaultValue: 'not_started' }, // Visa process status
  consultant: { type: DataTypes.STRING }, // Consultant assigned to the student
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = Student;