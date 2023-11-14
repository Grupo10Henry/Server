//Eve
const { Paystub } = require("../../db");

const getPaystubsIdUserEventController = async (id, evenID) => {
  const paystubs = await Paystub.findAll({
    where: { userID: id, eventID: evenID },
  }); // Obtener todos los Paystubs desde la base de datos
  if (paystubs) return paystubs;
  else
    throw new Error(
      "No se encuentran Facturas asociadas entre el usuario y el evento"
    );
};

module.exports = { getPaystubsIdUserEventController };
