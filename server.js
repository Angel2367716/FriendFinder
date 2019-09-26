// Dependencies
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

const PORT = process.env.PORT || 3030

app.use = (bodyParser.urlencoded({extended: true})); // creates application/x-www-form-urlencoded parser

// Sets up the Express app to handle data parsing
app.use(bodyParser.json({type: 'application/*+json'}));//parse different custom JSON types as JSON
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));//parse something custom into a Buffer
app.use(bodyParser.text({type: 'text/html'})); //parses html body into a string

//ROUTES
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  