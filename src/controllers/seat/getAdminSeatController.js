const { Seat } = require("../../db");

const getAdminSeatController = async (eventID) => {
  const seats = await Seat.findAll({ where: { eventID: eventID } });

  // Usar un mapa para almacenar objetos únicos por sector
  const uniqueSectorsMap = new Map();

  seats.forEach((seat) => {
    const sector = seat.sector;

    // Verificar si el sector ya existe en el mapa
    if (!uniqueSectorsMap.has(sector)) {
      // Si el sector no existe en el mapa, crear un nuevo objeto con la información del asiento
      uniqueSectorsMap.set(sector, {
        price: seat.price,
        sector: seat.sector,
        rows: seat.rows,
        columns: seat.columns,
      });
    }
  });

  // Obtener los valores únicos (los objetos) del mapa como un array
  const uniqueSectorsInfo = Array.from(uniqueSectorsMap.values());

  return uniqueSectorsInfo;
};

module.exports = { getAdminSeatController };
