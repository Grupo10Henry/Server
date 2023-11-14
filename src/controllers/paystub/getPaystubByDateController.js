const { Paystub } = require("../../db");
const { Op } = require("sequelize");

const getPaystubByDateController = async (year, month) => {
  try {
    const startDate = new Date(`${year}-${month}-01T00:00:00.000Z`);
    const endDate = new Date(
      new Date(startDate).setMonth(startDate.getMonth() + 1)
    );

    const paystubs = await Paystub.findAll({
      where: {
        issueDate: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    return paystubs;
  } catch (error) {
    throw error;
  }
};

module.exports = { getPaystubByDateController };
