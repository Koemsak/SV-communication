const express = require("express");
const fs = require("fs");
const app = express();
let PORTs = 3000;
app.listen(process.env.PORT || PORTs, ()=> console.log("server running"));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());



let data = JSON.parse(fs.readFileSync("data.json"));


// GET DATA TO LOAD DATA AUTO
app.get("/user/auto/login", (req, res) => {
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

 
// SIGN UP TO ADD NEW USER 
app.post("/getDatas", (req, res) => {
    let newData = req.body;
    let status = false;
    for (let user of data) {
        if (user.email === newData.email) {
            status = true;
        }
    };
    if (!status) {
        data.push(newData);
        fs.writeFileSync("data.json", JSON.stringify(data));
    }
    res.send(status);

});


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
        text: txt,
        bold: req.body.bold,
        italic: req.body.italic
    }
    message.push(new_data);
    fs.writeFileSync("message.json", JSON.stringify(message));
    res.send(message);
})