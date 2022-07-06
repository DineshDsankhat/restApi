const express = require("express");
const port = 3000;
var bodyParser = require("body-parser");
const app = express();
const jwt = require("./utils/jwt.js");
const errorHandler = require("./utils/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//jwt
app.use(jwt());

//routes
app.use("/user",require("./routes/userRouts").route);
app.use("/story",require("./routes/storyRouts").route);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
