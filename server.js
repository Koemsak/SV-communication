
const express = require("express");
const server = express();
const fs = require("fs");
const PORT = 4000;
server.listen(PORT, (req, res) => console.log("Server is running...."));
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded());
let data_message  = JSON.parse(fs.readFileSync("data_message.json"));
// VERYFY REGISTER:
server.post("/login", (req, res) =>{
    let input_infor = req.body;
    let datas = JSON.parse(fs.readFileSync("data.json"));
    let status = false;
    for (let data of datas){
        if(data.name === input_infor.user && data.password === input_infor.password){
            status = true;
        }
    }
    res.send(status);
});
//get message in home.html and to show on chat application:
server.get("/getdata", (req, res) =>{
    res.send(data_message);
})

server.post("/add", (req, res) => {
    data_message = req.body
    console.log(data_message)
    fs.writeFileSync("data_message.json",JSON.stringify(data_message));
    res.send(JSON.parse(fs.readFileSync("data_message.json")));
})



