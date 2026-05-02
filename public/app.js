const express = require("express")
const path = require("path")

const mysql = require("mysql2")
const connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password:"PioS&&!*7718",
})

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const PORT = 3000;
app.use(express.static(__dirname))

app.post('/contact', (req, res) => {
    const { email, message } = req.body;
    const sql = 'INSERT INTO contacts (email, message) VALUES (?, ?)';
    connection.query(sql, [email, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving message');
        }
        res.send(`<div style="text-align: center; margin-top: 50px; font-family: Arial, sans-serif;">
                <h1 style="color: #2ecc71;">Success!</h1>
                <p>Message sent successfully!</p>
                <a href="/index.html" style="display: inline-block; padding: 10px 20px; background: #3498db; color: white; text-decoration: none; border-radius: 5px;">Return to Home</a>
            </div>`);
    });
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
    connection.query('CREATE DATABASE IF NOT EXISTS portfolio_contacts', (err) => {
        if (err) throw err;
        console.log('Database created or exists');
        connection.changeUser({database: 'portfolio_contacts'}, (err) => {
            if (err) throw err;
            const createTable = `CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
            connection.query(createTable, (err) => {
                if (err) throw err;
                console.log('Table created or exists');
                app.listen(PORT, () => {
                    console.log(`server running on http://localhost:${PORT}`)
                });
            });
        });
    });
});

