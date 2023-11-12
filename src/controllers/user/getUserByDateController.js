const { User } = require("../../db");
const { Op } = require("sequelize");

const getUserByDateController = async (year, month) => {
  try {
    const startDate = new Date(`${year}-${month}-01T00:00:00.000Z`);
    const endDate = new Date(
      new Date(startDate).setMonth(startDate.getMonth() + 1)
    );

    const users = await User.findAll({
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
    });
    return users;
  } catch (error) {
    throw error;
  }
};
// con user/:year/:month
module.exports = { getUserByDateController };
