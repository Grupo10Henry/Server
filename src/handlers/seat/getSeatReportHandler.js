const {
  getSeatReportController,
} = require("../../controllers/seat/getSeatReportController");

const getSeatReportHandler = async (req, res) => {
  try {
    // Llama al controlador getSeatReportController sin ningún parámetro
    const uniqueSeatsInfo = await getSeatReportController();

    // Envía la respuesta con la información de los asientos únicos
    res.status(200).json({ uniqueSeatsInfo });
  } catch (error) {
    console.error("Error al obtener el reporte de asientos:", error.message);
    res.status(500).json({ error: "Error al obtener el reporte de asientos" });
  }
};

module.exports = { getSeatReportHandler };
