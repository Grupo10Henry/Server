const { Seat } = require("../../db");

const getSeatController = async (eventID) => {
  const seats = await Seat.findAll({ where: { eventID: eventID } });

  // Extraer solo los precios de los asientos y el sector
  const pricesAndSectors = seats.map((seat) => [seat.price, seat.sector]);
  const uniquePricesAndSectors = [...new Set(pricesAndSectors)];

  return uniquePricesAndSectors;
};

module.exports = { getSeatController };
