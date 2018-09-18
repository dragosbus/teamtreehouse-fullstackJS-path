const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const {data} = require("./data/data.json");


app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "pug");

app.get("/card", (req, res)=>{
    const {cards} = data;
    let randomId = Math.floor(Math.random() * cards.length);
    res.render(`card`, {cardId: randomId, query: cards[randomId].question, hint: cards[randomId].hint})
});

app.get("/:id", (req, res)=>{
     const {cards} = data;
     res.render("card", {cardId: req.params.id, query: cards[req.params.id].question, hint: cards[req.params.id].hint})
});

app.get("/:id/side", (req, res)=>{
    const {cards} = data;
    res.render("side", {cardId: req.params.id, answer: cards[req.params.id].answer})
});

app.listen(process.env.PORT, process.env.IP, ()=> {
    console.log("Listen"); 
});