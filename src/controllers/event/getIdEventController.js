const { Event } = require("../../db");
const getIdEventController = (id) => {
  const allEvents = Event.findOne({ where: { eventID: id } });
  return allEvents;
};
module.exports = { getIdEventController };
