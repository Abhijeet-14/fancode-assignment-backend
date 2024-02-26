const Tour = require("../models/tour");

const getAllTours = async () => {
  return await Tour.getAllTours();
};

const getMatchesByTourName = async (params) => {
  // To improve Latency, following changes are donw:
  //    1. added indexing in tours table on column name
  //    2. add Limit & offset to get chunk of data instead of all huge data

  const { name, limit, offset } = params;

  if (!name) {
    throw new Error("Missing required parameter: name");
  }

  params["limit"] = limit ? parseInt(limit) : 10;
  params["offset"] = offset ? parseInt(offset) : 0;

  return await Tour.getMatchesByTourName(params);
};

const getAllNewsByTourId = async (params) => {
  const { tourId } = params;
  if (!tourId) {
    throw new Error("Missing required parameter: tourId");
  }
  params["tourId"] = parseInt(tourId);
  return await Tour.getAllNewsByTourId(params);
};

module.exports = {
  getAllTours: getAllTours,
  getMatchesByTourName: getMatchesByTourName,
  getAllNewsByTourId: getAllNewsByTourId,
};
