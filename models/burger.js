// import orm.js into burger.js
const orm = require("../config/orm.js");

// code that will call the ORM functions using burger specific input for the ORM
var burger = {
    // read all
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    // create
    create: function(col, vals, cb){
        orm.create("burgers", col, vals, function(res){
            cb(res);
        });
    },
    // put
    update: function(id, cb){
        orm.update("burgers", "devoured", 1, "id", id, function(res){
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;