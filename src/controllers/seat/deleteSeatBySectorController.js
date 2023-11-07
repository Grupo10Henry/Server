const { Seat } = require("../../db");

const deleteSeatBySectorController = async (eventID, sector) => {
  try {
    const result = await Seat.destroy({
      where: { eventID, sector },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteSeatBySectorController };
