//Eve
const { Carrito } = require("../../db");

const getUserBlockedController = async (email) => {
  const userBlocked = await Carrito.findAll({
    where: { sector: email },
  });
  if (userBlocked) return { isBlocked: true };
  else return { isBlocked: false };
};

module.exports = { getUserBlockedController };
