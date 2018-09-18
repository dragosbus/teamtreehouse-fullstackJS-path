const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const {data} = require("./data/data.json");


app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "pug");

app.get("/:id", (req, res)=>{
     const {cards} = data;
     res.render("card", {query: cards[req.params.id].question, hint: cards[req.params.id].hint})
});


app.listen(process.env.PORT, process.env.IP, ()=> {
    console.log("Listen"); 
});