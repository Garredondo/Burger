// import the following:
const express = require("express");

const router = express.Router();

// importing the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// get - read
router.get("/", function(req, res){
    burger.all(function(data){
        res.render("index", {burgers: data});
    });
});

// post - create
router.post("/api/burgers", function(req, res){
    burger.create("burger_name", req.body.name, function(result){
        res.json({ id: result.insertId });
    });
});

// put - update
router.put("/api/burgers/:id", function(req, res){

    var id = req.params.id;

    console.log(id);

    burger.update(id, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export the router to server.js
module.exports = router;