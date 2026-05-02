const express = require("express")
const path = require("path")

const mysql = require("mysql2")
const connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password:"grace348",
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
        res.send('Message sent successfully!');
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



// console.log("start");
// setTimeout(()=>{
// console.log("inside timeout");
// }, 2000)

// console.log("end");

// const http = require("http"); 
// const fs = require("fs");

// const server = http.createServer((req,res) =>{
//     fs.readFile("index.html", (err,data) =>{
//         res.writeHead(200,{"Contemnt-Type":"text/html"});
//         res.write(data);
//         res.end(); 
//     })
// });

// server.listen(3000, () => {
//     console.log("server running on")
// })