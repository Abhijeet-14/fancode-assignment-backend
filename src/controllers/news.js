const News = require("../models/news");

const getAllNews = async () => {
  return await News.getAllNews();
};

const createNews = async (requestData) => {
  let { title, description, tourId, matchId } = requestData;

  if (!title) {
    throw new Error("Missing required parameter: title");
  }

  if (!description) {
    throw new Error("Missing required parameter: description");
  }

  if (!tourId) {
    throw new Error("Missing required parameter: TourId");
  }

  // check match exist for matchId, ignore for null matchId
  const match = await News.getMatchById(matchId);
  if (match && match.tourId !== tourId)
    throw new Error("Invalid tourId given for match");

  // check tour exist for tourId
  await News.getTourById(tourId);

  requestData["matchId"] = matchId;
  requestData["tourId"] = tourId;

  return await News.createNews(requestData);
};

module.exports = {
  getAllNews: getAllNews,
  createNews: createNews,
};
