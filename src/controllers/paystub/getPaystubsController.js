//lu
const { Paystub } = require("../../db");

const getPaystubsController = async () => {
  const paystubs = await Paystub.findAll(); // Obtener todos los Paystubs desde la base de datos
  return paystubs;
};

module.exports = { getPaystubsController };
