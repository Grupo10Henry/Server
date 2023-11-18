//Eve
const { Carrito } = require("../../db");

const getUserBlockedController = async (email) => {
  const userBlocked = await Carrito.findAll({
    where: { sector: email },
  });
  if (userBlocked.length > 0) return true;
  else return false;
};

module.exports = { getUserBlockedController };
