//Eve
const { User } = require("../../db");

const putIsAdminUserController = async (userId, data) => {
  // Verifica si el usuario con el ID proporcionado existe
  const existingUser = await User.findByPk(userId, data);

  if (!existingUser) {
    throw new Error("Usuario no encontrado");
  }

  // Actualiza los campos proporcionados en updatedData
  await existingUser.update(data);

  return existingUser;
};

module.exports = { putIsAdminUserController };
