const express = require("express");
const app = express();

let port = 3000;

app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.send("workking")
})

app.get("/listings", (req,res) =>{
    res.render("index.ejs");
})


app.listen(3000, () =>{
    console.log("app is listening..")
})