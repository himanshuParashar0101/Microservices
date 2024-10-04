# Product Service

## Overview

The Product Service is responsible for managing product creation, updates, deletions, and inventory management. This service provides an API to handle CRUD operations for products and includes inventory updates based on events. **BullMQ** and **Redis** are used for event-driven inventory updates.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for handling routing and API creation.
- **MongoDB**: NoSQL database for storing product data.
- **BullMQ**: For managing queues and event-driven tasks like inventory updates.
- **Redis**: Used in conjunction with BullMQ for message queueing.

## Installation

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
    "stock": 70  // Adjusted stock
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
