# 🌉 GraphQL Gateway

## Overview 🔍

The GraphQL Gateway serves as the entry point for all client requests, consolidating data from multiple microservices (User Service, Product Service, and Order Service) into a unified API. This service facilitates efficient data retrieval and management through GraphQL queries and mutations, providing a seamless experience for clients.

## Technologies Used 🛠️
- **Node.js**: JavaScript runtime for building server-side applications. 🖥️
- **Apollo Server**: A community-driven, open-source GraphQL server for Node.js. 🚀
- **Express.js**: Web framework for handling routing and API creation. 📦
- **REST APIs**: Communicates with the underlying microservices. 🔗


## Installation ⚙️

### Step 1: Clone the Repository 🐙

```bash
git clone https://github.com/himanshuParashar0101/Microservices/tree/main/graphql-gateway
cd microservices/graphql-gateway
```

### Step 2: Install Dependencies 📦

To install the required dependencies, run the following command:

```bash
npm install
```

### Step 4: Run the Application 🚀

To start the server, run the following command:

```bash
cd src
nodemon app.js
```

## API Endpoints  📡


### Queries

| Query                        | Description                            | Example                                                                                         |
|------------------------------|----------------------------------------|-------------------------------------------------------------------------------------------------|
| `users`                      | Retrieves all users                   | ```graphql query { users { id username email } } ```                                          |
| `user(id: ID!)`             | Retrieves a user by ID                | ```graphql query { user(id: "user-id") { id username email } } ```                            |
| `products`                   | Retrieves all products                | ```graphql query { products { id name price stock } } ```                                     |
| `product(id: ID!)`          | Retrieves a product by ID             | ```graphql query { product(id: "product-id") { id name price stock } } ```                    |
| `orders`                     | Retrieves all orders                  | ```graphql query { orders { id userId totalAmount } } ```                                     |
| `order(id: ID!)`            | Retrieves an order by ID              | ```graphql query { order(id: "order-id") { id userId totalAmount products { productId quantity } } } ``` |



### Mutations

| Mutation                               | Description                            | Example                                                                                         |
|----------------------------------------|----------------------------------------|-------------------------------------------------------------------------------------------------|
| `registerUser(input: RegisterInput)`   | Registers a new user                  | ```graphql mutation { registerUser(input: { name: "John Doe", email: "john@example.com", password: "password123" }) { id username email } } ``` |
| `createProduct(input: ProductInput)`   | Creates a new product                 | ```graphql mutation { createProduct(input: { name: "Sample Product", price: 100.0, inventory: 50 }) { id name price stock } } ``` |
| `placeOrder(input: OrderInput)`        | Places a new order                    | ```graphql mutation { placeOrder(input: { userId: "user-id", products: [{ productId: "product-id", quantity: 2 }], totalAmount: 200.00 }) { id totalAmount } } ``` |


## API Endpoints

### Queries

#### Get All Users

To retrieve a list of all users, use the following query:

```graphql
query {
  users {
    id
    username
    email
  }
}
```

### Queries

#### Get User by ID

To retrieve a user by their ID, use the following query:

```graphql
query {
  user(id: "user-id") {
    id
    username
    email
  }
}
```

### Queries

#### Get All Products

To retrieve a list of all products, use the following query:

```graphql
query {
  products {
    id
    name
    price
    stock
  }
}
```

#### Get Product by ID

To retrieve a product by its ID, use the following query:

```graphql
query {
  product(id: "product-id") {
    id
    name
    price
    stock
  }
}
```

#### Get All Orders

To retrieve a list of all orders, use the following query:

```graphql
query {
  orders {
    id
    userId
    totalAmount
  }
}
```

#### Get Order by ID

To retrieve an order by its ID, use the following query:

```graphql
query {
  order(id: "order-id") {
    id
    userId
    totalAmount
    products {
      productId
      quantity
    }
  }
}
```

### Mutations

#### Register a New User

To register a new user, use the following mutation:

```graphql
mutation {
  registerUser(input: {
    name: "John Doe",
    email: "john@example.com",
    password: "password123"
  }) {
    id
    username
    email
  }
}
```

#### Create a New Product

To create a new product, use the following mutation:

```graphql
mutation {
  createProduct(input: {
    name: "Sample Product",
    price: 100.0,
    inventory: 50
  }) {
    id
    name
    price
    stock
  }
}
```

#### Place an Order

To place a new order, use the following mutation:

```graphql
mutation {
  placeOrder(input: {
    userId: "user-id",
    products: [
      {
        productId: "product-id",
        quantity: 2
      }
    ],
    totalAmount: 200.00
  }) {
    id
    totalAmount
  }
}
```

### Error Handling

The GraphQL Gateway implements robust error handling using `try-catch` statements in the resolvers. Console logs are added to track errors and successful operations for better debugging.

#### Example of Error Handling in Resolvers

```javascript
try {
  const users = await userService.getUsers();
  return users;
} catch (error) {
  console.error("❌ Error fetching users:", error.message);
  throw new Error('Failed to fetch users');
}
```
## Environment Variables

| Key                    | Description                           | Example                                      |
|------------------------|---------------------------------------|----------------------------------------------|
| `PORT`                 | Port the GraphQL Gateway runs on      | `4000`                                       |
| `USER_SERVICE_URL`     | URL for the User Service              | `http://localhost:3001`                      |
| `PRODUCT_SERVICE_URL`  | URL for the Product Service           | `http://localhost:3002`                      |
| `ORDER_SERVICE_URL`    | URL for the Order Service             | `http://localhost:3003`                      |
