const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Visitor = sequelize.define('visitor', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  phone: { type: DataTypes.STRING },
  status: {
    type: DataTypes.ENUM('new', 'contacted', 'converted', 'lost'),
    defaultValue: 'new',
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = Visitor;