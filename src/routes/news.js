const News = require("../controllers/news");

module.exports = function (app) {
  app.route("/news").get(async (req, res, next) => {
    try {
      return res.json(await News.getAllNews());
    } catch (err) {
      return next(err);
    }
  });

  app.route("/news").post(async (req, res, next) => {
    try {
      const requestData = req.body;
      return res.json(await News.createNews(requestData));
    } catch (err) {
      return next(err);
    }
  });
};
