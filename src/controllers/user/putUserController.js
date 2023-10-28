//Eve
const { User } = require("../../db");

const putUserController = async (userId, updatedData) => {
  // Verifica si el usuario con el ID proporcionado existe
  const existingUser = await User.findByPk(userId);

  if (!existingUser) {
    throw new Error("Usuario no encontrado");
  }

  // Actualiza los campos proporcionados en updatedData
  await existingUser.update(updatedData);

  return existingUser;
};

module.exports = { putUserController };
