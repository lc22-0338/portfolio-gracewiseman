// console.log("start");
// setTimeout(()=>{
// console.log("inside timeout");
// }, 2000)

// console.log("end");

const http = require("http"); 
const server = http.createServer((req,res) =>{
    res.write("hello from inside node server");
    res.end(); 

});
server.listen(3000, () => {
    console.log("server running on");
})