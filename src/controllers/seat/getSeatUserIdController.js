const { Seat } = require("../../db");

const getSeatUserIdController = async (userID) => {
  const userSeats = await Seat.findAll({ where: { userID: userID } });
  if (userSeats) return userSeats;
  else throw new Error("No se encuentran asientos asociados al usuario");
};
module.exports = { getSeatUserIdController };
