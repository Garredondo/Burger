// import the following:
const express = require("express");

const router = express.Router();

// importing the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create the router for the app
router.get("/", function(req, res){
    burger.all(function(data){
        res.render("index", {burgers: data});
    });
});

// need my post route
router.post("/api/burgers", function(req, res){
    console.log(req.body.name);
    burger.create("burger_name", req.body.name, function(result){
        res.json({ id: result.insertId });
    });
});
// need my put route



// export the router to server.js
module.exports = router;