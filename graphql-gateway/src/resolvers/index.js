const userService = require('../services/userService');
const productService = require('../services/productService');
const orderService = require('../services/orderService');

const resolvers = {
  Query: {
    users: async () => await userService.getUsers(),
    user: async (_, { id }) => await userService.getUser(id),
    products: async () => await productService.getProducts(),
    product: async (_, { id }) => await productService.getProduct(id),
    orders: async () => await orderService.getOrders(),
    order: async (_, { id }) => await orderService.getOrder(id),
  },
  Mutation: {
    registerUser: async (_, { input }) => await userService.registerUser(input),
    createProduct: async (_, { input }) => await productService.createProduct(input),
    placeOrder: async (_, { input }) => await orderService.placeOrder(input),
  }
};

module.exports = resolvers;
