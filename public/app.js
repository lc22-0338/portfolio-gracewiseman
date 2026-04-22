const express = require("express")
const path = require("path")

const mysql = require("mysql")
const connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password:"PioS&&!*7718",
})
const app = express();
const PORT = 3000;
app.use(express.static(__dirname))
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})



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