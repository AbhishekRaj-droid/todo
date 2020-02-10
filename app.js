const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = [];
let workitems = [];

app.get("/", (req, res) => {
    let day = date();
    res.render("list", {listTitle:day, newItems:items});
})

app.post("/", (req,res) => {
    // var item = req.body.todo;
    // items.push(item);
    // res.redirect("/");

    let item = req.body.todo;
    // console.log(req.body.list);
    if (req.body.list === "work") {
        workitems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", (req, res) =>  {
    res.render("list", {listTitle:"work list", newItems:workitems});
})

app.listen(3000, ()=> {
    console.log("server is starting at " + 3000);
})