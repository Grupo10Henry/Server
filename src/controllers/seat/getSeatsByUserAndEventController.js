const { Seat } = require("../../db");

const getSeatsByUserAndEventController = async (userID, eventID) => {
  const seats = await Seat.findAll({
    where: {
      userID: userID,
      eventID: eventID
    }
  });

  if (seats.length > 0) return seats;
  else throw new Error("No se encuentran asientos asociados al usuario y evento especificados");
};

module.exports = { getSeatsByUserAndEventController };