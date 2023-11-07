// // //Eve

// const { Op } = require("sequelize");
// const { Event } = require("../../db");
// const {getNextEventController} = require("./getNextEventController")
// const getEventController = async (search, category, date, price) => {
//   let whereClause = {};

//   if (search) {
//     const find = await Event.findAll({
//       where: { name: { [Op.iLike]: `%${search}%` } },
//     });
//     console.log(find);
//     if (find.length > 0) whereClause.name = { [Op.iLike]: `%${search}%` };
//     else whereClause.locationName = { [Op.iLike]: `%${search}%` };
//   }
//   if (category) {
//     whereClause.category = category;
//   }
//   if (date) {
//     whereClause.date = date;
//   }
//   if (price) {
//     whereClause.priceMax = { [Op.lte]: price };
//   }
//   const filteredDB = await Event.findAll({ where: whereClause });

//   if (filteredDB.length > 0) {
//     return filteredDB;
//   } else {
//     throw new Error("No existen eventos que coincidan con la búsqueda");
//   }
// };

// module.exports = { getEventController };

const { getNextEventController } = require("./getNextEventController");

const getEventController = async (search, category, date, price) => {
  // Obtén los eventos próximos desde getNextEventController
  const nextEvents = await getNextEventController();

  if (nextEvents.length > 0) {
    // Filtra eventos en base a los parámetros de búsqueda
    const filteredEvents = nextEvents.filter((event) => {
      const isMatch =
        (!search ||
          event.name.toLowerCase().includes(search.toLowerCase()) ||
          event.locationName.toLowerCase().includes(search.toLowerCase())) &&
        (!category || event.category === category) &&
        (!date || event.date === date) &&
        (!price || event.priceMax <= price);
      return isMatch;
    });

    if (filteredEvents.length > 0) {
      return filteredEvents;
    } else {
      throw new Error("No existen eventos que coincidan con la búsqueda");
    }
  } else {
    throw new Error("No hay eventos próximos para realizar la búsqueda");
  }
};

module.exports = { getEventController };
