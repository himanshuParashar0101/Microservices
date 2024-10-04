const { Queue, Worker } = require('bullmq');

// Replace with your hosted Redis details
const redisOptions = {
  host: 'redis-14933.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
  port: 14933,
  db: 0,
  password: 'nkjjog6mw8WrvWdne6TvWouns6ZAq7ck'
};

const orderQueue = new Queue('order-queue', {
  connection: redisOptions,
});

const placeOrder = async (orderData) => {
  // Save the order logic...
  // After saving, add the order event to the queue
  await orderQueue.add('order-placed', orderData);
  console.log('Order placed and event added to the queue');
};

module.exports = {
  placeOrder,
};