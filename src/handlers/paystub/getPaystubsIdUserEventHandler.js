const {
  getPaystubsIdUserEventController,
} = require("../../controllers/paystub/getPaystubsIdUserEventController");

const getPaystubsIdUserEventHandler = async (req, res) => {
  const { id, eventID } = req.params;
  try {
    const paystubs = await getPaystubsIdUserEventController(id, eventID);
    res.status(200).json(paystubs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPaystubsIdUserEventHandler };
