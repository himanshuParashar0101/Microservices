# 🛠️ Microservices Architecture

This repository contains a microservices-based backend system designed to handle user management, product management, and order processing. It also includes a GraphQL Gateway to provide a unified API interface for the client.

## 🔗 System Components

The system consists of the following independent services:

| Service          | Description                                                                                     | Folder              |
|------------------|-------------------------------------------------------------------------------------------------|---------------------|
| **User Service**  | Manages user registration, authentication (JWT), and profiles. Emits events like "User Registered." | `user-service/`     |
| **Product Service** | Handles product catalog management (creation, update, deletion) and inventory management.       | `product-service/`  |
| **Order Service** | Processes order creation, order retrieval, and handles events like "Order Placed."              | `order-service/`    |
| **GraphQL Gateway** | Aggregates data from all microservices and provides a unified GraphQL API for clients.        | `graphql-gateway/`  |

## 📂 Services Overview

Each service is implemented as an isolated microservice, allowing independent scalability and maintenance.

1️⃣ **User Service**  
   Handles user-related operations like registration, authentication (JWT), and profile management.  
   **Key Event:** Emits a User Registered event for other services to consume.

2️⃣ **Product Service**  
   Manages the product catalog, including product creation, updates, deletions, and inventory.  
   **Key Events:**  
   - Product Created  
   - Inventory Updated  

3️⃣ **Order Service**  
   Handles order creation and retrieval.  
   **Key Event:** Emits an Order Placed event for inventory adjustment and processing.

4️⃣ **GraphQL Gateway**  
   Exposes a unified API by aggregating data from all other microservices.  
   Handles both queries and mutations for users, products, and orders.

## 📦 Installation

Follow the steps below to set up the project on your local machine:

### Step 1: Clone the Repository
```bash
git clone https://github.com/himanshuParashar0101/Microservices
cd microservices
```
# Step 2: Install Dependencies for Each Service 🚀

To set up the necessary dependencies for each service, follow the instructions below:

## User Service 👤

Navigate to the `user-service` directory and install the dependencies:

```bash
cd user-service
npm install
```

## Product Service 📦

Navigate to the `product-service` directory and install the dependencies:

```bash
cd ../product-service
npm install
```
## Order Service 🛒

Navigate to the `order-service` directory and install the dependencies:

```bash
cd ../order-service
npm install
```

## GraphQL Gateway 🌉

Navigate to the `graphql-gateway` directory and install the dependencies:

```bash
cd ../graphql-gateway
npm install
```

# Step 3: Running the Services 🚀

To start each service in development mode, navigate to the corresponding folder and run:

```bash
npm start
```

# ⚙️ Architecture

## Microservices 🛠️

| Aspect           | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| 🏗️ Domain Logic     | Each microservice manages its own domain and has its own database.         |
| 🔄 Event-Driven     | Services communicate via events using BullMQ and Redis for asynchronous messaging. |
| 🌐 Direct REST Calls | Services may also communicate directly via REST API calls for specific operations. |

## GraphQL Gateway 🌉

| Feature          | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| 🛠️ Unified API      | The gateway provides a single GraphQL API for clients, fetching data from multiple services. |
| 🔍 Queries & Mutations | Supports queries and mutations for users, products, and orders by interacting with microservices. |


# 🔄 Microservices Communication Flow

| Event               | Emitter         | Consumer        | Purpose                                                   |
|---------------------|------------------|------------------|-----------------------------------------------------------|
| 👤 User Registered   | User Service     | Order Service     | Used for order processing based on user registration details. |
| 📦 Product Created   | Product Service  | Order Service     | Triggers product availability for orders.                  |
| 🛒 Order Placed      | Order Service    | Product Service   | Updates inventory based on new orders.                    |


# 🚀 Features

- **Scalability**: Each microservice is designed to scale independently. 📈
- **Event-Driven Architecture**: Microservices communicate via events, ensuring loose coupling. 🔄
- **GraphQL Gateway**: Single endpoint for the client to interact with all services. 🌉


# 🛠️ Technologies Used

| Technology           | Purpose                                                              |
|----------------------|----------------------------------------------------------------------|
| 🌐 Node.js           | Backend runtime for building each microservice.                     |
| 🖥️ Express.js        | Framework used to create REST APIs.                                 |
| 🗄️ MongoDB           | NoSQL database for storing user, product, and order data.           |
| 🗨️ Redis & BullMQ    | Event messaging and job queue system for microservice communication. |
| 📊 GraphQL           | Provides a unified API for clients to fetch and manipulate data from multiple services. |


# 📚 License

This project is licensed under the MIT License.