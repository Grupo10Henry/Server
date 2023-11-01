const { Seat } = require("../../db");

const getSeatByEventController = async (eventID, sector) => {
  const seats = await Seat.findAll({
    where: { eventID: eventID, sector: sector },
  });
  return seats;
};

module.exports = { getSeatByEventController };
