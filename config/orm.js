// import mysql connection
const connection = require("../config/connection.js");

// methods  to execute the necessary mysql commands in the controllers.
var orm = {
    all: function (tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    // create
    create: function(tableInput, col, vals, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?);"

        connection.query(queryString, [tableInput, col, vals], function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    // put
    update: function(table, col, val, idCol, id, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        
        connection.query(queryString, [table, col, val, idCol, id], function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    }
};

// export the ORM object
module.exports = orm;
