const storyService = require("../services/storyService")

exports.addStory = (req, res, next) => {
    storyService.addStory().then(() => {
      res.json({
        status: "Show Friend ",
      });
    })
    .catch((err) => next(err));
  };
  