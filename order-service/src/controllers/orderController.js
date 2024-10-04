const Order = require('../models/order');
const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  try {
    console.log('🛒 Attempting to create an order...'); // Starting process
    const order = await orderService.createOrder(req.body);
    console.log('✅ Order created successfully:', order._id); // Success log with emoji
    res.status(201).json(order);
  } catch (error) {
    console.error('❌ Error creating order:', error.message); // Error log with emoji
    res.status(500).json({ message: 'Error creating order', error });
  }
};

// Get Order by ID
exports.getOrder = async (req, res) => {
  try {
    console.log(`🔍 Attempting to retrieve order with ID: ${req.params.id}...`); // Starting process
    const order = await orderService.getOrderById(req.params.id);
    if (!order) {
      console.log(`❌ Order not found for ID: ${req.params.id}`); // Log for not found
      return res.status(404).json({ message: 'Order not found' });
    }
    console.log('✅ Order retrieved successfully:', order._id); // Success log with emoji
    res.status(200).json(order);
  } catch (error) {
    console.error('❌ Error retrieving order:', error.message); // Error log with emoji
    res.status(500).json({ message: 'Error retrieving order', error });
  }
};
