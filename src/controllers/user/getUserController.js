//Eve
const { User } = require("../../db");
const getUserController = async () => {
  const userDataBase = await User.findAll();
  return [...userDataBase];
};
module.exports = {
  getUserController,
};
