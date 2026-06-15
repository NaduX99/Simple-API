# Simple Express MySQL API

A simple RESTful API built with Node.js, Express, and MySQL for managing users. 

## Prerequisites
- Node.js installed
- MySQL Server installed and running

## Setup

1. **Install Dependencies**
   Open the terminal in the project directory and run:
   ```bash
   npm install
   ```

2. **Database Setup**
   Create a database named `testdb` and a table for `users`. You can run the following SQL command in your MySQL environment:
   ```sql
   CREATE DATABASE IF NOT EXISTS testdb;
   USE testdb;

   CREATE TABLE IF NOT EXISTS users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL
   );
   ```

3. **Run the Server**
   Start your application:
   ```bash
   node server.js
   ```
   The server will start running at `http://localhost:5000`.

## API Endpoints

### 1. Create a User
- **Method:** `POST`
- **URL:** `/users`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

### 2. Get All Users
- **Method:** `GET`
- **URL:** `/users`

### 3. Get User by ID
- **Method:** `GET`
- **URL:** `/users/:id`

### 4. Update a User
- **Method:** `PUT`
- **URL:** `/users/:id`
- **Body:**
  ```json
  {
    "name": "John Doe Edited",
    "email": "john.edited@example.com"
  }
  ```

### 5. Delete a User
- **Method:** `DELETE`
- **URL:** `/users/:id`


**POSTMEN check** `https://nadullaknidu7-4880383.postman.co/workspace/postmen-acadamy~a7e61346-0351-4556-bab2-ca045a1f4f85/collection/50951538-495bd039-194e-425c-be38-85962f80aefd?action=share&creator=50951538`
