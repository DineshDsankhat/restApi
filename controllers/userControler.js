const userService = require("../services/userService");

// template

// exports.showfriend = (req, res, next) => {
//   userService
//     .showfriend()
//     .then(() => {})
//     .catch((err) => next(err));
// };

// getHomePage
exports.getHomePage = (req, res, next) => {
  res.status(200).send("HI i am Dinesh.");
};

// register
exports.register = (req, res, next) => {
  userService
    .register(req.body)
    .then((r) => {
      res.json({
        usernames: r.username,
        mobileNumber: r.mobileNumber,
        status: "Created",
        token: r.token,
      });
    })
    .catch((err) => next(err));
};

// authenticate
exports.authenticate = (req, res, next) => {
  userService
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch((err) => next(err));
};

// addfriend
exports.addFriend = (req, res, next) => {
  userService
    .addFriend(req.body)
    .then((r) => {
      res.json({
        status: r,
      });
    })
    .catch((err) => next(err));
};

// showfriend
exports.showfriend = (req, res, next) => {
  userService
    .showfriend()
    .then(() => {
      res.json({
        status: "Show Friend ",
      });
    })
    .catch((err) => next(err));
};

// updateGeoLocation
exports.updateGeoLocation = (req, res, next) => {
  userService
    .updateGeoLocation()
    .then(() => {
      res.json({
        status: "Update Geo Location ",
      });
    })
    .catch((err) => next(err));
};
