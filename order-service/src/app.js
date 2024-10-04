require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api', orderRoutes);

module.exports = app;
