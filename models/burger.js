// import orm.js into burger.js
const orm = require("../config/orm.js");

// code that will call the ORM functions using burger specific input for the ORM
var burger = {
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
    }
    // put
};

// Export at the end of the burger.js file.
module.exports = burger;