//Eve
const {
  getAdminSeatController,
} = require("../../controllers/seat/getAdminSeatController");

const getAdminSeatHandler = async (req, res) => {
  try {
    const eventID = req.params.id;
    const prices = await getAdminSeatController(eventID);

    if (prices.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron asientos en este evento" });
    }

    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAdminSeatHandler };
