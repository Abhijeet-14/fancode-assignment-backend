const mysql = require("../lib/mysql");

const getAllSportsToursAndMatches = async () => {
  const statement =
    "select s.name as sportName, t.name as tourName, m.name as matchName, m.id as matchId, m.startTime as matchStartTime, m.format as matchFormat " +
    "from matches m inner join tours t on m.tourId = t.id " +
    "inner join sports s on t.sportId = s.id order by m.startTime DESC";
  const parameters = [];

  return await mysql.query(statement, parameters);
};

const getAllNewsBySportId = async (params) => {
  const statement = `select n.id as id, n.*, s.id as sportId from news as n inner join tours as t on t.id = n.tourId inner join sports as s on s.id = t.sportId where s.id = ?`;
  const parameters = [params.sportId];

  return await mysql.query(statement, parameters);
};

module.exports = {
  getAllSportsToursAndMatches: getAllSportsToursAndMatches,
  getAllNewsBySportId: getAllNewsBySportId,
};
