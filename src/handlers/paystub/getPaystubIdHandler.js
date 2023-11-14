const {
  getPaystubsIdController,
} = require("../../controllers/paystub/getPaystubsiDController");

const getPaystubsIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const paystubs = await getPaystubsIdController(id);
    res.status(200).json(paystubs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPaystubsIdHandler };
