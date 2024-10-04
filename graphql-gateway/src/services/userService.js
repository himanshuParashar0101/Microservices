const axios = require('axios');
const userServiceURL = process.env.USER_SERVICE_URL;
console.log("USER_SERVICE_URL", userServiceURL);
module.exports = {
  getUsers: async () => {
    try {
      const response = await axios.get(`${userServiceURL}/users`);
      console.log('User Service Data:', response.data); // Log only data
      const users = response.data;

    // Map _id to id for GraphQL schema compatibility
    const formattedUsers = users.map(user => ({
      id: user._id, // Map _id to id
      username: user.username,
      email: user.email,
      password: user.password // or omit this field if you don't need it in the GraphQL response
    }));

    console.log('Formatted User Data:', formattedUsers); // Log the formatted data
    return formattedUsers;
  } catch (error) {
    console.error('Error fetching users:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch users');
  }
},

  getUser: async (id) => {
    try {
      // Use backticks for template literals
      const response = await axios.get(`${userServiceURL}/api/users/${id}`);
      return response.data; // Return only the data part
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error.message);
      throw new Error(`Failed to fetch user with id ${id}`);
    }
  },

  registerUser: async (input) => {
    try {
      // Use backticks for template literals
      const response = await axios.post( `${userServiceURL}/api/users/register, input`);
      return response.data; // Return only the data part
    } catch (error) {
      console.error('Error registering user:', error.message);
      throw new Error('Failed to register user');
    }
  }
};