const {
  getPaystubByDateController,
} = require("../../controllers/paystub/getPaystubByDateController");

const getPaystubByDateHandler = async (req, res) => {
  const { year, month } = req.params;

  try {
    const paystubs = await getPaystubByDateController(year, month);

    res.status(200).json({ paystubs });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los Paystubs por fecha" });
  }
};

module.exports = { getPaystubByDateHandler };
