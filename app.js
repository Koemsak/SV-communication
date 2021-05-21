
const express = require("express");
const app = express();

const fs = require("fs");

const PORT = 3000;
app.listen(PORT, (req, res) => console.log("Server is running...."));

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded());


// READ FILE
let data = JSON.parse(fs.readFileSync("data.json"));


app.post("/login", (req, res) => {
    let userLogin = req.body;
    let isValid = false;
    for (let user of data) {
        console.log(user)
        if (user.name == userLogin.name && user.password == userLogin.password) {
            isValid = true;
        }
        // console.log(user.password);
    }
    res.send(isValid);
})