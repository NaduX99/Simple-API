const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("MySQL Connected");
});


//Create User
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";

    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "User created successfully",
            id: result.insertId
        });
    });
});


//get all users
app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
});


//user by id
app.get("/users/:id", (req, res) => {
    const sql = "SELECT * FROM users WHERE id = ?";

    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(results[0]);
    });
});


//update user
app.put("/users/:id", (req, res) => {
    const { name, email } = req.body;

    const sql =
        "UPDATE users SET name = ?, email = ? WHERE id = ?";

    db.query(sql, [name, email, req.params.id], (err, result) => {
        if (err) {
            console.error("Update Error:", err);
            return res.status(500).json({
                success: false,
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            message: "User updated successfully"
        });
    });
});


//delete user
app.delete("/users/:id", (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?";

    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully"
        });
    });
});


// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});