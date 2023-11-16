const { Carrito } = require("../../db");

const postUserBlockedController = async (userID, email) => {
  const newUserBlocked = await Carrito.create({
    userID: userID,
    paymentNum: "-",
    seatsLocation: "-",
    sector: email,
  });
  return "Usuario bloqueado con éxito";
};

module.exports = { postUserBlockedController };
