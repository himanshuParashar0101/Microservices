# 🛒 Product Service

## 🚀 Overview

The **Product Service** is responsible for handling **product creation**, **updates**, **deletions**, and **inventory management**. This service exposes a full set of APIs to handle **CRUD operations** for products and includes automatic inventory updates based on events. **BullMQ** and **Redis** are utilized for efficient, event-driven inventory updates 🔄.

---

## 🛠️ Technologies Used

| 🧰 **Technology** | 📄 **Purpose**                                                          |
|-------------------|-------------------------------------------------------------------------|
| **Node.js**       | JavaScript runtime for building server-side applications.               |
| **Express.js**    | Web framework for routing and API creation.                             |
| **MongoDB**       | NoSQL database for storing product information.                         |
| **BullMQ**        | Queue management for event-driven tasks like inventory updates.         |
| **Redis**         | Used for message queueing in conjunction with **BullMQ**.               |

---

## 🌟 Features

- 🛍️ **Product Management**:
  - Create, update, and delete products.
  
- 📦 **Inventory Updates**:
  - Automated inventory adjustments triggered by events such as orders.
  
- 🔄 **Event-Driven Architecture**:
  - Uses **BullMQ** and **Redis** for managing real-time event processing like inventory updates.

---

## ⚙️ Installation

Follow these steps to set up the **Product Service** on your local machine:

### Step 1: Clone the Repository

```bash
git clone https://github.com/himanshuParashar0101/Microservices/tree/main/product%20service

cd microservices/product-service
```

## Installation Instructions

### Step 2: Install Dependencies

```bash
npm install
```
### Step 3: Set Environment Variables

Create a `.env` file in the root of the `product-service` directory with the following values:

```plaintext
PORT=3002
MONGO_URI=mongodb+srv://<your-username>:<your-password>@user-service.v6erz.mongodb.net/product_Service?retryWrites=true&w=majority&appName=User-Service
```

> **Note:** Replace `<your-username>` and `<your-password>` with your MongoDB credentials.

### Step 4: Run the Application

```bash
npm server.js 
 or 
nodemon server.js
```
##### The Product Service will now be running at http://localhost:3001 🎉

## 🔄 API Endpoints

| 🌐 **HTTP Method** | 🛣️ **Endpoint**           | 📄 **Description**                              |
|--------------------|---------------------------|-------------------------------------------------|
| **POST**           | `/products`               | 🛍️ Create a new product                         |
| **GET**            | `/products`               | 📜 Retrieve a list of all products              |
| **GET**            | `/products/:id`           | 🔍 Get details of a single product              |
| **PUT**            | `/products/:id`           | ✏️ Update an existing product                   |
| **DELETE**         | `/products/:id`           | 🗑️ Delete a product                             |
| **POST**           | `/products/inventory`     | 🔄 Update product inventory based on events     |

---

## 📦 Event-Driven Inventory Management

- **BullMQ** and **Redis** power the event-driven system for inventory updates.
- Events like **"Order Placed"** trigger automatic inventory adjustments, ensuring real-time stock accuracy.

# API Endpoints

## 1. Create a New Product

**Endpoint:** `POST /products`

### Description

Creates a new product.

### Request Body

```json
{
  "id": "prod-001",
  "name": "Sample Product",
  "type": "Electronics",
  "price": 100.0,
  "stock": 50
}
```

### Response

- **201 Created**

```json
{
  "message": "Product created successfully",
  "product": {
    "id": "prod-001",
    "name": "Sample Product",
    "type": "Electronics",
    "price": 100.0,
    "stock": 50
  }
}
```

## 2. Update Product Inventory

**Endpoint:** `PUT /products/inventory`

### Description

Updates the inventory of a product.

### Request Body

```json
{
  "productId": "prod-001",
  "quantity": 20
}
```

### Response

- **200 OK**

```json
{
  "message": "Inventory updated successfully",
  "product": {
    "id": "prod-001",
    "name": "Sample Product",
    "stock": 70
  }
}
```

## 3. Get All Products

**Endpoint:** `GET /products`

### Description
Retrieves all products.

### Response

- **200 OK**
```json
[
  {
    "id": "prod-001",
    "name": "Sample Product",
    "type": "Electronics",
    "price": 100.0,
    "stock": 70
  }
]
```
## 4. Get a Product by ID

**Endpoint:** `GET /products/:id`

### Description
Retrieves a product by its ID.

### Response

- **200 OK**

```json
{
  "id": "prod-001",
  "name": "Sample Product",
  "type": "Electronics",
  "price": 100.0,
  "stock": 70
}
```

## 5. Update a Product

**Endpoint:** `PUT /products/:id`

### Description

Updates the information of an existing product.

### Request Body

```json
{
  "name": "Updated Product Name",
  "price": 150.0
}
```

## 6. Delete a Product

**Endpoint:** `DELETE /products/:id`

### Description

Deletes a product by its ID.

### Response

- **200 OK**

```json
{
  "message": "Product deleted successfully"
}
```

## Database Schema

The product data is stored in MongoDB with the following schema:

### Product Schema
```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "price": "number",
  "stock": "number",
  "created_at": "date",
  "updated_at": "date"
}
```

## Special Features

### Inventory Updates
Product inventory is updated based on events like "Order Placed." BullMQ and Redis are used for managing event-driven updates.

### Queue/Stream Communication
BullMQ and Redis are utilized to handle event-driven inventory updates.

## Environment Variables

| Key       | Description                                   | Example                                                |
|-----------|-----------------------------------------------|--------------------------------------------------------|
| PORT      | Port the Product Service runs on              | `3002`                                                 |
| MONGO_URI | MongoDB connection string                      | `mongodb+srv://<user>:<pass>@cluster-url`             |
