const { Seat } = require("../../db");

const restoreSeatBySectorController = async (eventID, sector) => {
  try {
    const result = await Seat.restore({
      where: { eventID, sector },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { restoreSeatBySectorController };
