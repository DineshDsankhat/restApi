const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  user_id: {
    type: ObjectId,
    // required: true,
  },
  upload_time: {
    type: Date,
    // required: true,
  },
  location: {
    type: Schema.Types.Mixed,
  },
  file_path: {
    type: String,
    // required: true,
  },
  like: {
    type: Number,
  },
  view: {
    type: Number,
  },
  reaction: {
    type: Array,
  },
});

module.exports = mongoose.model("Story", storySchema);
