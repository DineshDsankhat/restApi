const config = require("../config.json");
const bcrypt = require("bcryptjs");
const db = require("../utils/db");
const jwt = require("jsonwebtoken");
const User = db.User;

// template
// exports."name of functiom" = async (body) => {
// code here
// }

// register
exports.register = async (body) => {
  if (await User.findOne({ username: body.username })) {
    throw 'Username "' + body.username + '" is already taken';
  }
  const user = new User(body);
  if (body.password) {
    user.hash = bcrypt.hashSync(body.password, 10);
  }
  await user.save();
  const token = jwt.sign({ sub: user.id }, config.secret, {
    expiresIn: "300s",
  });
  return {
    ...user.toJSON(),
    token,
  };
};

// authenticate
exports.authenticate = async (body) => {
  const user = await User.findOne({ username: body.username });
  if (user && bcrypt.compareSync(body.password, user.hash)) {
    const token = jwt.sign({ sub: user.id }, config.secret, {
      expiresIn: "7d",
    });
    return {
      ...user.toJSON(),
      token,
    };
  }
};

// addfriend
exports.addFriend = async (body) => {
  // validate Bouth id is not Same
  if (body.id == body.fid) throw "Bouth id is Same";
  const user = await User.findById(body.id);
  const friend = await User.findById(body.fid);

  // validate user are exist or not
  if (!user) throw "User not found";
  if (!friend) throw "friend not found";

  let fd = user.friends.find((f) => f._id === body.fid);
  if (fd) return " Already Friend";

  user.friends.push({ _id: friend.id, name: friend.name });

  // User.updateOne({})
  return user;
};

// showfriend
exports.showfriend = async (body) => {};

// updateGeoLocation
exports.updateGeoLocation = async (body) => {};

//find by id

exports.getById = async (id) => {
  return await User.findById(id);
};
