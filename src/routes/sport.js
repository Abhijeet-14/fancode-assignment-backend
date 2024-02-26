const Sport = require("../controllers/sport");

module.exports = function (app) {
  app.route("/sport/tour/match").get(async (req, res, next) => {
    try {
      return res.json(await Sport.getAllSportsToursAndMatches());
    } catch (err) {
      return next(err);
    }
  });

  app.route("/sport/news").get(async (req, res, next) => {
    try {
      let params = req.query;
      return res.json(await Sport.getAllNewsBySportId(params));
    } catch (err) {
      return next(err);
    }
  });
};
