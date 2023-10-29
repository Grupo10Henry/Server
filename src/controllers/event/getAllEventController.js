//Eve
const { Event } = require("../../db");
const getAllEventController = () => {
  const allEvents = Event.findAll();
  return allEvents;
};
module.exports = { getAllEventController };
