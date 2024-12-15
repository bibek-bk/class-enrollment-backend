// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');
// const Student = require('./studentModel');
// const Course = require('./courseModel');

// const Enrollment = sequelize.define('enrollment', {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   student_id: {
//     type: DataTypes.INTEGER,
//     references: { model: Student, key: 'id' },
//   },
//   course_id: {
//     type: DataTypes.INTEGER,
//     references: { model: Course, key: 'id' },
//   },
//   status: {
//     type: DataTypes.ENUM('pending', 'enrolled', 'completed', 'cancelled'),
//     defaultValue: 'pending',
//   },
//   payment_status: {
//     type: DataTypes.ENUM('pending', 'paid', 'failed'),
//     defaultValue: 'pending',
//   },
// }, {
//   timestamps: true,
//   createdAt: 'enrollment_date',
//   updatedAt: false,
// });

// module.exports = Enrollment;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Visitor = require('./visitorModel'); // Assuming there's a Visitor model
const Course = require('./courseModel');

const Enrollment = sequelize.define('enrollment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  visitor_id: { // Changed from student_id to visitor_id
    type: DataTypes.INTEGER,
    references: { model: Visitor, key: 'id' }, // Updated to reference Visitor model
  },
  course_id: {
    type: DataTypes.INTEGER,
    references: { model: Course, key: 'id' },
  },
  status: {
    type: DataTypes.ENUM('pending', 'enrolled', 'completed', 'cancelled'),
    defaultValue: 'pending',
  },
  payment_status: {
    type: DataTypes.ENUM('pending', 'paid', 'failed'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
  createdAt: 'enrollment_date',
  updatedAt: false,
});

module.exports = Enrollment;
