const {
  getPaystubsController,
} = require("../../controllers/paystub/getPaystubsController");

const getPaystubsHandler = async (req, res) => {
  try {
    const paystubs = await getPaystubsController();
    res.status(200).json(paystubs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPaystubsHandler };
