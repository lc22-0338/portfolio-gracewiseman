const express = require("express")
const path = require("path")

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "public")))
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