//Eve
const { Event } = require("../../db");
const { Op } = require("sequelize");

const getNextEventController = async () => {
  const today = new Date(); // Fecha actual
  today.setHours(0, 0, 0, 0); // Establecer a las 00:00:00

  const nextEvents = await Event.findAll({
    where: {
      date: {
        [Op.gte]: today,
      },
    },
  });
  if (nextEvents.length > 0) {
    // Ordena los eventos por fecha y hora
    nextEvents.sort((a, b) => {
      const dateA = new Date(a.date + "T" + a.time); // Combina la fecha y la hora en un objeto Date
      const dateB = new Date(b.date + "T" + b.time);
      return dateA - dateB; // Ordena eventos más cercanos primero
    });
    return nextEvents;
  } else
    throw new Error(
      "No hay eventos agendados, pronto tendremos más novedades para usted"
    );
};

module.exports = { getNextEventController };
