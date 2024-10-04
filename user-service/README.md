# 👤 User Service

## 🚀 Overview

The **User Service** is responsible for handling **user registration**, **authentication**, and **profile management**. It uses **JWT** (JSON Web Token) for secure authentication and **MongoDB** as the database for storing user information. Passwords are securely hashed using **bcrypt** with a salt of 10 to ensure user data is well-protected 🔐.

---

## 🛠️ Technologies Used

| Technology   | Purpose                                                  |
|--------------|----------------------------------------------------------|
| **Node.js**  | JavaScript runtime for building server-side applications.|
| **Express.js**| Web framework for creating APIs and handling requests.  |
| **MongoDB**  | NoSQL database for storing user data.                    |
| **JWT**      | Used for authenticating users with secure tokens.        |
| **bcrypt.js**| For hashing and salting passwords securely.              |

---

## 🌟 Features

- 🔑 **User Registration**: 
  - Allows new users to sign up with securely hashed passwords.
  
- 🔐 **User Authentication**:
  - Users can log in using **JWT** and receive a token for accessing protected routes.
  
- 👤 **Profile Management**:
  - Users can update their profile information securely.

- 🛡️ **Password Security**:
  - Passwords are hashed and salted using **bcrypt** for extra security during registration and authentication.

---

## ⚙️ Installation

To set up the **User Service** locally, follow the steps below:

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/microservices.git
cd user-service
```

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

## 🔄 API Endpoints

| 🌐 **HTTP Method** | 🛣️ **Endpoint**         | 📄 **Description**                        |
|--------------------|-------------------------|-------------------------------------------|
| **POST**           | `/register`             | 📝 Register a new user                    |
| **POST**           | `/login`                | 🔑 Log in a user and get a token          |
| **GET**            | `/profile`              | 👤 Get user profile (🔒 Auth required)    |
| **PUT**            | `/profile/update`       | ✏️ Update user profile (🔒 Auth required) |


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
