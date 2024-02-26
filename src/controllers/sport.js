const Sport = require("../models/sport");

const getAllSportsToursAndMatches = async () => {
  const matches = await Sport.getAllSportsToursAndMatches();
  const res = {};
  matches.forEach((match) => {
    const {
      sportName,
      tourName,
      matchName,
      matchId,
      matchStartTime,
      matchFormat,
    } = match;

    if (!res[sportName]) {
      res[sportName] = {};
    }
    if (!res[sportName][tourName]) {
      res[sportName][tourName] = [];
    }

    matchDetail = {
      id: matchId,
      name: matchName,
      format: matchFormat,
      startTime: matchStartTime,
    };

    res[sportName][tourName].push(matchDetail);
  });
  return res;
};

const getAllNewsBySportId = async (params) => {
  const { sportId } = params;

  if (!sportId) {
    throw new Error("Missing required parameter: sportId");
  }
  params["sportId"] = parseInt(sportId);
  return await Sport.getAllNewsBySportId(params);
};
module.exports = {
  getAllSportsToursAndMatches: getAllSportsToursAndMatches,
  getAllNewsBySportId: getAllNewsBySportId,
};
