//Eve
const { Event } = require("../../db");
const getAllEventController = async () => {
  const allEvents = await Event.findAll();
  allEvents.sort((a, b) => {
    const dateA = new Date(a.date + "T" + a.time); // Combina la fecha y la hora en un objeto Date
    const dateB = new Date(b.date + "T" + b.time);
    return dateA - dateB; // Ordena eventos más cercanos primero
  });
  return allEvents;
};
module.exports = { getAllEventController };
