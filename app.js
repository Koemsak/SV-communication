const express = require("express");
const fs = require("fs");
const app = express();
let PORT = "5000";
app.listen(PORT, (req, res) => {
    console.log("Server is running in port: " + PORT);
})

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());


// GET DATA FROM SIGN UP
let data = JSON.parse(fs.readFileSync("data.json"));
app.get("/text", (req, res) => {
    res.send(data);
})


// LOGIN MESSAGE
app.post("/login", (req, res) => {
    let info = req.body;
    let invalid = false;
    for (user of data) {
        if (user.firstName === info.name && user.password === info.password) {
            invalid = true;
        }
    }
    res.send(invalid);
})

// app.post("/getData", (req, res) => {
//     let newData = req.body;
//     data.push(newData);
//     fs.writeFileSync("data.json", JSON.stringify(data));
//     res.send(newData);
// })


// MESSAGE CHAT 
let message = JSON.parse(fs.readFileSync("message.json"));

app.get("/getdata", (req, res) => {
    res.send(message);
})

app.post("/add", (req, res) => {
    let username = req.body.name;
    let txt = req.body.text;
    let new_data = {
        name: username,
        text: txt
    }
    message.push(new_data);
    fs.writeFileSync("message.json", JSON.stringify(message));
    res.send(message);
})