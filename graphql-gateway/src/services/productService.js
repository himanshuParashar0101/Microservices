const axios = require('axios');
const productServiceURL = process.env.PRODUCT_SERVICE_URL;
console.log("PRODUCT_SERVICE_URL", productServiceURL);
module.exports = {
  getProducts: async () => {
    const response = await axios.get(`${productServiceURL}/api/products`);
    return response.data;
  },
  getProduct: async (id) => {
    const response = await axios.get(`${productServiceURL}/api/products/${id}`);
    return response.data;
  },
  createProduct: async (input) => {
    const response = await axios.post(`${productServiceURL}/api/products`, input);
    return response.data;
  }
};
