
//Eve
const { User } = require("../../db");

const restoreUserController = async (userId) => {
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

