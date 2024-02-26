const mysql = require("../lib/mysql");

const getAllMatches = async () => {
  const statement = "select * from matches;";
  const parameters = [];
  return await mysql.query(statement, parameters);
};

const getAllNewsByMatchId = async (params) => {
  const statement = `select n.*, m.id as matchId from news as n inner join matches as m on m.id = n.matchId where n.matchId IS NOT NULL and m.id = ?`;

  const parameters = [params.matchId];
  return await mysql.query(statement, parameters);
};

module.exports = {
  getAllMatches: getAllMatches,
  getAllNewsByMatchId: getAllNewsByMatchId,
};
