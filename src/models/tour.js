const mysql = require("../lib/mysql");

const getAllTours = async () => {
  const statement = "select * from tours;";
  const parameters = [];
  return await mysql.query(statement, parameters);
};

const getMatchesByTourName = async (params) => {
  const statement =
    "select m.*, tours.name as tourName from matches as m left join tours on m.tourId = tours.id where tours.name = ? limit ? offset ?";
  const parameters = [params.name, params.limit, params.offset];

  return await mysql.query(statement, parameters);
};

const getAllNewsByTourId = async (params) => {
  const statement = `select * from news as n inner join tours as t on t.id = n.tourId where t.id = ?`;
  const parameters = [params.tourId];
  return await mysql.query(statement, parameters);
};

module.exports = {
  getAllTours: getAllTours,
  getMatchesByTourName: getMatchesByTourName,
  getAllNewsByTourId: getAllNewsByTourId,
};
