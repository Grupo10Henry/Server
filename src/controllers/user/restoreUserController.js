const { User } = require("../../db");

const restoreUserController = async (id) => {
  const user = await User.findByPk(id, { paranoid: false });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // Restaurar el usuario estableciendo deletedAt a null
  await user.restore();

  return user;
};

module.exports = { restoreUserController };
