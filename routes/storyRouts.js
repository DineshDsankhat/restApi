const express = require("express");
const storyRouter = express.Router();
const storyControll = require("../controllers/storyControler.js");

// storyRouter.get("/", storyControll.getHomePage); 
// storyRouter.get("/allstory", storyControll.getHomePage); //addstory with filter all or friends
storyRouter.post("/addstory", storyControll.addStory); //addstory new story
// storyRouter.delete("/deletestory", storyControll.getHomePage); //deletestory
// storyRouter.patch("/addonstory", storyControll.getHomePage); //view - like - reaction

exports.route = storyRouter;
