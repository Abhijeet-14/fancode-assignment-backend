const Match = require("../controllers/match");

module.exports = function (app) {
  app.route("/matches").get(async (req, res, next) => {
    try {
      return res.json(await Match.getAllMatches());
    } catch (err) {
      return next(err);
    }
  });
  app.route("/match/news").get(async (req, res, next) => {
    try {
      let params = req.query;
      return res.json(await Match.getAllNewsByMatchId(params));
    } catch (err) {
      return next(err);
    }
  });
};
