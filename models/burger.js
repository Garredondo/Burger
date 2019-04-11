// import orm.js into burger.js
const orm = require("../config/orm.js");

// code that will call the ORM functions using burger specific input for the ORM

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    }
    // put
    // create
};

// Export at the end of the burger.js file.
module.exports = burger;