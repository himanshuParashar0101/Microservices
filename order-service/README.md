# 🛒 Order Service

## 🚀 Overview

The **Order Service** is responsible for managing customer orders, including **order creation**, **retrieval**, and **status updates**. This service supports asynchronous order processing tasks using **BullMQ** and **Redis**, ensuring efficient and scalable task management 🔄.

---

## 🛠️ Technologies Used

| 🧰 **Technology** | 📄 **Purpose**                                                         |
|-------------------|-----------------------------------------------------------------------|
| **Node.js**       | JavaScript runtime for building server-side applications.             |
| **Express.js**    | Web framework for routing and API creation.                           |
| **MongoDB**       | NoSQL database for storing order data.                                |
| **BullMQ**        | Queue management for handling asynchronous tasks related to orders.   |
| **Redis**         | Used for message queueing alongside BullMQ to process background jobs.|

---

## 🌟 Features

- 📝 **Order Creation**:
  - Create new customer orders.
  
- 📜 **Order Retrieval**:
  - Retrieve a list of customer orders or specific order details.

- 🔄 **Order Status Updates**:
  - Update the status of an existing order.

- 🛠️ **Event-Driven Order Processing**:
  - Uses **BullMQ** and **Redis** for handling background jobs and processing tasks such as payment confirmation and inventory updates.

---

## ⚙️ Installation

#### Follow these steps to set up the **Order Service** locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/himanshuParashar0101/Microservices/tree/main/order-service
cd microservices/order-service
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Environment Variables

Create a `.env` file in the root of the `order-service` directory with the following values:

```plaintext
PORT=3003
MONGO_URI=mongodb+srv://<your-username>:<your-password>@user-service.v6erz.mongodb.net/order-Service
```

> **Note:** Replace `<your-username>` and `<your-password>` with your MongoDB credentials.

### Step 4: Run the Application

```bash
cd src/
npm server.js
```
## 🔄 API Endpoints

| 🌐 **HTTP Method** | 🛣️ **Endpoint**         | 📄 **Description**                     |
|--------------------|-------------------------|----------------------------------------|
| **POST**           | `/orders`               | 📝 Create a new order                  |
| **GET**            | `/orders`               | 📜 Retrieve a list of all orders       |
| **GET**            | `/orders/:id`           | 🔍 Get details of a single order       |
| **PUT**            | `/orders/:id`           | ✏️ Update an existing order's status   |
| **DELETE**         | `/orders/:id`           | 🗑️ Delete an order                     |

---

# API Endpoints

## 1. Create a New Order

**Endpoint:** `POST /orders`

### Description

Creates a new order for the user.

### Request Body

```json
{
  "userId": "user-id",
  "products": [
    {
      "productId": "product-id",
      "quantity": 2
    }
  ],
  "totalAmount": 200.00
}
```

### Response
- **201 Created**
```json
{
  "message": "Order created successfully",
  "order": {
    "id": "order-id",
    "userId": "user-id",
    "products": [
      {
        "productId": "product-id",
        "quantity": 2
      }
    ],
    "status": "pending",
    "totalAmount": 200.00
  }
}
```

## 2. Get Order by ID

**Endpoint:** `GET /orders/:id`

### Description
Retrieves an order by its ID.

### Response
- **200 OK**
```json
{
  "id": "order-id",
  "userId": "user-id",
  "products": [
    {
      "productId": "product-id",
      "quantity": 2
    }
  ],
  "status": "pending",
  "totalAmount": 200.00,
  "createdAt": "2024-10-04T10:00:00.000Z",
  "updatedAt": "2024-10-04T10:00:00.000Z"
}
```

### Order Status Updates

Orders can have the following statuses:

- **pending:** The order has been created but not yet processed.
- **shipped:** The order has been shipped.
- **delivered:** The order has been delivered to the customer.

## Database Schema

The order data is stored in MongoDB with the following schema:

### Order Schema
```json
{
  "userId": "string",
  "products": [
    {
      "productId": "string",
      "quantity": "number"
    }
  ],
  "status": "string",
  "totalAmount": "number",
  "createdAt": "date",
  "updatedAt": "date"
}
```
## 📦 Event-Driven Order Processing

- **BullMQ** and **Redis** are used to manage queues for order-related tasks such as:
  - Payment processing.
  - Inventory updates based on orders.
  - Notification dispatch.

## Queue/Stream Communication

BullMQ and Redis are used for handling order processing tasks and managing asynchronous updates.

## Environment Variables

| Key       | Description                                   | Example                                                |
|-----------|-----------------------------------------------|--------------------------------------------------------|
| PORT      | Port the Order Service runs on                | `3003`                                                 |
| MONGO_URI | MongoDB connection string                      | `mongodb+srv://<user>:<pass>@cluster-url`             |
