// lu
const { Seat } = require("../../db");

const deleteSeatController = async (seatId) => {
  try {
    const seat = await Seat.findByPk(seatId);
    if (!seat) {
      return null; // El asiento no existe, no se puede eliminar
    }
    await seat.destroy();
    return seat;
  } catch (error) {
    throw new Error("Error al eliminar el asiento");
  }
};

module.exports = { deleteSeatController };
