const Order = require('../models/order');
const { placeOrder } = require('../events/orderEvents');

exports.createOrder = async (orderData) => {
  try {
    console.log('🛠️ Creating order in the database...'); // Start log for service
    const order = new Order(orderData);
    await order.save();
    console.log('✅ Order saved to database successfully:', order._id); // Success log with emoji

    // Emit Order Placed event
    console.log('📡 Emitting "Order Placed" event...'); // Emit event log
    placeOrder(order);
    console.log('✅ Event emitted successfully'); // Success log for event

    return order;
  } catch (error) {
    console.error('❌ Error in creating order:', error.message); // Error log with emoji
    throw new Error('Error creating order');
  }
};

exports.getOrderById = async (orderId) => {
  try {
    console.log(`🔍 Searching for order by ID: ${orderId}`); // Start log for service
    const order = await Order.findById(orderId);
    if (!order) {
      console.log(`❌ No order found for ID: ${orderId}`); // Not found log
      return null;
    }
    console.log('✅ Order found:', order._id); // Success log for service
    return order;
  } catch (error) {
    console.error('❌ Error retrieving order by ID:', error.message); // Error log with emoji
    throw new Error('Error retrieving order');
  }
};
