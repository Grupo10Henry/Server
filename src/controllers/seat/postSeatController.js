// lu
const { Seat } = require("../../db");

async function postSeatController(eventID, rows, columns, sector, price) {
  const seatMatrix = [];
  const findSeat = await Seat.findAll({
    where: { eventID: eventID, sector: sector },
  });
  if (findSeat.length === 0) {
   for (let row = 1; row <= rows; row++) {
      for (let col = 0; col < columns; col++) {
        const seatLocation = `${row} - ${String.fromCharCode(65 + col)}`
        seatMatrix.push({
                  eventID: eventID,
                  rows: rows,
                  columns: columns,
                  seatLocation: seatLocation,
                  sector: sector,
                  price: price,
                });
              }
            }
    const createdSeats = await Seat.bulkCreate(seatMatrix);
    return createdSeats;
  } else {
    throw new Error("No se pueden crear sectores repetidos");
  }
}
module.exports = { postSeatController };