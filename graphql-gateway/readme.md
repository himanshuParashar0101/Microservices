# Microservices Architecture

## Overview

This repository contains a microservices-based backend system for handling user management, product management, and order processing. The system also includes a GraphQL gateway to provide a unified API for the client.

The system consists of the following services:

1. **User Service**: Manages user registration, authentication, and profiles.
2. **Product Service**: Manages product creation, updates, deletions, and inventory management.
3. **Order Service**: Handles order creation and retrieval.
4. **GraphQL Gateway**: Exposes a unified GraphQL API, aggregating data from the other services.

Each service is implemented as a separate microservice, allowing them to scale independently.

## Services Overview

### 1. User Service

- Handles user registration, authentication (JWT), and profile management.
- Emits events like "User Registered" for other services to consume.
  
Folder: `user-service/`

### 2. Product Service

- Manages product catalog, including creation, updates, deletions, and inventory.
- Emits events like "Product Created" and "Inventory Updated."

Folder: `product-service/`

### 3. Order Service

- Handles order creation and processes events like "Order Placed."
- Emits events for order processing.

Folder: `order-service/`

### 4. GraphQL Gateway

- Aggregates data from all microservices and provides a unified API for the client.
- Handles queries and mutations for users, products, and orders.

Folder: `graphql-gateway/`

## Installation

### Step 1: Clone the Repository

```bash
    git clone https://github.com/himanshuParashar0101/Microservices
    cd microservices
```

### Step 2: Install Dependencies for Each Service

Navigate into each service folder and install the required dependencies:

# Install for User Service

cd user-service
npm install

# Install for Product Service

cd ../product-service
npm install

# Install for Order Service

cd ../order-service
npm install

# Install for GraphQL Gateway

cd ../graphql-gateway
npm install

### Running the Services

Manually (For Development)
Each microservice can be started individually using npm start

### Architecture

#### Microservices: 

Each service manages its own domain logic and database.

#### GraphQL Gateway: 

The gateway fetches data from the individual microservices to fulfill client queries.

#### Communication:

Services may communicate via events (e.g., bullMQ , redis ) or direct REST calls, depending on the implementation.

### Microservices Communication Flow


- User Service emits "User Registered" events that the Order Service may consume.
- Product Service emits "Product Created" events, consumed by the Order Service.
- Order Service emits "Order Placed" events, consumed by the Product Service to update inventory.
