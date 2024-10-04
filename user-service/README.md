# User Service

## Overview

The User Service is responsible for handling user registration, authentication, and profile management. It uses **JWT** (JSON Web Token) for authentication and **MongoDB** as the database for storing user information. Passwords are securely hashed using bcrypt with a salt of 10 to ensure user data is protected.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **JWT**: Used for authenticating users with tokens.
- **bcrypt.js**: For hashing and salting passwords.

## Features

- **User Registration**: Create a new user with securely hashed passwords.
- **User Authentication**: Authenticate users using JWT and retrieve tokens for protected routes.
- **Profile Management**: Update user profile details securely.
- **Password Security**: Hashing and salting are used for securing passwords during registration and authentication.

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/himanshuParashar0101/Microservices/tree/main/user-service

cd microservices/user-service
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Environment Variables

#### Create a .env file in the root of the user-service directory with the following values

- MONGO_URI=mongodb+srv://<your-username>:<your-password>@user-service.v6erz.mongodb.net/?retryWrites=true&w=majority&appName=User-Service
- SECRET_KEY=my_secret_key_123

- Replace your-username and your-password with your MongoDB credentials.

### Step 4: Run the Application

- cd src
- nodemon server.js

# API Endpoints

## User Registration

### Register a New User

**Endpoint:** `POST /api/register`

#### Description

Registers a new user and securely stores their hashed password. This endpoint is essential for creating new user accounts in the application.

#### Request Body

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

### Response

- **201 Created**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## 2. User Login

**Endpoint:** `POST /api/login`

### Description

Authenticates an existing user and returns a JWT token.

### Request Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Response

- **200 OK**
```json
{
  "token": "jwt-token"
}
```

## 3. Get All Users

**Endpoint:** `GET /api/`

### Description
Retrieves a list of all registered users.

### Response

- **200 OK**

```json
[
  {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```
## 4. Update User Profile

**Endpoint:** `PUT /api/profile/:userId`

### Description
Updates the profile information for a specific user.

### Request Body
```json
{
  "name": "John Doe Updated",
  "email": "johnupdated@example.com"
}
```

### Response
- 200 OK
```json
{
  "message": "User profile updated successfully",
  "user": {
    "id": "user-id",
    "name": "John Doe Updated",
    "email": "johnupdated@example.com"
  }
}
```

## Database Schema

The user data is stored in MongoDB with the following schema:

### User Schema
```json
{
  "name": "string",
  "email": "string",
  "password": "hashed string"
}
```
