const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res)=> {
    const colors = ["red", "green", "blue", "yellow"];
    res.locals.prompt = "Who is burriend?";
    res.locals.hint = "hello";
    res.locals.colors = colors;
    res.render("index"); 
});

app.listen(process.env.PORT, process.env.IP, ()=> {
    console.log("Listen"); 
});