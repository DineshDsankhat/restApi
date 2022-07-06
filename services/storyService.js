const config = require("../config.json");
const bcrypt = require("bcryptjs");
const db = require("../utils/db");
const jwt = require("jsonwebtoken");
const Story = db.Story;

exports.addStory = async (body) => {
      const story = new Story(body);
      story.save();
      console.log(story);
    }