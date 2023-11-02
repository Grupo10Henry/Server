const { Seat } = require("../../db");

const putSeatController = async (seatID, updatedData) => {
  const existingSeat = await Seat.findByPk(seatID);

  if (!existingSeat) {
    throw new Error("Asiento no encontrado");
  }

  await existingSeat.update(updatedData);

  return existingSeat;
};

module.exports = { putSeatController };
