const {
  deleteSeatBySectorController,
} = require("../../controllers/seat/deleteSeatBySectorController");

const deleteSeatBySectorHandler = async (req, res) => {
  const { eventID, sector } = req.params;

  try {
    const result = await deleteSeatBySectorController(eventID, sector);
    res
      .status(200)
      .json({ message: "Asientos eliminados exitosamente", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar los asientos" });
  }
};

module.exports = { deleteSeatBySectorHandler };
