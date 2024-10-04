const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

// Create Order
router.post('/orders', orderController.createOrder);

// Get Order by ID
router.get('/orders/:id', orderController.getOrder);

module.exports = router;
