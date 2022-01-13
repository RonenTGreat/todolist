const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
    var today = new Date();

    if(today.getDate() === 6 || today.getDate() === 0){
        res.send("Yay, it's the weekend")
    }else{
        res.sendFile(__dirname + "/index.html")
    }
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})