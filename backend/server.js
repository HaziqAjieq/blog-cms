"use strict";
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes')

const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors({
   origin: 'http://localhost:5173',
  credentials: true,
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Test Route
app.get('/', (req, res) => {
  res.send('Blog CMS API');
});

// login route
app.use('/api/auth', authRoutes);


// user route here slash with id for individual user
app.use('/api', userRoutes);


// Sync database and start server
db.sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Connection error:', err));

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});