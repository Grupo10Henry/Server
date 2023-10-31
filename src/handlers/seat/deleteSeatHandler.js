// lu
const {
  deleteSeatController,
} = require("../../controllers/seat/deleteSeatController");

const deleteSeatHandler = async (req, res) => {
  try {
    const seatId = req.params.id;

    const deletedSeat = await deleteSeatController(seatId);

    if (!deletedSeat) {
      return res.status(404).json({ error: "Asiento no encontrado" });
    }

    res.status(200).json(deletedSeat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteSeatHandler };
