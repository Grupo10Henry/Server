// //Eve

const { Op } = require("sequelize");
const { Event } = require("../../db");

const getEventController = async (search, category, date, price) => {
  let whereClause = {};

  if (search) {
    const find = Event.findAll({ where: { name: search } });
    if (find.length > 0) whereClause.name = search;
    else whereClause.locationName = search;
  }
  if (category) {
    whereClause.category = category;
  }
  if (date) {
    whereClause.date = date;
  }
  if (price) {
    whereClause.priceMax = { [Op.lte]: price };
  }
  const filteredDB = await Event.findAll({ where: whereClause });

  if (filteredDB.length > 0) {
    return filteredDB;
  } else {
    throw new Error("No existen eventos que coincidan con la búsqueda");
  }
};

module.exports = { getEventController };
