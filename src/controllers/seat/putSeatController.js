// lu
const { Seat } = require("../../db");

const putSeatController = async (seatId, updatedSeatData) => {
  try {
    const seat = await Seat.findByPk(seatId);
    if (!seat) {
      return null; // El asiento no existe, no se puede actualizar
    }
    seat.update(updatedSeatData);
    return seat;
  } catch (error) {
    throw new Error("Error al actualizar el asiento");
  }
};

module.exports = { putSeatController };
