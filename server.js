// Dependencies
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030

// app.use = (bodyParser.urlencoded({extended: true})); // creates application/x-www-form-urlencoded parser

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json({type: 'application/*+json'}));//parse different custom JSON types as JSON
// app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));//parse something custom into a Buffer
// app.use(bodyParser.text({type: 'text/html'})); //parses html body into a string

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/app/public")));

//ROUTES
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  