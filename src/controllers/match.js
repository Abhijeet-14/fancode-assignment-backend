const Match = require("../models/match");

const getAllMatches = async () => {
  return await Match.getAllMatches();
};

const getAllNewsByMatchId = async (params) => {
  const { matchId } = params;

  if (!matchId) {
    throw new Error("Missing required parameter: matchId");
  }
  params["matchId"] = parseInt(matchId);
  return await Match.getAllNewsByMatchId(params);
};

module.exports = {
  getAllMatches: getAllMatches,
  getAllNewsByMatchId: getAllNewsByMatchId,
};
