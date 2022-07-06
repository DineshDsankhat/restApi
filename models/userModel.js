const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilepath: {
    type: String,
  },
  friends: {
    type: Array,
  },
  location: {
    type: Schema.Types.Mixed,
  },
});

module.exports = mongoose.model("User", userSchema);
