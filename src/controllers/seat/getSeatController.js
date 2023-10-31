const { Seat } = require("../../db");

const getSeatController = async (eventID) => {
  const seats = await Seat.findAll({ where: { eventID: eventID } });

  // Usar un mapa para almacenar objetos únicos por combinación de precio y sector
  const uniquePricesAndSectorsMap = new Map();

  // Agregar cada objeto al mapa utilizando la combinación de precio y sector como clave
  seats.forEach((seat) => {
    const priceAndSector = [seat.price, seat.sector];
    uniquePricesAndSectorsMap.set(priceAndSector.toString(), priceAndSector);
  });

  // Obtener los valores únicos (los objetos) del mapa como un array
  const uniquePricesAndSectors = Array.from(uniquePricesAndSectorsMap.values());

  return uniquePricesAndSectors;
};

module.exports = { getSeatController };
