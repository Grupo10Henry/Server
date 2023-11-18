const { Carrito } = require("../../db");

const deleteUserBlockedController = async (id) => {
  const deletedUserBlocked = await Carrito.destroy({
    where: {
      userID: id,
    },
  });

  return "Usuario bloqueado eliminado correctamente";
};

module.exports = { deleteUserBlockedController };
