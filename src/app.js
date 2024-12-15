const express = require('express');
const visitorRoutes = require('./routes/visitorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const sequelize = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use('/api/visitors', visitorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = app;