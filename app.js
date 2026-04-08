// console.log("start");
// setTimeout(()=>{
// console.log("inside timeout");
// }, 2000)

// console.log("end");

const http = require("http"); 

const server = http.createServer((req,res) =>{
    fstat.readFile("index.html", (err,data) =>{
        res.writeHead(200,{"Contemnt-Type":"text/html"});
    res.write(data);
    res.end(); 
});
server.listen(3000, () => {
    console.log("server running on");
})