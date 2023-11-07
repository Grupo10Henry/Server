const { Seat } = require("../../db");

const postSeatEventController = async (eventID, sector) => {
  const seats = await Seat.findAll({
    where: { eventID: eventID, sector: sector },
  });
  return seats;
};

module.exports = { postSeatEventController };
