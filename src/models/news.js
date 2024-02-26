const mysql = require("../lib/mysql");

const createNews = async (requestData) => {
  const statement =
    "insert into news( title, description, matchId, tourId) values (?, ?, ?, ?);";
  const parameters = [
    requestData.title,
    requestData.description,
    requestData.matchId,
    requestData.tourId,
  ];
  response = await mysql.query(statement, parameters);
  let { insertId } = response;

  return {
    message: "success",
    data: { insertId, ...requestData },
  };
};

const getAllNews = async () => {
  const statement = "select * from news;";
  const parameters = [];

  return await mysql.query(statement, parameters);
};

const getMatchById = async (matchId) => {
  if (!matchId) return null;

  const statement = "select * from matches where id=?;";
  const parameters = [matchId];

  const response = await mysql.query(statement, parameters);
  if (response.length != 1)
    throw new Error(`Zero match exist for match id ${matchId}`);
  return response[0];
};

const getTourById = async (tourId) => {
  const statement = "select * from tours where id=?;";
  const parameters = [tourId];

  const response = await mysql.query(statement, parameters);
  if (response.length == 0)
    throw new Error(`Zero tour exist for tour id ${tourId}`);
  return response[0];
};

module.exports = {
  createNews: createNews,
  getAllNews: getAllNews,
  getMatchById: getMatchById,
  getTourById: getTourById,
};
