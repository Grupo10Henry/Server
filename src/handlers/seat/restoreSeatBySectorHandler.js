const {
  restoreSeatBySectorController,
} = require("../../controllers/seat/restoreSeatBySectorController");

const restoreSeatBySectorHandler = async (req, res) => {
  const { eventID, sector } = req.params;

  try {
    const result = await restoreSeatBySectorController(eventID, sector);
    res
      .status(200)
      .json({ message: "Asientos restaurados exitosamente", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al restaurar los asientos" });
  }
};

module.exports = { restoreSeatBySectorHandler };
