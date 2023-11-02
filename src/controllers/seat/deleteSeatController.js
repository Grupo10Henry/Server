const { Seat } = require("../../db");

const deleteSeatController = async (seatID) => {
  try {
    const result = await Seat.destroy({
      where: { seatID: seatID },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteSeatController };
