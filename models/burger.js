// import orm.js
var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM
// Change to selectAll
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  // Change to insertOne
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // Change to updateOne
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // Change to deleteOne
  deleteOne: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export at the end of the burger.js file.
module.exports = burger;