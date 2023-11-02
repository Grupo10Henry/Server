//Eve
const { Event } = require("../../db");
const { Op } = require("sequelize");

const getPreviusEventController = async () => {
  const today = new Date(); // Fecha actual
  today.setHours(0, 0, 0, 0); // Establecer a las 00:00:00

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1); // Restar un día a la fecha actual

  const previousEvents = await Event.findAll({
    where: {
      date: {
        [Op.lte]: yesterday,
      },
    },
  });
  if (previousEvents.length > 0) return previousEvents;
  else throw new Error("No hay eventos previos al día de hoy");
};

module.exports = { getPreviusEventController };
