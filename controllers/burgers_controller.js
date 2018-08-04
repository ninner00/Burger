//  import the following:

// Express
// burger.js

var express = require("express");
var burger = require("../models/burger.js");

//Create the router for the app, and export the router at the end of your file.

var router = express.Router();

// Home
router.get('/', function (req, res) {
    res.redirect('/burgers');
});

// All burgers
// Change to selectAll
router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Add a burger
// Change to insertOne
router.post("/burgers/create", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.name], function() {
    res.redirect("/burgers");
  });
});

// Update burger
// Change to updateOne
router.put("/burgers/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function() {
      res.redirect('/burgers');
    });
});

// Delete burger
// Change to deleteOne
router.delete("/burgers/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) {
    res.redirect('/burgers');
  });
});

// Export routes for server.js to use.
module.exports = router;