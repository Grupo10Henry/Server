//Eve
const { User } = require("../../db");

const deleteUserController = async (userId) => {
  const user = await User.findByPk(userId);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  user.destroy({
    where: {
      userID: userId, // ID del usuario que deseas eliminar lógicamente
    },
  });
  return user;
};

module.exports = {
  deleteUserController,
};
