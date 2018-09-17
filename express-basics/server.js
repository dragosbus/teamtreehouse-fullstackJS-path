const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set("view engine", "pug");

app.get('/welcome', (req, res)=>{
    console.log(req.cookies.username);
    res.render("welcome", {user: req.cookies.username}); 
});

app.get("/hello", (req, res)=> {
    res.render("index"); 
});

app.post('/hello', (req, res)=>{
    if(req.body.username) {
        res.cookie('username', req.body.username);
        res.redirect('/welcome');
    }
    res.redirect('/hello');
});

app.listen(process.env.PORT, process.env.IP, ()=> {
    console.log("Listen"); 
});