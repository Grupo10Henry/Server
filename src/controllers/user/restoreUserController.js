//Eve
const { User } = require("../../db");

const restoreUserController = async (userId) => {
  // const user = await User.findByPk(userId);

  // if (!user) {
  //   throw new Error("Usuario no encontrado");
  // }
  const restoredUser = await User.restore({
    where: {
      userID: userId,
    },
  });
  return await User.findOne({ where: { userID: userId } });
};

module.exports = {
  restoreUserController,
};
