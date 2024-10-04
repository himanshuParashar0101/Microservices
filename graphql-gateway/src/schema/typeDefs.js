const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    stock: Int!
  }

  type Order {
    id: ID!
    userId: String!
    products: [ProductOrder!]
    totalAmount: Float!
  }

  type ProductOrder {
    productId: String!
    quantity: Int!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    products: [Product]
    product(id: ID!): Product
    orders: [Order]
    order(id: ID!): Order
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input ProductInput {
    name: String!
    price: Float!
    inventory: Int!
  }

  input OrderInput {
    userId: String!
    products: [ProductOrderInput!]
    totalAmount: Float!
    status: String! 
  }

  input ProductOrderInput {
    productId: String!
    quantity: Int!
  }

  type Mutation {
    registerUser(input: RegisterInput): User
    createProduct(input: ProductInput): Product
    placeOrder(input: OrderInput): Order
  }
`;

module.exports = typeDefs;
