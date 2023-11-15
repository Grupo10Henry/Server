//lu
const { Paystub } = require("../../db");

const getPaystubsIdController = async (id) => {
  const paystubs = await Paystub.findAll({ where: { userID: id } }); // Obtener todos los Paystubs desde la base de datos
  if (paystubs) return paystubs;
  else throw new Error("No se encuentran Facturas asociadas al usuario");
};

module.exports = { getPaystubsIdController };
