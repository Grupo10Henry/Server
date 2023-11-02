//lu
const {
  getSeatController,
} = require("../../controllers/seat/getSeatController");

const getSeatHandler = async (req, res) => {
  try {
    const eventID = req.params.id;

    // if (!eventID) {
    //   return res
    //     .status(400)
    //     .json({ error: "Se requiere un sector o ID válido" });
    // }

    const prices = await getSeatController(eventID);

    if (prices.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron asientos en este" });
    }

    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getSeatHandler };
