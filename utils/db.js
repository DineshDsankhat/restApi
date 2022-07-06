const config = require("../config.json");
const mongoose = require("mongoose");

mongoose
  .connect(config.connectionString)
  .then(console.log(" DB connect"))
  .catch((err) => {
    console.error(err);
  });

module.exports = {
  User: require("../models/userModel"),
  Story: require("../models/storyModel"),
};
