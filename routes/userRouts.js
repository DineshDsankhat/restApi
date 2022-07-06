const express = require("express");
const userRouter = express.Router();
const userControll = require("../controllers/userControler.js");

userRouter.get("/", userControll.getHomePage);

// registration and login api
userRouter.post("/register", userControll.register);
userRouter.post("/authenticate", userControll.authenticate);

//user update
userRouter.patch("/updateprofile", userControll.getHomePage);
userRouter.post("/geoupdate", userControll.updateGeoLocation);

// friend api
userRouter.get("/showfriend", userControll.getHomePage);
userRouter.get("/show-public", userControll.getHomePage);
userRouter.patch("/addfriend", userControll.addFriend);
userRouter.get("/pending-requests", userControll.getHomePage);
userRouter.patch("/approve-requests", userControll.getHomePage);
userRouter.patch("/reject-requests", userControll.getHomePage);
userRouter.patch("/removefriend", userControll.getHomePage);

exports.route = userRouter;
