const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');



// const Student = sequelize.define('Student', {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, unique: true, allowNull: false },
//   phone: { type: DataTypes.STRING },
//   scorecard: { type: DataTypes.JSON }, // Storing detailed scorecard information
//   visa_status: { type: DataTypes.STRING, defaultValue: 'not_started' }, // Visa process status
//   consultant: { type: DataTypes.STRING }, // Consultant assigned to the student
// }, {
//   timestamps: true,
//   createdAt: 'created_at',
//   updatedAt: false,
// });

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    // validate: {
    //   isEmail: true // Validate email format
    // },
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    // validate: {
    //   is: /^[0-9\-\+\(\)\s]*$/ // Basic phone number validation
  },
  course: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scorecard: {  
    type: DataTypes.JSON,
    allowNull: true // Optional
  },
  visa_status: {
    type: DataTypes.STRING,
    defaultValue: 'not_started', // Default value
    allowNull: true
  },
  consultant: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'students' // Explicit table name for clarity
});


module.exports = Student;