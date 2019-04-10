// requiring express
const express = require("express");

// needed for Heroku to pick another port if necessary
var PORT = process.env.PORT || 8080;

var app = express();

// needed if you decide to have a stylesheet
// app.use(express.static("public"));

// middleware to parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// importing routes and giving the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server to begin listening to requests
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
});


