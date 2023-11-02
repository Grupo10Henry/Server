const {
  putSeatController,
} = require("../../controllers/seat/putSeatController");

const putSeatHandler = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedSeat = await putSeatController(id, updatedData);
    if (updatedSeat) {
      res.status(200).json(updatedSeat);
    } else {
      res.status(404).json({ message: "Asiento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { putSeatHandler };
