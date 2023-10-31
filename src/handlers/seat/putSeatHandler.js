// //lu

const {
  putSeatController,
} = require("../../controllers/seat/putSeatController");

const putSeatHandler = async (req, res) => {
  try {
    const seatId = req.params.id;

    const updatedSeatData = req.body;

    const updatedSeat = await putSeatController(seatId, updatedSeatData);

    if (!updatedSeat) {
      return res.status(404).json({ error: "Asiento no encontrado" });
    }

    res.status(200).json(updatedSeat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { putSeatHandler };
