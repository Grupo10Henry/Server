//Eve
const { User } = require("../../db");
const getIdUserController = async (id) => {
  const user = await User.findOne({ where: { userID: id } });
  return user;
};
module.exports = {
  getIdUserController,
};
